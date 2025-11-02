import express from "express";
import {
  CreateRoomSchema,
  CreateUserSchema,
  SigninSchema,
} from "@repo/common/types";
import { prismaClient as prisma } from "@repo/db/client";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";
import { middleware } from "./middleware";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.post("/api/v1/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);
  const userPassword = parsedData.data?.password as string;

  if (!parsedData.success) {
    res.status(401).json({
      message: "invalid inputs",
    });
  }
  try {
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    const user = await prisma.user.create({
      data: {
        email: parsedData.data?.email!,
        password: hashedPassword,
        name: parsedData.data?.name!,
      },
    });

    res.status(201).json({
      userId: (await user)?.id,
    });
  } catch (error) {
    res.status(411).json({
      message: "user already exists with this email",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const parsedData = SigninSchema.safeParse(req.body);
  const userPassword = parsedData.data?.password as string;

  if (!parsedData.success) {
    return res.status(203).json({
      message: "no valid data provided, email and password required",
    });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: parsedData.data?.email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    const decodedPassword = await bcrypt.compare(userPassword, user.password);
    if (!decodedPassword) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user?.id,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(202).json({
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: "invalid or unauthorized",
    });
  }
});

app.post("/api/v1/create-room", middleware, async (req, res) => {
  const parsedData = CreateRoomSchema.safeParse(req.body);
  const userId = req.userId as string;

  if (!userId || !parsedData.success) {
    res.status(203).json({
      message: "unauthorized",
    });
  }

  try {
    const room = await prisma.room.create({
      data: {
        slug: parsedData.data?.name!,
        adminId: userId,
      },
    });

    res.status(201).json({
      room: room.id,
      adminId: room.adminId,
    });
  } catch (error) {
    res.status(411).json({
      message: "room already exists",
    });
  }
});



app.get("/api/v1/chats/:roomId", async (req, res) => {
  try {
    const roomId = Number(req.params.roomId);
    // console.log(req.params.roomId);
    const messages = await prisma.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 1000,
    });

    res.json({
      messages,
    });
  } catch (e) {
    console.log(e);
    res.json({
      messages: [],
    });
  }
});

app.get("/api/v1/room/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const room = await prisma.room.findFirst({
      where: {
        slug,
      },
      orderBy: { id: "desc" },
    });

    res.json({
      room,
    });
  } catch (error: any) {
    console.log(" err: ", error.message);
    res.status(404).json({
      message: "invalid input, check the endpoint",
    });
  }
});

app.listen(PORT, () => console.log(`server up @${PORT}`));

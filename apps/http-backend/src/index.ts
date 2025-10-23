import express from 'express'
import jwt from 'jsonwebtoken'
import z from 'zod';
import { middleware } from './middleware';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "11111"
//zod validalidation

const userSchema = z.string()
 .min(3, "Username must be at least 3 characters long")
  .max(20, "Username cannot exceed 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores");

const passwordSchema = z.string()
 .min(3, "Password must be at least 3 characters long")
  .max(20, "Password cannot exceed 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Password can only contain letters, numbers, and underscores");
  

app.post("/api/v1/signup", (req, res) => {

    const {username, password} = req.body;
    userSchema.parse(username)
    passwordSchema.parse(password)
    if(!username || !password) res.status(400).send ('username and password are required ):')

} )

app.post("/api/v1/signin", (req, res) => {
    
    const userId = 1;
   const token = jwt.sign({
        userId
    }, JWT_SECRET)

     res.json({token})
})



app.post("/api/v1/create-room", middleware, (req, res) => {
    // db call expected
    res.json({
        roomId: 123
    })
} )



app.listen(PORT, () => {
    console.log("server is up @3000")
})
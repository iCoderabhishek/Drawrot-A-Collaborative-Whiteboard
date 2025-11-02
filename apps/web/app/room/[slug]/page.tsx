import axios from "axios";
import { BACKEND_URL } from "../../../endpoints";
import { ChatRoom } from "../../../components/ChatRoom";

async function getRoomId(slug: string) {
    // const response = await axios.get(`${BACKEND_URL}/room/${slug}`)
    const response = await axios.get(`http://localhost:3001/api/v1/room/${slug}`);
    console.log(response.data);
    return response.data.room.id;
}

export default async function Room({
    params
}: {
    params: {
        slug: string
    }
}) {
    const slug = (await params).slug;
    const roomId = await getRoomId(slug);
    
    return <ChatRoom id={roomId}></ChatRoom>
    // return <div>

    // </div>

}
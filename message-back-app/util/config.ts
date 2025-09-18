import dotenv from "dotenv";

dotenv.config();


const PORT: string | undefined = process.env.PORT
const MONGODB_URL: string | undefined = process.env.MONGODB_URL

export {PORT, MONGODB_URL}
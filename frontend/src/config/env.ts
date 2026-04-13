import { configDotenv } from "dotenv"
import path from "path"

function init() {
	configDotenv({
		path: path.resolve(process.cwd(), "../.env"),
	})
}

init()

const envConfig = {
	port: process.env.FRONTEND_PORT ? parseInt(process.env.FRONTEND_PORT) : 80,
	backend: process.env.BACKEND_SERVER
		? process.env.BACKEND_SERVER
		: "localhost:3000",
}

export default envConfig

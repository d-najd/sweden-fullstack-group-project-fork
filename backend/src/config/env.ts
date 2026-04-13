import { configDotenv } from "dotenv"
import path from "path"

export function init() {
	configDotenv({
		path: path.resolve(process.cwd(), "../.env"),
	})
}

init()

type EnvConfig = {
	port: number
}

const envConfig: EnvConfig = {
	port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
}

console.log("TESTING")
console.log(envConfig)

export default envConfig

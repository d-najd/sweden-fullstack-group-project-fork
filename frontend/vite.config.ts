import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import envConfig from "./src/config/env"

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: envConfig.port,
	},
	plugins: [react()],

	// Imports with *
	resolve: {
		alias: {
			"@": path.resolve(".", "./src"),
			"@/shared": "../shared",
		},
	},
})

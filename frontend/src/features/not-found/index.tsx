import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
	const navigate = useNavigate()

	return (
		<>
			<h1>Route does not have content -_-</h1>
			<button onClick={() => navigate(-1)}>Go back</button>
		</>
	)
}

// Necessary for lazy load
export const Component = NotFoundPage

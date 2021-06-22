export default function Home() {
	const SECRET = process.env.NEXT_PUBLIC_SECRET_VARIABLE;
	return (
		<div>
			<h1>Trying out .env.local variables</h1>
			<h2>My only secret is {SECRET}</h2>
		</div>
	);
}

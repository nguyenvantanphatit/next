import { use } from "react"

async function getCharacters() {
	return await (await fetch("https://64e31273bac46e480e782010.mockapi.io/api/CURD", { cache: "no-store" })).json();
}

export default function Serverpage() {
	const characters = use(getCharacters());
	return (
		<div>
			<h2>Server Fetching (getServerSideProps)</h2>
			{characters?.map((c) => {
				return (
					<ul key={c.id}>
						<li>{c.desc}</li>
					</ul>
				)
			})}
		</div>
	)
}


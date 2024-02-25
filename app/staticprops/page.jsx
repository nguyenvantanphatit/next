import Link from 'next/link'
import { use } from "react"

async function getCharacters() {
	return await (await fetch("https://64e31273bac46e480e782010.mockapi.io/api/CURD", { cache: "no-store" })).json();
}
export default function BlogList() {
	const allCharacters = use(getCharacters())
	console.log("allCharacters", allCharacters)
	return (
		<div>
			<h2>getStaticPaths and getStaticProps</h2>
			{allCharacters?.map(c =>
				<ul key={c.id}>
					<Link href={`/staticprops/${c.desc}`.replace(/\s+/g, "-").toLowerCase()}>
						<li>{c.desc}</li>
					</Link>
				</ul>
			)}
		</div>
	)
}
"use client"

import useSWR from "swr"
import Link from "next/link"

const fetcher = (path) => fetch(`https://64e31273bac46e480e782010.mockapi.io/${path}`).then(res => res.json())

export default function Clientpage() {
	const characters = useSWR("api/CURD", fetcher)
	return (
		<div>
			<h2>Client Fetching </h2>
			{characters?.data?.map(c =>
				<ul key={c.id}>
					<Link href={`/staticprops/${c.desc}`}>
						<li>
							{c.desc}
						</li>
					</Link>
				</ul>
			)}
		</div>
	)
}



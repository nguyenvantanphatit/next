// // getStaticProps in Next13
// async function getCharacters() {
// 	return await (await fetch("https://64e31273bac46e480e782010.mockapi.io/api/CURD")).json();
// }

// // getStaticPaths in Next13
// export async function generateStaticParams() {
// 	const characters = await getCharacters();
// 	console.log("characters",characters)
// 	return characters?.data?.map(c => ({
// 		slug: c?.desc.replace(/\s+/g, "-").toLowerCase()
// 	}))
// }

// export default function Staticpage({ params }) {
// 	return (
// 		<>
// 			<h1>The character name is: {params.slug}</h1>
// 		</>
// 	)
// }
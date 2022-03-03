export default function StarTrekCharacter(props){
    console.log(props)
    return <>
        <h1>{props.character.name}</h1>
    </>
}

export async function getServerSideProps({params}){
    const res = await fetch(`http://stapi.co/api/v1/rest/character?uid=${params.uid}`)
    const data = await res.json()
    
    return {
        props: {character:data.character}
    }
}
import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        console.log("Spooky Clown Scare Me")
        router.push('/')
        // setTimeout(() => {
        //     //router.back(-1)
        //     router.push('/')
        // },3000)
    },[])

    return (
        <div className="not-found">
            <h1>Oooooops...</h1>
            <h2>This doesn't exist.</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;
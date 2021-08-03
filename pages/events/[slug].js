import Link from 'next/link'
import {useRouter} from 'next/router'
export default function EventPage()
{
    const router = useRouter();
    return <div>
           <h1>My Event</h1>
           <h2>{router.query.slug}</h2>
           <Link href='\about'>About</Link>
           <button onClick={()=>router.push('/')} >Click</button>
           </div>
}
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (

    <div className="flex items-center justify-center h-screen overflow-hidden font-mono text-sm bg-white">
      <Link className="m-20 text-xl text-center bg-black border-2 border-black rounded-md grow" href="/manage">Manage agents</Link>


    </div>







  )
}

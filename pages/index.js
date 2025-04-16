import Link from "next/link";

export default function Home() {
    return <>
        <h1>Home page</h1>
        <ul>
            <li><Link href="/portfolio">portfolio</Link></li>
            <li><Link href="/client">client</Link></li>
        </ul>
    </>
}
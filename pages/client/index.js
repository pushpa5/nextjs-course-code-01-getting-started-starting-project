import Link from "next/link";

export default function ClientPage() {
    return <>
    <h1>client page</h1>
    <ul>
        <li><Link href="/client/proid">project 1</Link></li>
        <li><Link href="/client/prodid/clientid">Client id</Link></li>
    </ul>
    </>
}
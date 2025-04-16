import { useRouter } from "next/router"

export default function ProjectIdPage() {
    const router = useRouter()
    console.log(router.query)
    return (<h1>Project Id page</h1>)
}
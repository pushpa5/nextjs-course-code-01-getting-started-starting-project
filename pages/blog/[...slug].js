import { useRouter } from "next/router"

export default function BlogPage() {
    const router = useRouter()
    console.log('router', router)
    return <h1> blog page!</h1>
}
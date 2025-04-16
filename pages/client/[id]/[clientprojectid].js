import { useRouter } from "next/router"

export default function CleintProjectId() {
    const router = useRouter()
    console.log(router.query)
    return <h1>
        client project id
    </h1>
}
import { protectPage } from "@monocloud/monocloud-nextjs"

const Protected = () => {
    return <h1>If you can see this, you're logged in!</h1>
}

export default protectPage(Protected);
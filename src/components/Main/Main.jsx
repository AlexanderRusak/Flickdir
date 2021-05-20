import { Layout } from "../../hoc/Layout"
import { Content } from "../Content/Content"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Main = () => {

    return (
        <Layout>
            <Header />
            <Content />
            <Footer />
        </Layout>
    )
}
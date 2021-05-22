import { BrowserRouter } from 'react-router-dom'
import { Layout } from "../../hoc/Layout"
import { Content } from "../Content/Content"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Main = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </BrowserRouter>
    )
}
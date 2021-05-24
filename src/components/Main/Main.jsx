import { BrowserRouter } from 'react-router-dom';
import NavigationLayout from '../../hoc/NavigationLayout'
import { Layout } from "../../hoc/Layout"
import { Content } from "../Content/Content"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Main = () => {

    return (
        <BrowserRouter>
            <NavigationLayout>
                <Layout>
                    <Header />
                    <Content />
                    <Footer />
                </Layout>
            </NavigationLayout>
        </BrowserRouter>
    )
}
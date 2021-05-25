import { BrowserRouter } from 'react-router-dom';
import NavigationLayout from '../../hoc/NavigationLayout';
import { Layout } from "../../hoc/Layout";
import { Content } from "../Content/Content";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../../store/reducers/rootReducer';


const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)));

export const Main = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavigationLayout>
                    <Layout>
                        <Header />
                        <Content />
                        <Footer />
                    </Layout>
                </NavigationLayout>
            </BrowserRouter>
        </Provider>
    )
}
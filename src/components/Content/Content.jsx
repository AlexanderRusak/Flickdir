
import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from '../../hoc/Layout';
import { Bookmarks } from '../Bookmarks/Bookmarks';
import { PictureBox } from '../PictureBox/PictureBox';
import SignIn from '../SignIn/SignIn';
import { NavBar } from '../UI/Navbar/Navbar';
import classes from './Content.module.css';

export const Content = () => {

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        setIsLogin(!!localStorage.getItem('idToken'));
    }, [isLogin])

    return (
        <Switch>
            <Route path='/' component={SignIn} exact />
            <Layout styles={classes.Content}>
                {isLogin ? <> <NavBar />
                    <Layout>
                        <Route path='/search' component={PictureBox} />
                        <Route path='/bookmarks' component={Bookmarks} />
                    </Layout></> : <Redirect to='/' />}
            </Layout >
        </Switch>
    )
}
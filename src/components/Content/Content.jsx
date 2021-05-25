
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from '../../hoc/Layout';
import { Bookmarks } from '../Bookmarks/Bookmarks';
import { PictureBox } from '../PictureBox/PictureBox';
import SignIn from '../SignIn/SignIn';
import { NavBar } from '../UI/Navbar/Navbar';
import classes from './Content.module.css';
import { useEffect } from 'react';
import Logout from '../Logout/Logout';
import { autoLogin } from '../../store/actions/auth';

export const Content = () => {

    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(autoLogin())
    }, [dispatch])

    let routes = (
        <>
            <Route path='/signIn' component={SignIn} exact />
            <Redirect to='/signIn' />
        </>
    )

    if (!!token) {
        routes = (
            <> <Redirect to='/search' />
                <NavBar />
                <Layout>
                    <Route path='/search' component={PictureBox} />
                    <Route path='/bookmarks' component={Bookmarks} />
                    <Route path='/logout' component={Logout} />
                    <Redirect to='/search' />
                </Layout>
            </>
        )
    }

    return (
        <Switch>
            <Layout styles={classes.Content}>
                {routes}
            </Layout>
        </Switch>
    )
}
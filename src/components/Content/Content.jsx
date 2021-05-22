import { Switch, Route } from 'react-router-dom';
import { Layout } from '../../hoc/Layout';
import { Bookmarks } from '../Bookmarks/Bookmarks';
import { PictureBox } from '../PictureBox/PictureBox';
import { NavBar } from '../UI/Navbar/Navbar';
import classes from './Content.module.css';

export const Content = () => {

    return (
        <Switch>
            <Layout styles={classes.Content}>
                <NavBar />
                <Layout>
                    <Route path='/search' component={PictureBox} />
                    <Route path='/bookmarks' component={Bookmarks} />
                </Layout>
            </Layout >
        </Switch>
    )
}
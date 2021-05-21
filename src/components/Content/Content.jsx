import { Layout } from '../../hoc/Layout';
import { PictureBox } from '../PictureBox/PictureBox';
import { Input } from '../UI/Input/Input';
import { NavBar } from '../UI/Navbar/Navbar';
import classes from './Content.module.css';

export const Content = () => {

    return (
        <Layout styles={classes.Content}>
            <Layout>
                <Input placeholder='Search here ...' />
                <PictureBox />
            </Layout>
            <NavBar />

        </Layout >
    )
}
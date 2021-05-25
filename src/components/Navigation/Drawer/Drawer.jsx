import { PureComponent } from 'react'
import classes from './Drawer.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { Icon } from '../../UI/Icon/Icon';
import Backdrop from '../../UI/Backdrop/Backdrop'
import { Link } from 'react-router-dom'
import { Text } from '../../UI/Text/Text';

class Drawer extends PureComponent {


  renderLinks() {

    return (
      <li >
        <Link to='/logout' style={{ textDecoration: 'none' }}>

          <Text text='Logout' styles={{ fontSize: '20px', color: '#fff' }} />
        </Link>
      </li >
    )

  }

  render() {
    const { isLogin } = this.props;
    const cls = [classes.Drawer]
    console.log(isLogin);

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <Icon iconElement={FaUserCircle} size={50} styles={{ color: 'black' }} />
          <Text text='UserName' styles={{ fontSize: '25px' }} />
          <ul>
            {isLogin && this.renderLinks()}
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    )
  }
}

export default Drawer
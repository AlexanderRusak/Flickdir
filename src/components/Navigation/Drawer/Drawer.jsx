import React, { Component } from 'react'
import classes from './Drawer.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { Icon } from '../../UI/Icon/Icon';
import Backdrop from '../../UI/Backdrop/Backdrop'
import { Link } from 'react-router-dom'
import { Text } from '../../UI/Text/Text';
import { Button } from 'react-bootstrap';



class Drawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  componentDidMount() {
    const idToken = localStorage.getItem('idToken');
    this.setState(
      {
        isLogin: !!idToken
      }
    );
    console.log(!!idToken);
  }

  onClickHandler = () => {
    this.setState({
      isLogin: false
    })
    localStorage.removeItem('idToken')
  }


  renderLinks() {

    return (
      <li >
        <Link to={{
          pathname: '/',
          idToken: false
        }}>
          <Button onClick={this.onClickHandler} variant="default"><Text text='Logout' /></Button>
        </Link>

      </li >
    )

  }

  render() {
    const { isLogin } = this.state;
    console.log(isLogin);


    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <Icon iconElement={FaUserCircle} size={50} styles={{ color: 'black' }} />
          <Text text='UserName' styles={{ fontSize: '25px' }} />
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    )
  }
}

export default Drawer
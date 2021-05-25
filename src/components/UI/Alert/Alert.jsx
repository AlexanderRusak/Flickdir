import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Alert.module.css';

export const Alert = ({ text, isShow }) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(isShow)
    alertHide();
  }, [isShow])

  const alertHide = () => {
    setTimeout(() => {
      setShow(false)
    }, 3000);
  }



  return (
    <>
      {show ? (
        <div className={classes.Alert} role='alert'>
          <p>{text}</p>
        </div>
      ) : null}
    </>
  );

}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};

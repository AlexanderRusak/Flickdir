import { Component } from "react";
import { Button } from "react-bootstrap";
import { Layout } from "../../hoc/Layout"
import classes from "../Content/Content.module.css";
import { Text } from "../UI/Text/Text";
import { Redirect, withRouter } from 'react-router-dom'
import { SIGN_IN, SIGN_UP } from '../../firebase/firebaseApi';
import { auth, renderInputs, validateControl } from "./helpers";
import classesName from "./SignIn.module.css";


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            isFormValid: false,
            formControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Input correct email',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Input correct password',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    }


    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)

        console.log(control.valid);

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    loginHandler = async () => {
        const { formControls } = this.state;
        const res = await auth(formControls, SIGN_IN);
        if (res) {
            const { data } = res;
            localStorage.setItem('idToken', data.idToken)
            this.setState({
                isLogin: true
            })
        }
    }

    registrationHandler = async () => {
        const { formControls } = this.state;
        const res = await auth(formControls, SIGN_UP);
        if (res) {
            <Redirect to='/search' />
            const { data } = res;
            localStorage.setItem('idToken', data.idToken)
            this.setState({
                isLogin: true
            })
        }
    }

    render() {
        const { formControls, isFormValid, isLogin } = this.state;
        return (
            <Layout styles={classes.Content} >
                {isLogin && <Redirect to='/search' />}
                <Layout styles={classesName.SignIn}>
                    <h5>Wellcome to Image Finder</h5>
                    {renderInputs(formControls, this.onChangeHandler)}
                    <Layout styles={classesName.ButtonGroup}>
                        <Button disabled={!isFormValid} onClick={this.loginHandler} variant='success'><Text text='Login' /></Button>
                        <Button disabled={!isFormValid} onClick={this.registrationHandler} variant='primary'><Text text='Registration' /></Button>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

}

export default withRouter(SignIn);
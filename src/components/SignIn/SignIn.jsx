import { Component } from "react";
import { Button } from "react-bootstrap";
import { Layout } from "../../hoc/Layout"
import classes from "../Content/Content.module.css";
import { Text } from "../UI/Text/Text";
import { SIGN_IN, SIGN_UP } from '../../firebase/firebaseApi';
import { renderInputs, validateControl } from "./helpers";
import { connect } from 'react-redux'
import classesName from "./SignIn.module.css";
import { login } from "../../store/actions/auth";
import { Alert } from "../UI/Alert/Alert";


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.props.loginUser(formControls, SIGN_IN)
    }

    registrationHandler = async () => {
        const { formControls } = this.state;
        this.props.loginUser(formControls, SIGN_UP)
    }

    render() {
        const { isError } = this.props;


        const { formControls, isFormValid } = this.state;

        return (
            <Layout styles={classes.Content} >
                <Alert isShow={isError} text={'Oops something went wrong!'} />
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

function mapStateToProps(state) {
    return {
        isLogin: state.auth.isLogin,
        isError: state.auth.isError,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (type, formControls) => dispatch(login(type, formControls))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
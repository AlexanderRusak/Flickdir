import InputValidation from "../UI/InputValidation/InputValidation";
import is from 'is_js'

export const renderInputs = (formControls, onChangeHandler) => {

    return Object.keys(formControls).map((controlName, index) => {
        const control = formControls[controlName]
        return ( <
            InputValidation key = { controlName + index }
            type = { control.type }
            value = { control.value }
            valid = { control.valid }
            touched = { control.touched }
            label = { control.label }
            shouldValidate = {!!control.validation }
            errorMessage = { control.errorMessage }
            onChange = { e => onChangeHandler(e, controlName) }
            />
        )
    })
}



export const validateControl = (value, validation) => {


    if (!validation) {
        return true
    }

    let isValid = true;



    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }


    if (validation.email) {
        isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
    }

    return isValid
}

export const authData = (formControls) => {
    return {
        email: formControls.email.value,
        password: formControls.password.value,
        returnSecureToken: true,
    }
}
const errors = (inputs) => {

    let errorMessages = {}
    const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!inputs.username.trim()) {
        errorMessages.username = "Username required"
    }

    if (!inputs.password.trim()) {
        errorMessages.password = "Password is required"
    } else if (inputs.password.length < 8) {
        errorMessages.password = "Password must be at least 8 characters"
    }

    return errorMessages;
}

export default errors
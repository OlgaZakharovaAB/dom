function Validation2(values){

    let error = {}

    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else {
        error.password = ""
    }

    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

    if(values.surname === "") {
        error.surname = "Surname should not be empty"
    }
    else {
        error.surname = ""
    }

    if(values.address === "") {
        error.address = "Address should not be empty"
    }
    else {
        error.address = ""
    }

    return error;
}

export default Validation2
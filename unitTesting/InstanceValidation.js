function checkAccount(clientId,email,firstName,lastName) {

    if(clientId.length !==6){
        throw new TypeError("Client ID must be a 6-digit number");
    }

    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email);
    if(!result){
        throw new TypeError("Invalid e-mail");
    }

    if(!(firstName.length >= 3 && firstName.length <= 20)){
        throw new TypeError("First name must be between 3 and 20 characters long");
    }
    if((lastName.length >= 3 && lastName.length <= 20)){
        throw new TypeError("Last name must be between 3 and 20 characters long");
    }

    let hasNumber = /\d/;
    hasNumber.test(firstName);
    if(hasNumber){
        throw new TypeError("First name must contain only Latin characters");
    }

    hasNumber.test(lastName);
    if(hasNumber){
        throw new TypeError("Last name must contain only Latin characters");
    }
}
checkAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');

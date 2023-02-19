function isValidEmail(mail) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}

function notEmpty(val) {
    if (typeof val === "string") {
        val = val.trim();
    }
    return !!val;
}

function isNumeric(num){
    return !isNaN(num)
}

export {isValidEmail, notEmpty, isNumeric};

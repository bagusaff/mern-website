const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};
}

//convert empty values to empty string so validator can be used
data.name = !isEmpty(data.name) ? data.name:"";
data.email = !isEmpty(data.email) ? data.email:"";
data.password = !isEmpty(data.password) ? data.password:"";
data.password2 = !isEmpty(data.password2) ? data.password2:"";

//Name checks
if(Validator.isEmpty(data.name)){
    errors.name = "Nama harus diisi";
}

//Email checks
if(Validator.isEmpty(data.email)){
    errors.email = "Email harus diisi";
}else if(!Validator.isEmail(data.email)){
    errors.email = "Format Email salah";
}

//Password checks
if(Validator.isEmpty(data.password)){
    errors.password = "Password harus diisi";
}

if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Konfirmasi password harus diisi";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password harus lebih dari 6 karakter";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords harus sama";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};

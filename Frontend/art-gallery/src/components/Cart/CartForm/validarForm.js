

export const validarForm = (value) => {
    let error = {};
    let regName = /^[a-z ,.'-]+$/i ;
    let regPhone = /^[0-9]+$/; 

    if (value.firstName.trim().length === 0) {
        error.firstName = "Name require";
    }
    if (!regName.test(value.firstName)) {
        error.name = "Name invalid"
    };
    if ( !regPhone.test(value.telephone)  ) {
        error.telephone = "phone invalid"
    };
    if (value.email.trim().length === 0) {
        error.email = "Email require";
    }
    if (value.postCode.trim().length === 0) {
        error.postCode = "postCode require";
    }
    if (value.city.trim().length === 0) {
        error.city = "city require";
    }
    if (value.street.trim().length === 0) {
        error.street = "street require";
    }
    if (value.streetNumber.trim().length === 0) {
        error.streetNumber = "Number require";
    }
   
    return error;
  
    
};
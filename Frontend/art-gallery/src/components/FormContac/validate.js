

export const validate = (value) => {
    let error = {};
    let regName = /^[a-z ,.'-]+$/i ;
    let regPhone = /^[0-9]+$/; 

    if (value.name.trim().length === 0 || value.name.trim().length < 3) {
        error.name = "Name require";
    }
    if (!regName.test(value.name)) {
        error.name = "Name invalid"
    };
    if ( !regPhone.test(value.phone)  ) {
        error.phone = "phone invalid"
    };
    if (value.email.trim().length === 0) {
        error.email = "Email require";
    }
    if (value.message.trim().length === 0) {
        error.message = "Message require";
    }
    if (value.hometown.trim().length === 0) {
        error.hometown = "Hometown require";
    }
    if (value.portfolio.trim().length === 0) {
        error.portfolio = "Portfolio require";
    }
    return error;
  
    
};


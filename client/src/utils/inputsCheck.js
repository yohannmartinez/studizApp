// SPECS inputValueCheck : function who take in parameter a type and a value,
//check if all the conditions are valids and return success true/false with the error

export const inputValueCheck = (type, value) => {
  if (type === "pseudo") {
    if (value.length === 0) {
      return {
        success: false,
        message: "PSEUDO_TOO_SHORT_ERROR",
      };
    } else if (value.indexOf(" ") >= 0) {
      return {
        success: false,
        message: "PSEUDO_SPACES_ERROR",
      };
    } else if (value.match(/^([a-zA-Z0-9 _-]+)$/) === null) {
      return {
        success: false,
        message: "PSEUDO_CHARACTER_ERROR",
      };
    } else {
      return { success: true, message: "" };
    }
  }
  //
  //CONDITIONS POUR LES MOT DE PASSE
  //
  else if (type === "password") {
    if (value.length < 8) {
      return { success: false, message: "PASSWORD_LENGTH_ERROR" };
    } else if (
      value.match(/[A-Z]/g) === null ||
      value.match(/[A-Z]/g).length === 0
    ) {
      return {
        success: false,
        message: "PASSWORD_UPPERCASE_ERROR",
      };
    } else {
      return { success: true, message: "" };
    }
  } else if (type === "confirmPassword") {
    if (value.length < 8) {
      return { success: false, message: "CONFIRM_PASSWORD_ERROR" };
    } else if (
      value.match(/[A-Z]/g) === null ||
      value.match(/[A-Z]/g).length === 0
    ) {
      return {
        success: false,
        message: "CONFIRM_PASSWORD_ERROR",
      };
    } else {
      return { success: true, message: "" };
    }
  }
  //
  //CONDITIONS POUR LES EMAILS
  //
  else if (type === "email") {
    if (value.length === 0) {
      return {
        success: false,
        message: "EMAIL_LENGTH_ERROR",
      };
    } else if (
      value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null
    ) {
      return {
        success: false,
        message: "NOT_VALID_EMAIL_ERROR",
      };
    } else {
      return { success: true, message: "" };
    }
  }
  //
  //CONDITIONS POUR LES NUMEROS DE TEL
  //
  else if (type === "phoneNumber") {
    if (value.length === 0) {
      return {
        success: false,
        message: "NO_PHONENUMBER_ERROR",
      };
    } else if (!value.match(/^[0-9]/)) {
      return {
        success: false,
        message: "PHONENUMBER_CHARACTER_ERROR",
      };
    } else if (value.length < 10) {
      return {
        success: false,
        message: "PHONENUMBER_LENGTH_ERROR",
      };
    } else if (!value.match(/^(0)[1-9](\d{2}){4}$/)) {
      return {
        success: false,
        message: "PHONENUMBER_INVALID_ERROR",
      };
    } else {
      return { success: true, message: "" };
    }
  }
  //
  //CONDITIONS POUR LES NOM/PRENOMS
  //
  else if (type === "firstname" || type === "lastname") {
    if (value.length === 0) {
      return {
        success: false,
        message:
          type === "firstname" ? "NO_FIRSTNAME_ERROR" : "NO_LASTNAME_ERROR",
      };
    } else {
      return { success: true, message: "" };
    }
  }
};

// SPECS checkIfValidInputs : take in parameter a array of input like [{type: "email", value: "test@gmail.com"}, {type: "password", value: "fjeisfjiji"}]
// and check all elements and return success true/false with the error if check failed

export const checkIfValidInputs = (inputs) => {
  let inputsCheck = inputs.map(({ type, value }) => {
    return inputValueCheck(type, value);
  });

  return !inputsCheck.find((input) => input.success === false)
    ? { success: true, message: "" }
    : {
        success: false,
        message: inputsCheck.find((input) => input.success === false).message,
      };
};

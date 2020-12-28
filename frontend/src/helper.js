export const validatePhoneNumber = (phoneNumber) => /\d{10}$/.test(phoneNumber);

export const validateEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );

export const validateContactFormPayload = (payload) => {
  const { fullName, email, phoneNumber, companyName } = payload;
  if (!fullName) {
    return {
      error: "Full name is a mandatory field",
    };
  }
  if (email && !validateEmail) {
    return { error: "The email entered is invalid" };
  }
  if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
    return {
      error:
        "The phone number is invalid. Please enter your 10 digit mobile number",
    };
  }
  if (!companyName) {
    return { error: "Your company name is a mandatory field" };
  }
  return true;
};

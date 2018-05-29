const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  //  if it's empty make it an empty string
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required.';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Valid email field is required.';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

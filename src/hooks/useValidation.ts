const regex = {
  usernameRegex:
    /^(?!.*[_.]{2})[a-zA-Z0-9](?!.*[_.]{2})[a-zA-Z0-9_.]{1,14}[a-zA-Z0-9]$/,
  fullNameRegex: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passwordRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

const error = {
  usernameError:
    'Username must be 3-16 characters, no special symbols at the start/end, and no consecutive underscores or dots.',
  fullNameError:
    'Full name must only contain letters and spaces, without any leading, trailing, or consecutive spaces.',
  emailError: 'Email must be a valid format, e.g. example@domain.com.',
  passwordError:
    'Password must be 8+ characters with upper, lower, number, and special character (@$!%*?&).',
};

export const useValidation = () => {
  const isValidUsername = (username: string) => {
    if (regex.usernameRegex.test(username)) {
      return true;
    }
    return false;
  };

  const isValidFullName = (fullName: string) => {
    if (regex.fullNameRegex.test(fullName)) {
      return true;
    }
    return false;
  };

  const isValidEmail = (email: string) => {
    if (regex.emailRegex.test(email)) {
      return true;
    }
    return false;
  };

  const isValidPassword = (password: string) => {
    if (regex.passwordRegex.test(password)) {
      return true;
    }
    return false;
  };

  return {
    isValidUsername,
    isValidFullName,
    isValidEmail,
    isValidPassword,
    error,
  };
};

export default useValidation;

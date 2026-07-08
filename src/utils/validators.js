export const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateRegister(data) {

    const errors = {};

    if (!data.firstName.trim()) {
        errors.firstName = "First name is required";
    }

    if (!data.lastName.trim()) {
        errors.lastName = "Last name is required";
    }

    if (!emailRegex.test(data.email)) {
        errors.email = "Enter a valid email";
    }

    if (!data.password) {
        errors.password = "Password required";
    }

    if (data.password.length < 8) {
        errors.password = "Minimum 8 characters";
    }

    if (!/[A-Z]/.test(data.password)) {
        errors.password = "Need one uppercase letter";
    }

    if (!/[a-z]/.test(data.password)) {
        errors.password = "Need one lowercase letter";
    }

    if (!/[0-9]/.test(data.password)) {
        errors.password = "Need one number";
    }

    if (!/[^A-Za-z0-9]/.test(data.password)) {
        errors.password = "Need one special character";
    }

    if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Passwords don't match";
    }

    return errors;

}
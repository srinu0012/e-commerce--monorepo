
import { registerFormDataType } from "../../types/registerUserType";



export const RegisterValidateForm = (formData:registerFormDataType) => {
    const errors: Record<string,any> = {};
    if (!formData.username) {
        errors.username = 'Username is required';
    }
    if (!formData.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Please enter a valid email';
    }
    if (!formData.mobile_number) {
        errors.mobile_number = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile_number)) {
        errors.mobile_number = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.password) {
        errors.password = 'Password is required';
    }
    if (!formData.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password';
    }
    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
};
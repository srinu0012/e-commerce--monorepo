import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormValues>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    let newErrors = { email: '', password: '' };

    if (!formValues.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formValues.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // You can handle the form submission (e.g., send data to an API)
      console.log('Form Submitted', formValues);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, padding: 3, boxShadow: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formValues.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formValues.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
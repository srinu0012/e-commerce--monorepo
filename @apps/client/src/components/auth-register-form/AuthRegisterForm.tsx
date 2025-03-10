import { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { registerUserService } from '../../services/authService';
import { registerFormDataType } from '../../types/registerUserType';
import { RegisterValidateForm } from '../../hooks/register-validation/registerValidation';
import { UserAuthStore } from '../../stores/authStore';
import { usePageNavigation } from '../../hooks/page-navigation-hook.ts/pageNavigation';

function RegistrationForm() {
    const [formData, setFormData] = useState<registerFormDataType>({
        username: '',
        email: '',
        mobile_number: '',
        password: '',
        confirmPassword: '',
        address: '', 
    });

    const [errorMessages, setErrorMessages] = useState<any>({});
    const goToHome = usePageNavigation("");
    const userLogin = UserAuthStore((state) => state.userLogin);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors = RegisterValidateForm(formData);
        setErrorMessages(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }
        try {
            const { username, token, user_role } = await registerUserService(formData);
            userLogin(username, token, user_role);
            goToHome();
        } catch (error: any) {
            setErrorMessages({ backend: error.message });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                    <Typography variant="h5">Register</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            fullWidth
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            margin="normal"
                            error={!!errorMessages.username}
                            helperText={errorMessages.username}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="normal"
                            type="email"
                            error={!!errorMessages.email}
                            helperText={errorMessages.email}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Phone Number"
                            name="mobile_number"
                            value={formData.mobile_number}
                            onChange={handleChange}
                            margin="normal"
                            type="tel"
                            error={!!errorMessages.mobile_number}
                            helperText={errorMessages.mobile_number}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            margin="normal"
                            type="password"
                            error={!!errorMessages.password}
                            helperText={errorMessages.password}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            margin="normal"
                            type="password"
                            error={!!errorMessages.confirmPassword}
                            helperText={errorMessages.confirmPassword}
                        />
                        {/* Added Address Field */}
                        <TextField
                            required
                            fullWidth
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            margin="normal"
                            error={!!errorMessages.address}
                            helperText={errorMessages.address}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained">
                            Register
                        </Button>
                    </form>
                    {errorMessages.backend && (
                        <Typography color="error" variant="body2">
                            {errorMessages.backend}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegistrationForm;

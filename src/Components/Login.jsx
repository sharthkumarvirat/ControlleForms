 import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, InputAdornment, TextField, Typography, Button, IconButton, Grid, Link } from '@mui/material';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FiArrowRight } from 'react-icons/fi';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <Container maxWidth="md" mt={6}>
                <Typography variant="h3" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid email address",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        required
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : null}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Password is required" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        required
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : null}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={(e) => e.preventDefault()}
                                                    >
                                                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" type='submit' size='large' className='rounded-pill shadow-none' endIcon={<FiArrowRight />}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <Container sx={{ display: 'flex', justifyContent: 'start', marginTop: '30px' }}>
                <Typography variant="body2" align="center" gutterBottom>
                    Don't have an account? <Button  endIcon={<FiArrowRight />} >Register here </Button>
                </Typography>
            </Container>
        </div>
    );
}

import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { TextField, Box, Button, Grid, Container, Divider, Typography, Link } from '@mui/material';
import { FiArrowRight } from "react-icons/fi";
export default function Residencecountry() {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (

        <Container maxWidth="md" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    {/* First Row: 2 Full-Width Inputs */}
                    <Grid item xs={12}>
                        <Controller
                            name="addressLine1"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Address Line1"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.addressLine1}
                                    helperText={errors.addressLine1 ? 'Address Line1 is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="addressLine2"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Address Line 2"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.addressLine2}
                                    helperText={errors.addressLine2 ? 'Address Line 2 is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="landMark"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Land Mark"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.landMark}
                                    helperText={errors.landMark ? 'Land Mark is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="city"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.city}
                                    helperText={errors.city ? 'City is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>

                    {/* Second Row: 3 Inputs, each one-third of the width */}
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="country"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Country"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.country}
                                    helperText={errors.country ? 'Country is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="state"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.state}
                                    helperText={errors.state ? 'State is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Controller
                            name="pincode"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Pincode"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.pincode}
                                    helperText={errors.pincode ? 'Pincode is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>

                    {/* Buttons */}
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="outlined" type="submit" endIcon={<FiArrowRight />}>
                                Next
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
            <Box mt={3}>
                <Divider variant="middle" className='border border-bottom-8 border-black' />
            </Box>

            <Box mt={2}>
                <Typography>
                    Already have an account? <Link href="#" variant="body1" underline="none">Sign in <FiArrowRight /></Link>
                </Typography>
            </Box>
        </Container>
    )
}

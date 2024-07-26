import React from 'react';
import { Box, Container, Grid, TextField, Button, Typography, Link } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { FiArrowRight } from "react-icons/fi";

export default function EditAddress() {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container className='mt-3'>
            <Typography variant='h4'>Edit Address</Typography>
            <Grid container spacing={4} alignItems="center" >
                <Grid item>
                    <Box
                        height={400}
                        width={300}
                        sx={{ border: '2px solid grey' }}
                    />
                </Grid>
                <Grid item xs >
                    <Container   >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2} mt={6}>
                                {/* First Row: 3 Full-Width Inputs */}
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
                                                label="Address Line2"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.addressLine2}
                                                helperText={errors.addressLine2 ? 'Address Line2 is required' : ''}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="LandMark"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Landmark"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.LandMark}
                                                helperText={errors.LandMark ? 'Land Mark  is required' : ''}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="state"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="state"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.state}
                                                helperText={errors.state ? 'state is required' : ''}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="country"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="country"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.country}
                                                helperText={errors.country ? 'country is required' : ''}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>

                            
                                <Grid item xs={false} sm={3}></Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="Pincode"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Pincode"
                                                variant="outlined"
                                                fullWidth
                                                error={!!errors.Pincode}
                                                helperText={errors.Pincode ? 'Pincode is required' : ''}
                                            />
                                        )}
                                        rules={{ required: true }}
                                    />
                                </Grid>
                             

                                {/* Buttons */}
                                <Grid item xs={12}>
                                    <Box display="flex" justifyContent="flex-end">
                                        <Button variant="outlined" type="submit" size='large' className='rounded-pill shadow-none'>
                                            Update
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}

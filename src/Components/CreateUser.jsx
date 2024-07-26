// import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { TextField, Box, Button, Grid, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "react-slick";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-black custom-arrow`}
            style={{ ...style, marginRight: 40 }}
            onClick={onClick}
        >
            <MdOutlineKeyboardArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} bg-black custom-arrow`}
            style={{ ...style, marginLeft: 40 }}
            onClick={onClick}
        >
            <MdOutlineKeyboardArrowLeft />
        </div>
    );
}



export default function CreateUser() {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        display: 'flex',
        alignItem: 'center',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <Container className='mt-5' maxWidth="md" >
            <Box mb={4}>
                <Slide {...settings} className='border border-black rounded py-5'>
                    <div>
                        <h3></h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slide>
            </Box>

            <Typography variant='h5' >CREATE USER</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    {/* First Row: 2 Full-Width Inputs */}
                    <Grid item xs={12}>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.firstName}
                                    helperText={errors.firstName ? 'First Name is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.lastName}
                                    helperText={errors.lastName ? 'Last Name is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="mobileNumber"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Mobile Number"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.mobileNumber}
                                    helperText={errors.mobileNumber ? 'Mobile Number is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email ? 'Email is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Controller
                            name="role"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <FormControl variant="outlined" fullWidth error={!!errors.role}>
                                    <InputLabel id="role-label">Role</InputLabel>
                                    <Select
                                        {...field}
                                        labelId="role-label"
                                        label="Role"
                                    >
                                        <MenuItem value="User">User</MenuItem>
                                        <MenuItem value="Admin">Admin</MenuItem>
                                    </Select>
                                    {errors.role && <p style={{ color: 'red' }}>Role is required</p>}
                                </FormControl>
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>



                    {/* Buttons */}
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="outlined" type="submit" size='large' className='rounded-pill shadow-none' >
                                Create
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>

        </Container>
    );
}

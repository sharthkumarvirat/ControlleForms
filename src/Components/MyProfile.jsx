import React, { useState } from 'react';
import { Box, Container, InputAdornment, Link, Stack, Typography, Grid, IconButton } from '@mui/material';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineLock } from "react-icons/md";
import { TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { FaRegEyeSlash } from "react-icons/fa";
import { PiNotePencilDuotone } from 'react-icons/pi';
import { LuImagePlus } from "react-icons/lu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';


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


export default function MyProfile() {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

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
        <Container className='mt-3'>
            {/* slick-carouse */}

            <Grid container spacing={6}>
                <Grid item xs={12} md={8}>
                    <Stack spacing={3}>
                        {/* <h1>Slider</h1> */}
                        <Slider {...settings} className='border border-black rounded py-5'>
                            <div>
                                <h3>1</h3>
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
                        </Slider>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                {/* <h1>Image</h1> */}
                                <LuImagePlus size={200} />
                            </Grid>

                            <Grid item xs={12} md={8}>
                                {/* <h1>My Profile</h1> */}

                                <TextField
                                    required
                                    label="Residence Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                                <Box position="relative" width="100%">
                                    <TextField
                                        label="Address"
                                        multiline
                                        required
                                        rows={4}
                                        variant="outlined"
                                        margin="normal"
                                        style={{ width: "100%" }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" style={{ marginTop: -90, marginRight: -8 }}>
                                                    <PiNotePencilDuotone size={20} />
                                                    <Link href="#" variant="body1" underline="none" style={{ marginLeft: 4 }}>Edit</Link>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>


                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
              <Grid item xs={12} md={4}>
                    {/* <h1>Change Passowrd</h1> */}
                    <Box
                        height='auto'
                        width='24rem'
                        sx={{ border: '2px solid grey', borderRadius:2, padding: 2 }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <MdOutlineLock size={150} />
                            <Typography variant="h6">CHANGE PASSWORD</Typography>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Controller
                                        name="currentPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Current Password"
                                                variant="outlined"
                                                fullWidth
                                                type={showPassword ? "text" : "password"}
                                                error={!!errors.currentPassword}
                                                helperText={errors.currentPassword ? 'Current Password is required' : ''}
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
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="newPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="New Password"
                                                variant="outlined"
                                                fullWidth
                                                type={showPassword ? "text" : "password"}
                                                error={!!errors.newPassword}
                                                helperText={errors.newPassword ? 'New Password is required' : ''}
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
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="confirmPassword"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Confirm Password"
                                                variant="outlined"
                                                fullWidth
                                                type={showPassword ? "text" : "password"}
                                                error={!!errors.confirmPassword}
                                                helperText={errors.confirmPassword ? 'Confirm Password is required' : ''}
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
                                        rules={{ required: true }}
                                    />
                                </Grid>
                                <Grid item xs={12} display="flex" justifyContent="flex-end">
                                    <Button variant="outlined" color="primary" type="submit" size='large' className='rounded-pill shadow-none'>
                                        Confirm
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>

        </Container >
    );
}

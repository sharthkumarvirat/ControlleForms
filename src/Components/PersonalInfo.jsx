import { Box, Container, FormControl, InputLabel, Link, MenuItem, Select, Stack, Typography } from '@mui/material'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "react-slick";
import { LuImagePlus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid, Button } from '@mui/material';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import Divider from '@mui/material/Divider';


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


export default function PersonalInfo() {
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
        <Container maxWidth="md">
            <Box mb={4}>
                <Typography variant='h2' component='div'>Register</Typography>
            </Box>
            <Stack direction='row' spacing={1} alignItems="center" justifyContent="space-evenly" mb={4}>
                <Stack direction='column' alignItems="center" justifyContent="center" spacing={2} >
                    <Typography variant='h4' component='div'>
                        Personal Information
                    </Typography>
                    <MdOutlineCheckBoxOutlineBlank size={24} />
                </Stack>
                <Stack direction='column' alignItems="center" justifyContent="center" spacing={2} >
                    <Typography variant='h4' component='div'>
                        Personal Information
                    </Typography>
                    <MdOutlineCheckBoxOutlineBlank size={24} />
                </Stack>
                <Stack direction='column' alignItems="center" justifyContent="center" spacing={2} >
                    <Typography variant='h4' component='div'>
                        Personal Information
                    </Typography>
                    <MdOutlineCheckBoxOutlineBlank size={24} />
                </Stack>
            </Stack>

            <Box mb={1}>
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

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3} >
                <LuImagePlus size={25} />
                <MdDelete size={25} />
            </Stack>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
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
                </Box>
                <Box mb={2}>
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
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="emailAddress"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.emailAddress}
                                    helperText={errors.emailAddress ? 'Email is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.password}
                                    helperText={errors.password ? 'Password is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="outlined" type='submit' endIcon={<FiArrowRight />}>
                                Send
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

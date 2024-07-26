import { Box, Container,Link, Stack, Typography } from '@mui/material'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "react-slick";
import { LuImagePlus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import Divider from '@mui/material/Divider';
import { GoArrowLeft } from "react-icons/go";

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

export default function ResidenceInfo() {
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
        <Container >
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
                        Residence Information
                    </Typography>
                    <MdOutlineCheckBoxOutlineBlank size={24} />
                </Stack>
                <Stack direction='column' alignItems="center" justifyContent="center" spacing={2} >
                    <Typography variant='h4' component='div'>
                        Residence Information
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

            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <LuImagePlus size={25} />
                <MdDelete size={25} />
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Box mb={2}>
                        <Controller
                            name="residenceName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Residence Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.residenceName}
                                    helperText={errors.residenceName ? 'Residence Name is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Box>
                    <Box mb={2}>
                        <Controller
                            name="OfficialPhonenumber"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Official Phone number"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.OfficialPhonenumber}
                                    helperText={errors.OfficialPhonenumber ? 'Official Phone number is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />
                    </Box>
                    <Box mb={2}>
                        <Controller
                            name="officialEmail"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Official Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.officialEmail}
                                    helperText={errors.officialEmail ? 'Official Email is required' : ''}
                                />
                            )}
                            rules={{ required: true }}
                        />

                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button variant="outlined" startIcon={<GoArrowLeft />}>
                        Back
                    </Button>
                    <Button variant='outlined' type="submit" endIcon={<FiArrowRight />}>
                        Next
                    </Button>
                </Box>
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

    );
}


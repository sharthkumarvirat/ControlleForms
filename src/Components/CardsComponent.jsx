import React from 'react';
import { Box, Typography, Grid, Stack } from "@mui/material";
import { PiNotePencilDuotone } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Button } from "@mui/material";
import { LuCheckSquare } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { RiTimeZoneFill } from "react-icons/ri";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function CardsComponent() {
    const cardItems = [
        {
            id: "1",
            orderId: "2536459854525415524-500L",
            imgNote: <PiNotePencilDuotone />,
            rupees: "2500 /-",
            imgRups: <RiMoneyRupeeCircleLine />,
            time: "2024-08-20-12.20-13.00",
            imgTime: <FaRegClock />,
            days: "2 Days",
            imgDays: <FaClockRotateLeft />,
            btn: "COMPLETED",
            btnImg: <LuCheckSquare />,
            color: "#016D43C4"

        },
        {
            id: "2",
            orderId: "2536459854525415524-500L",
            rupees: "2500 /-",
            time: "2024-08-20-12.20-13.00",
            days: "2 Days",
            btn: "CANCELLED",
            btnImg: <MdDelete />,
            color: "#A95552"

        },
        {
            id: "3",
            orderId: "2536459854525415524-500L",
            rupees: "2500 /-",
            time: "2024-08-20-12.20-13.00",
            days: "2 Days",
            btn: "IN PROGRESS",
            btnImg: <RiTimeZoneFill />,
            color: "#4B72C2"

        },
        {
            id: "4",
            orderId: "2536459854525415524-500L",
            rupees: "2500 /-",
            time: "2024-08-20-12.20-13.00",
            imgTime: <FaRegClock />,
            days: "2 Days",
            btn: "PENDING",
            btnImg: <FaTriangleExclamation />,
            color: "#D6A24F"

        }
    ];

    return (
        <div className='container mt-4'>
            <Grid container spacing={2} justifyContent={"center"}>
                {cardItems.map((item) => (
                    <Grid item xs={12} sm={10} md={6} key={item.id}>
                        <Box p={2} component={"div"} className='bg-black text-white' borderRadius={2} display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                            <Box display="flex" justifyContent="flex-end">
                                <Button size='small' className='rounded-pill shadow-none' variant="contained" sx={{ backgroundColor: item.color }} startIcon={item.btnImg}>
                                    {item.btn}
                                </Button>
                            </Box>
                            <Stack spacing={1.5}>
                                <Stack direction={"row"} spacing={1.5} >
                                    <PiNotePencilDuotone size={20} />
                                    <Typography>:</Typography>
                                    <Typography>{item.orderId}</Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={1.5} >
                                    <RiMoneyRupeeCircleLine size={20} />
                                    <Typography>:</Typography>
                                    <Typography>{item.rupees}</Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={1.5} >
                                    <RiMoneyRupeeCircleLine size={20} />
                                    <Typography>:</Typography>
                                    <Typography>{item.time}</Typography>
                                </Stack>
                                <Stack direction={"row"} spacing={1.5} >
                                    <FaClockRotateLeft size={20} />,
                                    <Typography>:</Typography>
                                    <Typography>{item.days}</Typography>
                                </Stack>

                            </Stack>
                            <Box display="flex" justifyContent="flex-end">
                                <Button >View Orders</Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

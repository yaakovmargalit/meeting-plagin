import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TimeField } from '@mui/x-date-pickers/TimeField';

import FormControlLabel from '@mui/material/FormControlLabel';


import TextField from '@mui/material/TextField';
import { Label } from '@mui/icons-material';

const NewAvailability = ({ open, handleClose, selctedDayCode, selctedDay ,addAvailability }) => {


    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [meetingLength, setMeetingLength] = useState(0)
    return (
        <div style={{ width: 1000 }}>
            <Dialog
                dir="rtl"
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle>{"הוספת זמינות ליום" + " " + selctedDay}</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <hr />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <p>שעת התחלה</p>
                            <TimeField
                                onChange={(newValue) => setStartTime(newValue)}
                                format="HH:mm"
                                value={startTime}
                            />
                            <p>שעת סיום</p>
                            <TimeField
                                onChange={(newValue) => setEndTime(newValue)}
                                format="HH:mm"
                                value={endTime}
                            />
                            <p> אורך התור {"(בדקות)"}</p>
                            <TextField
                                id="outlined-number"
                                type="number"
                                onChange={(val => setMeetingLength(val.target.value))}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={meetingLength}
                            />
                        </LocalizationProvider>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setStartTime('')
                        setEndTime('')
                        setMeetingLength(0)
                        handleClose()
                    }}>ביטול</Button>
                    <Button onClick={() => {
                        addAvailability(startTime, endTime, meetingLength,selctedDayCode)
                        setStartTime('')
                        setEndTime('')
                        setMeetingLength(0)
                    }}>הוספה</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};



export default NewAvailability;
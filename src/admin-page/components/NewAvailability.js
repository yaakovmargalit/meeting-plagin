import React, {useState} from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel';


import TextField from '@mui/material/TextField';
import { Label } from '@mui/icons-material';

const NewAvailability = ({ open, handleClose, selctedDayCode, selctedDay }) => {


    const [startTime,setStartTime]=useState('')
    return (
        <div>
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

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                         
                            <FormControlLabel control={<MobileTimePicker
                            onChange={(newValue) => {
                                setStartTime(newValue);
                              }}
                             sx={{ display: 'none' }}  views={['hours', 'minutes']} />} label={new Date(startTime).toLocaleDateString() + " "+ "בחר שעת התחלה" }
                           style={{
                            height: 40,
                            border: 2,
                            borderRadius: 8,
                            borderStyle:'solid'
                           }}
                            ></FormControlLabel>

                        </LocalizationProvider>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>
                    <Button onClick={handleClose}>הוספה</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};



export default NewAvailability;
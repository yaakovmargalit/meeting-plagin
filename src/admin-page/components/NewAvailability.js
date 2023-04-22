import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const NewAvailability = ({ open, handleClose, selctedDayCode, selctedDay }) => {
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
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
        
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};



export default NewAvailability;
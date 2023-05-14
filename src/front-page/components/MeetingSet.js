import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

function MeetingSet() {
    function disableDays(date) {
        return date.day() === 0 || date.day() === 3;
      }
    return (
        <div className='main-meeting-set'>
            <div className='date-select'>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker dir='rtl' disablePast={true} shouldDisableDate={disableDays} />
                
                </LocalizationProvider>
                <Button variant="contained">בדוק תורים</Button>

            </div>
        </div>
    )
}
export default MeetingSet;
import React, { useState } from 'react';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';

import NewAvailability from './NewAvailability';

const DaysSettings = () => {
    const [open, setOpen] = useState(false);
    const [selctedDay, setSelctedDay] = useState(null);
    const [selctedDayCode, setSelctedDayCode] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const daysList = [
        {
            dayCode: 1,
            availability: [
                {
                    start: '09:30',
                    end: '15:45',
                    meetingLength: '45'
                }
            ]
        },
        {
            dayCode: 2,
            availability: [
                {
                    start: '09:30',
                    end: '15:45',
                    meetingLength: '45'
                }
            ]
        },
        {
            dayCode: 3,
            availability: [
                {
                    start: '09:30',
                    end: '15:45',
                    meetingLength: '45'
                }
            ]
        },
        {
            dayCode: 4,
            availability: [
                {
                    start: '09:30',
                    end: '15:45',
                    meetingLength: '45'
                }
            ]
        },
        {
            dayCode: 5,
            availability: [
                {
                    start: '09:30',
                    end: '15:45',
                    meetingLength: '45'
                }
            ]
        },
        {
            dayCode: 6,
        },
        {
            dayCode: 7,
        },
    ]

    const getDayName = (dayCode) => {
        const dayNams = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
        return dayNams[dayCode - 1]
    }

    const addAvailability = (dayCode) => {
        console.log(getDayName(dayCode));
        setSelctedDayCode(dayCode)
        setSelctedDay(getDayName(dayCode))
        handleClickOpen()
    }


    return (
        <div className='days-settings'>
            <h3>הגדרת זמני פעילות</h3>
            <h2>{appLocalizer.nonce}</h2>
            <div className="day-list">

                {daysList.map(day => {
                    return (
                        <div className="day-box">
                            <div className="day-title">
                                {getDayName(day.dayCode)}
                            </div>
                            <div className="availability-list">

                                {day.availability?.map(avlb => {
                                    return <div className="availability-box">
                                        <p>התחלה: {avlb.start}</p>
                                        <p>סיום: {avlb.end}</p>
                                        <p>אורך התור {'(בדקות)'}: {avlb.meetingLength}</p>
                                    </div>
                                })}
                            </div>
                            <div onClick={() => addAvailability(day.dayCode)} className="add-availability">
                                הוספה <MoreTimeOutlinedIcon />
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* add dialog */}


            <NewAvailability selctedDay={selctedDay} selctedDayCode={selctedDayCode} open={open} handleClose={handleClose} />
        </div>
    );
};

export default DaysSettings;
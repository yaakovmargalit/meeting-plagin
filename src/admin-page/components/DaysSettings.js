import React, { useState } from 'react';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NewAvailability from './NewAvailability';

const DaysSettings = ({ availabilitys ,addNewAvailability}) => {
    console.log(availabilitys);
    const [open, setOpen] = useState(false);
    const [selctedDay, setSelctedDay] = useState(null);
    const [selctedDayCode, setSelctedDayCode] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const addAvailability = (startTime, endTime, meetingLength,selctedDayCode) => {
        startTime = startTime.hour() + ':'+startTime.minute()
        endTime = endTime.hour() + ':'+endTime.minute()
        handleClose()
        addNewAvailability(startTime, endTime, meetingLength,selctedDayCode)
    }
    const daysList = [
        {
            dayCode: 1,
            availability:availabilitys.filter(ava=>ava.dayRef==1)
        },
        {
            dayCode: 2,
            availability:availabilitys.filter(ava=>ava.dayRef==2)

        },
        {
            dayCode: 3,
            availability:availabilitys.filter(ava=>ava.dayRef==3)

        },
        {
            dayCode: 4,
            availability:availabilitys.filter(ava=>ava.dayRef==4)

        },
        {
            dayCode: 5,
            availability:availabilitys.filter(ava=>ava.dayRef==5)

        },
        {
            dayCode: 6,
            availability:availabilitys.filter(ava=>ava.dayRef==6)

        },
        {
            dayCode: 7,
            availability:availabilitys.filter(ava=>ava.dayRef==7)

        },
    ]
console.log(daysList);
    const getDayName = (dayCode) => {
        const dayNams = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
        return dayNams[dayCode - 1]
    }

    const openNewAvailabilityModal = (dayCode) => {
        console.log(getDayName(dayCode));
        setSelctedDayCode(dayCode)
        setSelctedDay(getDayName(dayCode))
        handleClickOpen()
    }

    const deleteAvailability = (id)=>{
        const conf = confirm("מחיקה! האם אתה בטוח?")
        if(!conf){
            console.log(conf);
            return
        }
        console.log(conf);
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
                                        <p>התחלה: {avlb.startTime}</p>
                                        <p>סיום: {avlb.endTime}</p>
                                        <p>אורך התור {'(בדקות)'}: {avlb.meetingLength}</p>
                                        <div onClick={()=>deleteAvailability(avlb.id)} className="delete-availability">
                                            <DeleteOutlineIcon/>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div onClick={() => openNewAvailabilityModal(day.dayCode)} className="add-availability">
                                הוספה <MoreTimeOutlinedIcon />
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* add dialog */}


            <NewAvailability selctedDay={selctedDay} selctedDayCode={selctedDayCode} open={open} handleClose={handleClose} addAvailability={addAvailability} />
        </div>
    );
};

export default DaysSettings;
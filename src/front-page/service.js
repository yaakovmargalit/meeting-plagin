const appUrl = `${ymMeetingFrontData.apiUrl}`
console.log(appUrl);
import axios from 'axios';


export async function getAvailablDays() {
    try {
        const response = await fetch(appUrl + '/ym-meeting/v1/app/availablDays')
        const availablDays = await response.json()
        console.log(availablDays);
        return availablDays;
    } catch (error) {
        return error
    }
}
const appUrl = `http://localhost/wordpress/wp-json/ym-meeting/v1`
import axios from 'axios';


export async function getAvailablDays() {
    try {
        const response = await fetch(appUrl + '/app/availablDays')
        const availablDays = await response.json()
        console.log(availablDays);
        return availablDays;
    } catch (error) {
        return error
    }
}
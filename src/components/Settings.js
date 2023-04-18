import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {

    const [ firstname, setFirstName ] = useState( '' );
    const [ lastname, setLastName ]   = useState( '' );
    const [ email, setEmail ]         = useState( '' );
    const [ loader, setLoader ] = useState( 'Save Settings' );

    const url = `${appLocalizer.apiUrl}/wprk/v1/settings`;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader( 'Saving...' );
        axios.post( url, {
            firstname: firstname,
            lastname: lastname,
            email: email
        }, {
            headers: {
                'content-type': 'application/json',
                'X-WP-NONCE': appLocalizer.nonce
            }
        } )
        .then( ( res ) => {
            setLoader( 'Save Settings' );
        } )
    }

    // useEffect( () => {
    //     axios.get( url )
    //     .then( ( res ) => {
    //         setFirstName( res.data.firstname );
    //         setLastName( res.data.lastname );
    //         setEmail( res.data.email );
    //     } )
    // }, [] )

    return(
        <React.Fragment>
            <h2>React Settings Form</h2>
            
        </React.Fragment>
    )
}

export default Settings;
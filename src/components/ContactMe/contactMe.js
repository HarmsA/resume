import React, {useEffect, useRef, useState} from 'react';
import {
    // Box,
    FormControl,
    // FormHelperText,
    // Input,
    InputLabel,
    OutlinedInput,
    // Snackbar,
    Stack,
    TextField
} from '@mui/material';
import './contactMe.css'
import emailjs from '@emailjs/browser'
import Snack from "../snackbar/Snack";

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarVertical, setSnackbarVertical] = useState('bottom');
    const [snackbarHorizontal, setSnackbarHorizontal] = useState('right');
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const ref = useRef(null)
    const form = useRef();

    const handleClick = () => {
        ref.current.focus();
      };

    const sendEmail = (e) => {
        e.preventDefault();
        setError('')
        if (!name || !email || !message){
            setError("All fields are required. Please complete form.")
            return
        }
        let templateParams = {
            from_name: name,
            from_email: email,
            message: message
        }

        setSnackbarMessage('Sending Email...')
        setSnackbarOpen(true)
        emailjs.send(
            "service_m391te3",
            "template_vkuvq3j",
            templateParams,
            "PwaiORi7iGzyV0aVy"
        )
          .then((response) => {
              setSnackbarMessage('Email Sent')
              console.log('SUCCESS!', response.status, response.text);

          }, (error) => {
              console.log('FAILED...', error);
              setSnackbarMessage('Email Unable to be sent')
          });
        setName('');
        setEmail('');
        setMessage('');
      };

    useEffect(() => {
          const timer = setTimeout(() => {
              // console.log('In setTimeout')
              setSnackbarOpen(false)
          }, 4200);
          return () => clearTimeout(timer);
        }, [snackbarOpen]);

    return (
        <div className="contactMeContainer">
            <h2>Contact me:</h2>
            <p className='quotes'>"If you never contact me you will never know how I can benefit your company.” <em> - Adam Harms</em></p>

            <ul className='contactMeListContainer'>
                <li>
                    <span className='contactMeList' onClick={handleClick}>Email me: harms2a@gmail.com</span>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adam-harms/">Linkedin: Adam Harms</a>
                </li>
            </ul>
            <form id="emailForm" ref={form} onSubmit={sendEmail}>
                <h3>Send me an email</h3>
                {error && <h4 className='error'>{error}</h4>}
                <Stack
                    // component="form"
                    sx={{
                    width: '50ch',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl className='forminput'>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput
                          type="text"
                          name="from_name"
                          id="component-outlined"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          label="Name"
                          inputRef={ref}
                        />
                    </FormControl>
                    <FormControl className='forminput'>
                        <TextField
                            name="from_email"
                            type="email"
                            id="outlined-multiline-static"
                            label="Your Email"
                            value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl className='forminput'>
                      {/*<InputLabel htmlFor="input-email">Message</InputLabel>*/}
                    <TextField
                        name="message"
                        id="outlined-multiline-static1"
                        label="Email Message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </FormControl>
                    <button type="submit" value="Send" className='btn' id='emailbtn'>Send Email</button>
                </Stack>
            </form>
            <Snack open={snackbarOpen} vertical={snackbarVertical} horizontal={snackbarHorizontal} message={snackbarMessage}/>
        </div>
    );
};

export default ContactMe;
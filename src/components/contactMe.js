import React, {useRef, useState} from 'react';
import {Box, FormControl, FormHelperText, Input, InputLabel, OutlinedInput, Stack, TextField} from '@mui/material';
import './contactMe.css'

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const ref = useRef(null)

    const handleClick = () => {
        ref.current.focus();
      };

    return (
        <div className="contactMeContainer">
            <h2>Contact me:</h2>
            <p className='quotes'>"If you never contact me you will never know how I can benefit your company.” <em> - Adam Harms</em></p>

            <ul>
                <li>
                    <span onClick={handleClick}>Email me:</span> harms2a@gmail.com
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/adam-harms/">Linkedin: Adam Harms</a>
                </li>
            </ul>
            <form>
                <h3>Send me an email</h3>
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
                          id="component-outlined"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          label="Name"
                          inputRef={ref}
                        />
                    </FormControl>
                    <FormControl className='forminput'>
                        <TextField
                            id="outlined-multiline-static"
                            label="Email"
                            value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl className='forminput'>
                      {/*<InputLabel htmlFor="input-email">Message</InputLabel>*/}
                    <TextField
                        id="outlined-multiline-static"
                        label="Email Message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </FormControl>
                    <button className='btn' id='emailbtn'>Send Email</button>
                </Stack>
            </form>
        </div>
    );
};

export default ContactMe;
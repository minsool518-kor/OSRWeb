//import * as React from 'react';
import React, { useEffect, useRef, useState } from "react"
import TextField from "@mui/material/TextField"
import { Button } from '@mui/material';
import io from 'socket.io-client'
import "./App.css";

// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';

// import ProTip from '../components/ProTip';
// import Link from '../components/Link';
// import Copyright from '../components/Copyright';
//export const socket = io('http://localhost:4000');
export default function Chat() {
    const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])
    let Temp = false;
	const socketRef = useRef()

	useEffect(
		() => {
            // socketRef.current = io.connect("http://localhost:4000")
            // if (socketRef.current.connected) {
            //     socketRef.current.on("message", ({ name, message }) => {
            //         setChat([ ...chat, { name, message } ])
            //     })    
            // }
			
			//return () => socketRef.current.disconnect()
			
			setChat([{ name:"Page", message: "Rendering Page"} ])
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}
	
	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))
	}
    

    return (	
        <div className="card">
			<form onSubmit={onMessageSubmit}>
                    <h1>{`Hello ${Temp}`}</h1>
                    <Button href="/" variant="contained"  sx={{ width: 200, padding: 1, margin: 2 }}>Main Page</Button>
                    <Button  variant="contained"  sx={{ width: 200, padding: 1, margin: 2 }} 
                    onClick={() => { 
						// socketRef.current = io.connect("http://localhost:4000"); 
                        // if (socketRef.current.connected) Temp = true;
                        // else setChat([ ...chat, { name:"None", message:"Connecton Failed" } ]);
						console.log("aa");
                        }} >
                        Connect</Button>
                    <Button  variant="contained"  sx={{ width: 200, padding: 1, margin: 2 }} 
                    onClick={() => { 
						// socketRef.current.disconnect();  Temp = false; setChat([ ...chat, { name:"None", message:"DisConnecton " } ]);
						console.log("asdasdasdasdas");
                        }} >
                        Disconnect</Button>
				<h1>Messenger</h1>
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
					/>
				</div>
				<button>Send Message</button>
			</form>
			<div className="render-chat">
				<h1>Chat Log</h1>
				{renderChat()}
			</div>
		</div>
           
    );
}
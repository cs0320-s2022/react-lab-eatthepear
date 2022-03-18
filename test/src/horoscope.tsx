import React, { useState } from 'react';
import TextBox from './TextBox';
import './App.css';
//@ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

function Horoscope() {
    const [sunState, setSunState] = useState("")
    const [moonState, setMoonState] = useState("")
    const [risingState, setRisingState] = useState("")
    const [horoscopeState, setHoroscope] = useState([])
    const buttonPress = () => {
        const toSend = {
            sun : sunState,
            moon : moonState,
            rising : risingState
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
        .then(response => {
            console.log(response.data);
            //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
            //Note: It is very important that you understand how this is set up and why it works!
            setHoroscope(response.data["horoscope"]);
        })
        .catch(error => {
            console.log(error);
        });

    }
  return (
    <div>
      <TextBox label={"Sun Sign"} stateFunction={setSunState}/>
      <TextBox label={"Moon Sign"} stateFunction={setMoonState}/>
      <TextBox label={"Rising Sign"} stateFunction={setRisingState}/>
      <AwesomeButton type='primary' onPress={buttonPress}>
          test
      </AwesomeButton>
      {/* hello
      {JSON.stringify(horoscopeState)} */}
      <ul>
          {horoscopeState.map(x => <li>{x}</li>)}
      </ul>

    </div>
  );
}

export default Horoscope;

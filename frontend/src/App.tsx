import {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from 'axios';
import * as React from 'react';
import './App.css';


function App()
{
	let [number, setNumber]: [string|undefined, Dispatch<SetStateAction<string|undefined>>] = useState();

	useEffect(()=>
	{
		(async ()=>
		{
			const n = await axios.get('http://127.0.0.1:7000/randomNumber');
			setNumber(n.data);
		})()
	},[]);
	return <h1>Random number is {number}</h1>
}

export default App;

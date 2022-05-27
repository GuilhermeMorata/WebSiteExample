import './main.css';
import axios from 'axios';
import { useEffect, useState } from "react"

import Listproduct from "./components/listprodutcs/listproduct";
import Newproduct from './components/newproducts/newproduct';

import {GrFormAdd} from 'react-icons/gr';
import {RiFileList3Line} from 'react-icons/ri';

require('dotenv').config()

function Main(){
    const [screen , setscreen] = useState('product')
    const Baseurl =  process.env.REACT_APP_API_URL

    function handlescreen(value){
        setscreen(value)
    }

    useEffect(
        async function authmain(){
            try {
                const token = await localStorage.getItem('access_token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${token.replace(/[\\"]/g, '')}` 
                await axios.put(`${Baseurl}auth/validateUser`)
                    .then((res)=>{
                        console.log(res)
                        if(res.status >= 400){
                            return window.location.replace("http://localhost:3000")
                        }
                        else if(res.status > 200 || res.status < 300){
                            return null
                        }
                        else{
                            return window.location.replace("http://localhost:3000")
                        } 
                    })  
            } catch (error) {
                return window.location.replace('/')
            }
            
                    
        }
    )

    function Content(){
            if(screen ==='product'){
                return <Newproduct/>
            }
            if(screen==='list'){
                return <Listproduct/>
            }
            else{
                return <div className='maincontent'>Problem Occurred!</div>
            }
    }


    return(
        <div className='mainbody'>
            <div className='mainmenu'>
                <nav>
                    <GrFormAdd className='iconnav' onClick={()=>{handlescreen('product')}}></GrFormAdd>
                    <RiFileList3Line className='iconnav' onClick={()=>{handlescreen('list')}}></RiFileList3Line>
                </nav>
                <div className='maincontent'>
                    <Content/>
                </div>
            </div>
        </div>
    )
}

export default Main;
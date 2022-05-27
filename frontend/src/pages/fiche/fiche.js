import axios from "axios";
import './fiche.css';
import {useHistory} from 'react-router-dom' 
import '../showcare/components/header/header.css'
import { useEffect, useState } from "react";
require('dotenv').config()


function Fiche(props){

    const Baseurl =  process.env.REACT_APP_API_URL
    const date = props.location.state.detail;

    const history = useHistory()
    const [screen,setscreen]=useState()

    useEffect(
        async ()=>{
            let response  = await axios.get(`${Baseurl}user/getDetail/${date.name}`)
            if(response === null || undefined){
                return setscreen(<span>There is no data with that name!</span>)
            }
            else{
                return setscreen(<div>{detailcard(response.data)}</div>)
            } 
        },('')
    )
        
 


    function detailcard(value){

        async function selectimg(e,picture){
            e.preventDefault()
            document.getElementById('select').src = picture.props.src;           
        }

        return(
            <>
            <div className='navmenudetail'>
                <div className='titlemenu'>
                    <h1>Project.</h1>
                </div>
                <div className='loginmenu'>
                    <button onClick={()=>window.location.replace('/')}>Home</button>
                    <button onClick={()=>history.replace({pathname:'/detail',  state:{detail:'product'}})}   >Products </button>
                    <button onClick={()=>history.replace({pathname:'/detail',  state:{detail:'about'}})}     >About    </button>
                    <button onClick={()=>history.replace({pathname:'/detail',  state:{detail:'contact'}})}   >Contacts </button>
                </div>
            </div>
            <div className='contentfiche'>
            <h1>{value.name}</h1>
                <div className='contentimg'>
                    <div className='contentother'>
                        {value.imgs.map((picture,index)=>(
                            <img className='otherimg' src={picture.props.src} key={index} onClick={(e)=>{selectimg(e,picture)}}/>
                        ))}   
                    </div> 
                    <img src={date.imgs[0].props.src} id='select' alt='select' className='selectimg'/>
                <span className='textvalue'>$:{value.value},00</span>
                </div>
                <div className='contenttext'>
                    <div className='contenttec'>
                        <h3>Product's name:<h5>{value.name}</h5></h3>
                        <h3>Product Value:<h5>R$ {value.value},00</h5></h3>
                        <h3>Product Tag:<h5>{value.tag}</h5></h3>
                        <h3>Product Type:<h5>{value.type}</h5></h3>
                        <hr/>
                        <h3>Description</h3>
                        <h5>
                           <pre style={{textIndent:0, wordBreak:"break-word",}}>{value.desc}</pre>  
                        </h5>
                    </div>
                </div>

            </div>
        </>
        )
    }




    return(
        <div>
            {screen}
        </div>
    )
}

export default Fiche;
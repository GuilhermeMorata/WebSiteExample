import './admin.css'
import{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import {AiOutlineLogin,AiOutlineUser} from 'react-icons/ai';
import {FaDraftingCompass} from 'react-icons/fa';
import {RiLockPasswordLine} from 'react-icons/ri';


require('dotenv').config()



function Admin(){
  const Baseurl =  process.env.REACT_APP_API_URL
    

  function setToken(userToken) {
    localStorage.setItem('access_token', userToken);
  }


  function getlogin(dado){
    axios.post(`${Baseurl}auth/login`,dado)
      .then((res)=>{
        if(res.status >= 200 || res.status <= 299){
          setToken(res.data.access_token)
          redipage('/main')
        }
        else{
          console.log(res.status)
        }
        })
      .catch((e)=>{
        console.log('erro:',e)
        setToken(undefined)
      })
  }


  let history = useHistory()
  const redipage=(parametro,valor)=>{
      history.push(`${parametro}`,valor)
  }


  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
      e.preventDefault();
      await getlogin({
        username,
        password
      }) 
    }


  return (
    <div className='mbody'>
      <FaDraftingCompass/><h1>Example.</h1>  
      <form className='mform'> 
        <div className='mcontrol'>  
          <AiOutlineUser className='iconsst'/>
          <input type="text" name='login 'placeholder="login" onChange={e => setUserName(e.target.value)}></input>
        </div>
        <div className='mcontrol'>
          <RiLockPasswordLine className='iconsst'/>
          <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
        </div>
        <div className='conteinerbottuns'>
          <button className='mbuttonenter'  type='submit' onClick={handleSubmit}><AiOutlineLogin/><span>Enter</span></button>
        </div>
      </form>
    </div>
    );
}


export default Admin;
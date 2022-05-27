import './header.css';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {FaWhatsapp} from 'react-icons/fa'


import picture1 from '../../../../img/sid1.jpeg';
import picture2 from '../../../../img/sid2.jpg';
import picture3 from '../../../../img/sid3.jpg';


let cont = 0;

function Header(){

    const exchangeimg =()=>{
        const imgs = [picture1,picture2,picture3]
        setTimeout(() => {setpicture(imgs[cont])}, 8000);
        cont++
        if(cont===3){
            cont=0
        }
    }

    function scrollmenu(){
        if(window.scrollY < 80){
            setmenu(true)
        }
        if(window.scrollY > 80){
            setmenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollmenu);
    
        return () => {
        window.removeEventListener('scroll',scrollmenu);
        };
    }, []);

    const [picture,setpicture]=useState(picture1)
    let [menu, setmenu]=useState(true)

    const history = useHistory()

    return(
        <div className='header'>
            <div className={menu ? 'navmenu':'navmenuclose'}>
                <div className='titlemenu'>
                    <h1>Project.</h1>
                </div>
                <div className='loginmenu'>
                    <button onClick={()=>window.location.replace('/')}>Home</button>
                    <button onClick={()=>history.replace({pathname:'/detail', state:{detail:'product'}})} >Products </button>
                    <button onClick={()=>history.replace({pathname:'/detail',state:{detail:'about'}})}    >About    </button>
                    <button onClick={()=>history.replace({pathname:'/detail',state:{detail:'contact'}})}  >Contacts </button>
                </div>             
            </div>
        <span className='textslid'>Attention to every <h1>Detail!</h1><strong>-check out!</strong> </span>
        <img src={picture} alt='pic' className='imgmenu' onLoad={exchangeimg}/>
       <a href={'https://api.whatsapp.com/send?phone=xxxxxxxxxxxxxx'}> <FaWhatsapp className='whastzap'/></a>
        </div>
    )
}

export default Header;
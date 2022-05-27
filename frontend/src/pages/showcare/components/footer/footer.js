import './footer.css'

import{FaFacebookSquare}from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import{AiOutlineTwitter} from 'react-icons/ai';

function Footer(){
    return(
        <div className='footer'>
            <h1>Project.</h1>
            <div className= 'footerrede'>
                <a href='https://www.facebook.com/'><FaFacebookSquare/></a>  
                <a href='https://www.instagram.com/'><GrInstagram/></a>
                <a href='https://twitter.com/'><AiOutlineTwitter/></a>
            </div>
        </div>
    )
}

export default Footer
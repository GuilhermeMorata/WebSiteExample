import'./contant.css';

import {MdEmail} from 'react-icons/md'
import { useState } from 'react';
import {FaWhatsapp,FaPhone} from 'react-icons/fa'

function Contant(){
    const [ename ,setname]=useState('anonimo');
    const [esubject ,setsubject]=useState('contract');
    const [etext ,settext]=useState('no text');

    return(
    <div className="contantbox">
        <div className='contantintro'>
          <h1>Contact Us!</h1>
            <p>We reply via instagram, whatsapp, facebook or Email:</p>
        </div>
        <div className="contemail">
            <div className='contentright'>
                <h1>Contacts</h1>
                <div className='contentinfos'>
                    <h1>Telephones</h1>
                    <div>
                        <div className='contentnumber'><FaWhatsapp/><p>xx xxxxx-xxxx</p><br/></div>
                        <div className='contentnumber'><FaPhone/><p>xx xxxx-xxxx</p><br/></div>
                    </div>
                    <hr/>
                    <h1>Location</h1>
                        <p>Rua Valdomiro Luiz 80 dermachi</p>
                    <hr/>
                    <h1>Operation</h1>
                    <p>
                        mon to fri - 9:00 to 18:00<br/>
                        Saturday and Sunday - By appointment only.
                    </p>
                    <hr/>
                    
                </div>

            </div>

            <div className='contentleft'>
            <MdEmail className='iconemail'></MdEmail>
            <form className="contantform">
                <label>Name</label>
                <input type="text" onChange={e=>setname(e.target.value)} placeholder="Your name.."/>
                <label>Subject</label>
                <input type="text" onChange={e=>setsubject(e.target.value)}  placeholder="Type message"/>
                <label>Text</label>
                <textarea onChange={e=>settext(e.target.value)}   placeholder="text..." ></textarea>
                <a href={`mailto:Example@Example.com?subject=${esubject}&body=my%20name%20is%20${ename}%20%20%20,${etext}`}>Send Email</a>
            </form>
            </div>
        </div>
    </div>
    )
}

export default Contant
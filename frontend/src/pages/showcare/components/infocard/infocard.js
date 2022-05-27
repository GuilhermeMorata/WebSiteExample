import './infocard.css'

const {AiOutlineBarcode} = require('react-icons/ai')
const {FiTruck} = require('react-icons/fi');
const {FaRegCreditCard} = require('react-icons/fa');
const {GoLocation} = require('react-icons/go');



function Infocard(){
    return(
        <div className='contenetinfos'>
            <div className='infocard' ><FiTruck/><span>We deliver to<br/> São Paulo and region.</span></div>
            <div className='infocard' ><AiOutlineBarcode/><span>Products with<br/>10% on Pix!</span></div>
            <div className='infocard' ><FaRegCreditCard/><span>We pay up to<br/>10 interest-free installments!</span></div>
            <div className='infocard' ><GoLocation/><span>Store throughout<br/>Brazil</span></div>
        </div>
    )
}

export default Infocard;
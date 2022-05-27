import './introtext.css';
import map from '../../../../img/map.jpg'
function Introtext(){
    return(
        <div className='contentintro'>
            <p>Come visit us at physical logic,Across Brazil.</p>
            <div className='intromap'>
                <a href='https://goo.gl/maps/SjkJjkbS5KZYedbYA' >
                    <img src={map} alt='job'/>
                </a>
            </div>
        </div>
    )
}
export default Introtext
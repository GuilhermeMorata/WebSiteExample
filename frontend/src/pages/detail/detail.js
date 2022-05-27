import '../showcare/components/header/header.css'
import '../showcare/components/about/about.css';
import {useHistory} from 'react-router-dom' 
import Products from '../showcare/components/product/products';
import about2 from '../../img/about2.jpg';
import Contant from '../showcare/components/contant/contant';


function Detail(props){
    const tag = props.location.state.detail;

    const history = useHistory()

    function Render(){
        if(tag==='product'){
            return <div>
                <Products></Products>
            </div>     
        }
        else if(tag==='about'){
            return(
                <div className='contentaboutdetail'> 
                    <div className='abouttext'>
                        <img src={about2} alt='who we are'></img>
                        <h1 style={{margin:"10px"}}>Who we are</h1>
                        <p>
                            this site is about a test company which serves as a model to demonstrate my frontend development 
                            and design capabilities using react and backend in nestjs. thus having only one test model.
                        </p>
                    </div>
                </div>
            )
        }
        else if(tag==='contact'){
            return <div>
                <Contant></Contant>
            </div>
        }
        else{return <div><span>Erro! reload the page !</span></div>}
    }
    return(
        <div>
             <div className='navmenudetail'>
                <div className='titlemenu'>
                    <h1>Project.</h1>
                </div>
                <div className='loginmenu'>
                    <button onClick={()=>window.location.replace('/')}>Home</button>
                    <button onClick={()=>history.replace({pathname:'/detail', state:{detail:'product'}})} >Products </button>
                    <button onClick={()=>history.replace({pathname:'/detail', state:{detail:'about'}})}   >About    </button>
                    <button onClick={()=>history.replace({pathname:'/detail', state:{detail:'contact'}})} >Contacts </button>
                </div>                
            </div>
             {Render()} 
        </div>
      
    )

}

export default Detail;
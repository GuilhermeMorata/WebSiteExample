import './products.css';
import {useEffect,useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

require('dotenv').config()




function Products(){ 
    const Baseurl =  process.env.REACT_APP_API_URL
    
    const [list,setlist]= useState([<span style={{fontSize:40,margin:33,textAlign:'center',color:'gray'}}>Loading Content,<br/>please wait !</span>])

    const [searchfilter,setsearchfilter]= useState({'tag': null})
    
    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            const Baseurl =  process.env.REACT_APP_API_URL
            const res = await axios.post(`${Baseurl}user/getList`,searchfilter)
            if(res.data.length > 0){
                const lista = res.data.map((valor,index) =>
                    <div 
                        className='contentcard' 
                        onClick={()=>history.push({pathname:'/fiche',state:{detail:valor}})} 
                        key={index}>
                            <img alt={valor.name} src={valor.imgs[0].props.src}/>
                            <h1 className='opentext'>See More</h1>       
                    </div>
                    
                )
                setlist(lista)
            }
            else{
               setlist(<span style={{color:'black', fontSize:50}}>There is no product with that name!</span>)
            }
        };fetchData()
    }, [searchfilter,history]);
   
    
    function exchangelist(valor){
        setsearchfilter(valor)
    }

    return(
    <div className='listall'>
        <div className='contentexchange'>
          <h1>Product List</h1>
            <div>
                <button onClick={(e)=>{exchangelist({'tag': null})}}    >ALL</button>
                <button onClick={(e)=>{exchangelist({'tag': 'sofa'})}}  >SOFAS</button>
                <button onClick={(e)=>{exchangelist({'tag': 'chair'})}} >CHAIRS</button>
                <button onClick={(e)=>{exchangelist({'tag': 'table'})}}  >TABLES</button>
                <button onClick={(e)=>{exchangelist({'tag': 'rack'})}}  >RACKS</button>
                <button onClick={(e)=>{exchangelist({'tag': 'buffet'})}}  >BUFFETS</button>
                <button onClick={(e)=>{exchangelist({'tag': 'armchair'})}}  >ARMCHAIRS</button>
            </div>
            <hr/>
        </div>
        <div className='contentproducts'>{list}</div>
    </div>
    )

}
export default Products;

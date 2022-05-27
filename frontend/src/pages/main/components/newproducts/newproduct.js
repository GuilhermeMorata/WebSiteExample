import axios from 'axios';
import {useState } from 'react';
import './newproduct.css'
require('dotenv').config()

function Newproduct(){
    const Baseurl =  process.env.REACT_APP_API_URL

    const [name, setname ]=useState()
    const [value, setvalue ]=useState()
    const [desc, setdesc ]=useState()
    const [type, settype ]=useState('novidade')
    const [imgs, setimgs ]=useState([])
    const [tag, settag]=useState('Sofa')


    const [picture,setpicture]=useState([])

    function handlefiteimg(e){
       const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                let valor = <img className='previewimg' src={reader.result} alt=''/>
                setpicture([...picture,reader.result])
                setimgs([...imgs,valor])    
          }
            else if(reader.readyState === 0 || reader.result === 1){
                alert('There was an error loading the photo!')
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    function handlecreated(e){
        e.preventDefault()
        const product ={
            name: name,
            value: value,
            imgs: imgs,
            desc: desc,
            tag: tag,
            type: type,
        }
        createdproduct(product)
    }


    async function createdproduct(product){
        if(product.name && product.value && product.type && product.imgs && product.desc !== undefined){
            const token = localStorage.getItem('access_token')
            axios.defaults.headers.common['Authorization'] = `Bearer ${token.replace(/[\\"]/g, '')}` 
            await axios.post(`${Baseurl}admin/addNewProduct`,product)
                .then(res=>{
                    if(res.status < 300 && res.status > 100){
                        return alert('data saved successfully!!')
                    }
                    else{
                        return alert('there was a problem!')
                    }
                })
                .catch(error => {return alert(`erro : ${error}`)})
        }
        else{
            return alert('Missing some data!!!')  
        }


    }

    return(
        <div className='bodynewproduct'>
            <form>
                <h1>New Product!</h1>
                <div>
                    <span>Product's name:</span>
                    <input onChange={(e)=>{setname(e.target.value)}} placeholder='Unique name'></input>
                </div>
                <div>
                    <span>Price of the product:</span>
                    <input type='number' onChange={(e)=>{setvalue(e.target.value)}} placeholder='number'></input>
                </div>
                <div>
                    <span>Imagens</span>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={(e)=>{handlefiteimg(e)}} placeholder='set imagens...' />
                </div>
                <div>
                    <span>Product description:</span>
                    <textarea  onChange={(e)=>{setdesc(e.target.value)}} placeholder='Text'></textarea>
                </div>
                <div>
                    <span>Product Marking:</span>
                    <select onChange={(e)=>{settype(e.target.value)}}>
                        <option>new model</option>
                        <option>Qualidade em cada detail</option>
                        <option>Promoção</option>
                        <option>Peça Unica</option>
                        <option>Mostruário</option>
                    </select>
                </div>
                <div>
                    <span>Product Tag:</span>
                    <select onChange={(e)=>{settag(e.target.value)}}>
                        <option>Sofa</option>
                        <option>Mesa</option>
                        <option>chair</option>
                        <option>Rack</option>
                        <option>Buffe</option>
                        <option>Poltrona</option>
                    </select>
                </div>
                <button onClick={(e)=>{handlecreated(e)}}>Created</button>
            </form>
            <div className='preview'>
                <button onClick={()=>{setimgs([]);setpicture([])}}>Clear</button>
                <span>Preview</span>
                <div className='previewcontent'>
                     {imgs}
                </div>
                       
            </div>
        </div>
    )
}

export default Newproduct;
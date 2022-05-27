import { useEffect, useState } from "react" 
import axios from 'axios';
import './listproduct.css' 

require('dotenv').config()

function Listproduct(){
    const[render,setrender]=useState([])
    const[loading,setloading]=useState()
    const Baseurl =  process.env.REACT_APP_API_URL
   
    useEffect(()=>{
        function renderlist(list){

            function deleteItem(value){
                const token = localStorage.getItem('token')
                axios.defaults.headers.common['Authorization'] = token
                axios.post(`${Baseurl}admin/deleteProduct`,value)
                .then(
                    () => window.location.reload()
                )
                .catch((erro)=>{alert('dont have delete product!')})
            }

            function updateItem(value){
                let product = {}
                const getlist = [...document.getElementsByName(value)]
                const response = [...getlist]
                response.map((item)=>{
                    let tag = item.id
                    let value = item.value
                    product[tag] = value
                })
                const token = localStorage.getItem('token')
                axios.defaults.headers.common['Authorization'] = token
                axios.post(`${Baseurl}admin/updateProduct`,product)
                    .then(
                        () => window.location.reload()
                    )
                    .catch((erro)=>{alert('dont have delete product!')})
            }

        return(
             list.map((item, index)=>{
                    return(
                            <div className='card' key={index}>
                                <div className='contentimgs'>
                                    {item.imgs.map((value,index)=>{return <img className="imgScreen" alt={index} src={value.props.src} key={index}/>})}
                                </div>
                                <div className="divcard">
                                    <div className='contentinputs'>
                                        <span>Name:{<input style={{border:'none',backgroundColor:"transparent", fontSize:"17px"}}  id="name"  readOnly="readonly"  type="text" name={index} defaultValue={item.name}/>}</span>
                                        <span>Value:</span>
                                        <input id="value" name={index} defaultValue={item.value}/>
                                        <span>desc:</span>
                                        <input id="desc" name={index} defaultValue={item.desc}/>
                                        <span>type:</span>
                                        <input id="type" name={index} defaultValue={item.type}/>
                                        <span>tag:</span>
                                        <input id="tag" name={index} defaultValue={item.tag}/>
                                    </div>
                                </div>
                                <div className='contentbuttons'>
                                    <button onClick={()=>{updateItem(index)}}>Update</button>
                                    <button onClick={()=>{deleteItem(item)}}>Delete</button>
                                </div>
                            </div>
                            )
                         }
                     )
                 )    
            }
        
            async function Startpage(){
                setloading('load')
                const token = localStorage.getItem('access_token')
                axios.defaults.headers.common['Authorization'] = `Bearer ${token.replace(/[\\"]/g, '')}` 
                await axios.get(`${Baseurl}admin/getList`)
                    .then((value) =>{
                        const list = renderlist(value.data)
                        setrender(list)
                        setloading('open')
                    })
                    .catch(error => {
                        console.log('error:',error)
                    }) 
            };Startpage()
        },([])
     )


    return(
        <div className='cardscontent'>
            <div className={loading}>
                <div className='loadcirle' style={{animationDelay: '2s'}}  />
                <div className='loadcirle' style={{animationDelay: '2.5s'}}/>
                <div className='loadcirle' style={{animationDelay: '3.0s'}}/>
                <div className='loadcirle' style={{animationDelay: '3.5s'}}/>
            </div> 
            {render.length > 0 ? render : <span>An error has occurred!</span>}
        </div>
    )
}

export default Listproduct; 
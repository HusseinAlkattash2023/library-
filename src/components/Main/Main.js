import React , {useState} from 'react'
import { BsSearch } from "react-icons/bs";
import image from "../../assest/Reading book-pana.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card'
import axios from 'axios'
import './Main.css'

function Main() {



    const[search , setSearch]=useState("");
    const [bookData , setData]=useState([]);
     
    const OnClick_=()=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCqMb-mrcvfvIJ76U_dxxtlCfItjBgslpY'+'&maxResults=40')
        .then(res => setData(res.data.items))
        .catch(err => console.error(err))
    }
    const searchBook=(evt)=>{
        if(evt.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCqMb-mrcvfvIJ76U_dxxtlCfItjBgslpY'+'&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.error(err))
            
        }
    }
    return (
        <div>
            <div className='header'>
                <div className='row1'>
                    <h1>A room without books is like <br/> a body without a soul.</h1>
                </div>
                <div className='row2'>
                        <h2>Find Yout Book</h2>
                        <div className='search'>
                            <input 
                            type="text" 
                            placeholder='Enter Your Book' 
                            value={search} 
                            onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}
                            />
                            <button onClick={OnClick_}><BsSearch/></button>
                        </div>
                        <img src={image} />
            </div>
        </div>
        <div className='container'>
        {
            <Card book={bookData}/>
        }
        </div>ss

        </div>
  )
}

export default Main;

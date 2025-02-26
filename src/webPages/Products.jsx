import ProductList from "./ProductList"

import { useEffect, useState } from "react"

import { VscFilterFilled } from "react-icons/vsc"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../store/slices/DataSlice"



function Products() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[dispatch])
  
 
    
   const data= useSelector((state)=>{
    
         return state.data
    })
  

   const[filter,setFilter]=useState(data.product)
   const [filterviews,setFilterview]=useState()
   useEffect(()=>{
    setFilter(data.product)
      },[data.product])
  
      
    


  
const alldata = ()=>{
setFilter(data.product)
}

   
  
const filterHandler=()=>{
  setFilterview(!filterviews)
}


const categoryFilter=(item)=>{
   
    const d= data.product.filter((c)=>{
     return   c.category===item

    })
     setFilter(d)
   
    }
    if (data.loading) {
      return <h2 style={{textAlign:"center",}}>loading...</h2>
      
    }
    if (data.error!=null) {
      return <h2  style={{textAlign:"center",}}>{data.error}</h2>
      
    }
   
    
  
   return(<Wrapper>
      <div className="filter">
      <VscFilterFilled onClick={filterHandler} className="filter-sign"/>
      <ul type='none' className={filterviews? 'mobile-filter':'filter-ul'}>
        <li onClick={alldata}>all</li>
       
        <li onClick={()=>categoryFilter("men's clothing")}>men's clothing</li>
        <li onClick={()=>categoryFilter("jewelery")}>jewelery</li>
        <li onClick={()=>categoryFilter("electronics")}>electronics</li>
        <li onClick={()=>categoryFilter("women's clothing")}>women's clothing</li>
        </ul>
        </div>
       
        <div className="page">
        {filter.map((data)=>(
        <ProductList key={data.id}{...data}/>))}
     
    </div>
  
    </Wrapper>
    )
    
}
export default Products


const Wrapper= styled.section`
.page {
  display: grid;
  gap: 40px;
 
  grid-template-columns:repeat(4,2fr);
  margin-top: 20px;
}
  li {
  color: #e72727;

  padding: 0px 10px;
  flex-grow: 1;
}
.filter{
  border: 1px solid black;
  background-color: antiquewhite;
  position: sticky;
  cursor: pointer;
  top: 50px;
}
.filter-ul{
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: justify;
  text-decoration-style: none;
}
.filter-sign{
  display: none;
}
@media(max-width: 768px) and (min-width:400px){
  .page{
      grid-template-columns: repeat(2,5fr);
  }
  
  .filter-sign{
    display: inline;
  }
  .filter-ul{
    display: none;
  }
  .mobile-filter{
    width: 150px;
background-color: antiquewhite;
    height: 300px;
background-color: rgb(174, 224, 224);
position: absolute;
right: 0px;

z-index: -1;
    margin-top: 0;
    display: block;
  }

.filter-sign{
  position: absolute;
  right: 0px;
  color: #e86d40;
  height: 20px;
  width: 50px;
  border: 1px solid black;
}}
@media (max-width:400px) {
  .page{
      grid-template-columns: repeat(1,5fr);
  }
 
.filter-sign{
  display: inline;
}
.filter-ul{
  display: none;
}
.mobile-filter{
  width: 150px;
background-color: antiquewhite;
  height: 300px;
background-color: rgb(174, 224, 224);
position: absolute;
right: 0px;

z-index: -1;
  margin-top: 0;
  display: block;
}
.filter-sign{
  position: absolute;
  right: 0px;
  color: #e86d40;
  height: 20px;
  width: 50px;
  border: 1px solid black;
}
}

`
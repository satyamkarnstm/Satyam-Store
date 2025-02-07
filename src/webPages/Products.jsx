import ProductList from "./ProductList"
import { useProduct } from "../context/Context"
import { useEffect, useState } from "react"
import './product.css'
import { VscFilterFilled } from "react-icons/vsc"

function Products() {
   // const b= useContext(A)
   const {isloding, product}= useProduct()
   const[filter,setFilter]=useState(product)
   const [filterviews,setFilterview]=useState()
  
   useEffect(()=>{
    setFilter(product)
   },[product])
   if (isloding) {
    return   <p> ....loading</p>
 
   
}
const filterHandler=()=>{
  setFilterview(!filterviews)
}


const categoryFilter=(item)=>{
   
    const d= product.filter((c)=>{
     return   c.category===item

    })
     setFilter(d)
   
    }
    const allProduct=()=>{
      setFilter(product)
      }
   
  
   return(<div>
      <div className="filter">
      <VscFilterFilled onClick={filterHandler} className="filter-sign"/>
      <ul type='none' className={filterviews? 'mobile-filter':'filter-ul'}>
        <li onClick={allProduct}>all</li>
       
        <li onClick={()=>categoryFilter("men's clothing")}>men's clothing</li>
        <li onClick={()=>categoryFilter("jewelery")}>jewelery</li>
        <li onClick={()=>categoryFilter("electronics")}>electronics</li>
        <li onClick={()=>categoryFilter("women's clothing")}>women's clothing</li>
        </ul>
        </div>
        <div className="page">
        {filter.map((d)=>(
        <ProductList key={d.id}{...d}/>))}
     
    </div>
  
    </div>
    )
    
}
export default Products
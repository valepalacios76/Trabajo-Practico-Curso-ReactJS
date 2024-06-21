import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import {useParams} from "react-router-dom"

function ItemListContainer() {
   // estados
   const [items, setItems] = useState([])

   const params = useParams()

   //acciones
   useEffect(() =>{

      if(params.id){
         fetch("https://dummyjson.com/products/category/" + params.id)
         .then((res) => {
            return res.json()
         })
         .then((data) => {
            setItems(data.products)
         });
      } else {
         fetch("https://dummyjson.com/products")
         .then((res) => {
            return res.json()
         })
         .then((data) => {
            setItems(data.products)
         });
      }
   },[params.id])


   //vista
   return(
    <ItemList items={items}/>
   )
}

export default ItemListContainer;
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"


function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const id = useParams();

    useEffect(() =>{
           fetch("https://dummyjson.com/products/category/" + {id})
           .then((res) => {
              return res.json()
           })
           .then((data) => {
              setItem(data.id)
           });
     },[id])
           




    return (
        <div>
            <ItemDetail items={item}/>
        </div>
    )   
}

export default ItemDetailContainer;
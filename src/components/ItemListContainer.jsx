import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../firebase/config";

function ItemListContainer(){
    const [productos, setProductos] = useState([])
    const params = useParams().id

    useEffect(() => {
        const productosRef = collection(dataBase, "productos");

        const q = params ? query(productosRef, where("category","==",params)) : productosRef

        getDocs(q)
            .then((resp) => {

                setProductos(
                    resp.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
            })


        // if (params){
        //     fetch('https://dummyjson.com/products/category/' + params)
        //     .then((res) => { return res.json()})
        //     .then((data) => {
        //         setProductos(data.products)
        //     });
        // } else {
        //     fetch('https://dummyjson.com/products')
        //     .then((res) => { return res.json()})
        //     .then((data) => {
        //         setProductos(data.products)
        //     });
        // }
    }, [params])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;
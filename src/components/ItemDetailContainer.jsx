import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebase/config";

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const id = useParams().id;

    useEffect(() => {
        
        const docRef = doc(dataBase, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    {...resp.data(), id: resp.id}
                )
            })


        // fetch('https://dummyjson.com/products/' + id)
        //     .then((res) => { return res.json()})
        //     .then((data) => {
        //         setItem(data)
        //     });
    }, [id])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )

}

export default ItemDetailContainer
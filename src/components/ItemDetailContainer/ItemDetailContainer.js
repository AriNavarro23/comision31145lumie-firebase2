import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'item', productId)

        getDoc(docRef)
            .then(response => {
                const product = { id: response.id, ...response.data()}
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return(
            <h1>Cargando...</h1> 
        )
    }

    return (
        <div className="ItemDetailContainer" >
            { 
                product 
                    ? <ItemDetail  {...product} setCart={setCart} cart={cart}/> 
                    : <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer
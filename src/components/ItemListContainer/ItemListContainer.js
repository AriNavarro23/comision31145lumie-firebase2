import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'item'), where('category', '==', categoryId))
            : collection(firestoreDb, 'item')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <h1>Cargando...</h1>
    }

    if (products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return (
        <div className='ItemListContainer'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
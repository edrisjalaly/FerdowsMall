
import { addDoc, collection } from 'firebase/firestore'

const ProductCollection = collection(db, 'products');

export default{
    async createProduct(productData){
        const docRef = await addDoc(ProductCollection, productData);
        return{id:docRef.id};
    }

    
}
import './ProductDetails.css';
import {useParams} from 'react-router-dom';

import { useState, useEffect } from 'react';

import * as productService from '../../services/productService';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await productService.show(productId);
            setProduct(product);
        }
        fetchProduct();
    }, [productId]);

    if (!product) return <h1>Loading...</h1>
    return (
        <main className='product'>
            <h1>{product.product_name}</h1>
            <p>{product.category}</p>
            <p>{product.sub_category}</p>
            <p>{product.product_cost_to_consumer}</p>
            <button>Add to Bag</button>
        </main>
    );
}

export default ProductDetails;
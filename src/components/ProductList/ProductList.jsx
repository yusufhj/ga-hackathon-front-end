import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    if (!products) return <h1>Loading...</h1>
    return (
        <main>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <h2> {product.product_name}</h2>
                            <p>{product.category}</p>
                            <p>{product.sub_category}</p>
                            <p>{product.product_cost_to_consumer}</p>
                        </Link>
                        <button>Add to Bag</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProductList;
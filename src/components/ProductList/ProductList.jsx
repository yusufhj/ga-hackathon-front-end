const ProductList = ({ products }) => {
    if (!products) return <h1>Loading...</h1>
    return (
        <main>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.product_name}
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProductList;
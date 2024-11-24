import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import * as orderService from "../../services/orderService";

const OrderDetails = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        const fetchOrder = async () => {
        const order = await orderService.show(orderId);
        setOrder(order);
        };
        fetchOrder();
    }, [orderId]);
    
    if (!order) return <h1>Loading...</h1>;
    return (
        <main>
            <h1>Order Details</h1>
                <h2>Order id: {order._id}</h2>
                <p>Order Date: {order.order_date}</p>
                <p>Ship Date: {order.ship_date}</p>
                <p>Ship Mode: {order.ship_mode}</p>
                <p>Customer Name: {order.customer.customer_name}</p>
                <h2>Order Items: </h2>
                {order.order_items.map(order_item => (
                <div key={order_item._id}>
                    <p>Product Cost: {order_item.sales}</p>
                    <p>Quantity: {order_item.quantity}</p>
                    <p>Discount: {order_item.discount}</p>
                    <p>Postal Code: {order_item.postal_code}</p>
                    <h2>Products:</h2>
                    <p>Product Name: {order_item.product.product_name}</p>
                    <p>Category: {order_item.product.category}</p>
                    <p>Sub Category: {order_item.product.sub_category}</p>
                    <p>Product Cost to Consumer: {order_item.product.product_cost_to_consumer}</p>
                    <h2>Region:</h2>
                    <p>Region: {order_item.region.region}</p>
                    <p>Sub Region: {order_item.region.sub_region}</p>
                    <p>Country: {order_item.region.country}</p>
                    <p>Salesperson: {order_item.region.salesperson}</p>
                </div>
                ))}
        </main>
    );
}

export default OrderDetails;
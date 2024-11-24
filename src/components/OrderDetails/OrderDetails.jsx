import './OrderDetails.css'
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
        <main className="order-details">
            <h1>Order Details</h1>
            <div className="order-info">
                <h2>Order id: {order._id}</h2>
                <p><strong>Order Date:</strong> {order.order_date}</p>
                <p><strong>Ship Date:</strong> {order.ship_date}</p>
                <p><strong>Ship Mode:</strong> {order.ship_mode}</p>
                <p><strong>Customer Name:</strong> {order.customer.customer_name}</p>
            </div>
            <h2>Order Items:</h2>
            {order.order_items.map(order_item => (
                <div key={order_item._id} className="order-item">
                    <p><strong>Product Cost:</strong> {order_item.sales}</p>
                    <p><strong>Quantity:</strong> {order_item.quantity}</p>
                    <p><strong>Discount:</strong> {order_item.discount}</p>
                    <p><strong>Postal Code:</strong> {order_item.postal_code}</p>
                    <div className="product-info">
                        <h3>Products:</h3>
                        <p><strong>Product Name:</strong> {order_item.product.product_name}</p>
                        <p><strong>Category:</strong> {order_item.product.category}</p>
                        <p><strong>Sub Category:</strong> {order_item.product.sub_category}</p>
                        <p><strong>Product Cost to Consumer:</strong> {order_item.product.product_cost_to_consumer}</p>
                    </div>
                    <div className="region-info">
                        <h3>Region:</h3>
                        <p><strong>Region:</strong> {order_item.region.region}</p>
                        <p><strong>Sub Region:</strong> {order_item.region.sub_region}</p>
                        <p><strong>Country:</strong> {order_item.region.country}</p>
                        <p><strong>Salesperson:</strong> {order_item.region.salesperson}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default OrderDetails;
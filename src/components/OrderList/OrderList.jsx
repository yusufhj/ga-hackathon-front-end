import './OrderList.css';
import { Link } from 'react-router-dom';

const OrderList = ({ orders }) => {
    return (
        <div>
        <h1>Orders</h1>
        <ul className='orderList'>
            {orders.map(order => (
            <li key={order._id}>
                <Link to={`/orders/${order._id}`}>
                    <h2>Order id: {order._id}</h2>
                    <p>Order Date: {order.order_date}</p>
                    <p>Ship Date: {order.ship_date}</p>
                    <p>Ship Mode: {order.ship_mode}</p>
                    <p>Customer Name: {order.customer.customer_name}</p>
                </Link>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default OrderList;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as productService from "../../services/productService";

const ProductForm = (props) => {
    const [formData, setFormData] = useState({
        category: "",
        sub_category: "",
        product_name: "",
        product_cost_to_consumer: 9999,
        price: 9999,
        description: "",
        stock_quantity: 9999,
        image: "",
    });

    const { id } = useParams();

    
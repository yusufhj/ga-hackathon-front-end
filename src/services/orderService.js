const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/orders`;

export const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const show = async (orderId) => {
    try {
        const res = await fetch(`${BASE_URL}/${orderId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}

export const create = async (orderFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(orderFormData)
        })
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const update = async (id, orderFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(orderFormData)
        })
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const deleteOrder = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}
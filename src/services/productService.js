const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/products`;

export const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        console.log(res.json());
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const show = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const create = async (productFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(productFormData)
        })
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const update = async (id, productFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(productFormData)
        })
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const deleteProduct = async (id) => {
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

export const createReview = async (id, reviewFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(reviewFormData)
        })
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const updateReview = async (id, reviewId, reviewFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(reviewFormData)
        })
        console.log(res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}

export const deleteReview = async (id, reviewId) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}/reviews/${reviewId}`, {
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

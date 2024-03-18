import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
if (!API_URL) {
    console.error('API_URL is not defined');
}


export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchMealsWithinCategories = async (num, categories) => {
    try {
        const response = await axios.get(`${API_URL}/plan/${num}/${categories.join(',')}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
};

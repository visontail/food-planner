import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
if (!API_URL) {
    console.error('API_URL is not defined');
}

/**
 * Fetches all categories from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of categories.
 * @throws {Error} If there is an error fetching the categories.
 */
export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
/**
 * Fetches meals within specified categories and number from the API.
 * @param {number} num - The number of meals to fetch.
 * @param {Array<string>} categories - An array of category names.
 * @returns {Promise<Array>} A promise that resolves to an array of meals.
 * @throws {Error} If there is an error fetching the meals.
 */
export const fetchMealsWithinCategories = async (num, categories) => {
    try {
        const response = await axios.get(`${API_URL}/plan/${num}/${categories.join(',')}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
};

/**
 * Fetches all meals from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of meals.
 * @throws {Error} If there is an error fetching the meals.
 */
export const fetchAllMeals = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
}
/**
 * Fetches a specific meal from the API.
 * @param {string} id - The ID of the meal to fetch.
 * @returns {Promise<Object>} A promise that resolves to the fetched meal object.
 * @throws {Error} If there is an error fetching the meal.
 */
export const fetchSelectedMeal = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/item/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching meal:', error);
        throw error;
    }
}
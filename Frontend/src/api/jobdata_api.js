import axios from "axios";

const baseURL = `https://octet-design-assignment.onrender.com/api/jobdata`;
export const jobdata = async () => {
    try {
        const response = await axios.get(`${baseURL}/jobs`);
        return response.data;
    } catch (error) {
        console.error('error in jobdata:', error);
        throw error;
    }
};
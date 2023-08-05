import axios from "axios";

const baseURL = `https://octet-design-assignment.onrender.com`;
export const jobdata = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/jobdata`);
        return response.data;
    } catch (error) {
        console.error('error in jobdata:', error);
        throw error;
    }
};
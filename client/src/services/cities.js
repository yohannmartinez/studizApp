import axios from "axios"

export const getCities = async (search_value) => {
    const resp = await axios.get('/api/cities/getCities', { params: { search_value: search_value } });
    return resp
}
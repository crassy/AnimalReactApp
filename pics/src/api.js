import axios from "axios";


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID jvgWxJqBp6WHkhAJujFsNB1eTrF-N5r6Y7PTO6maZTI'
        }, 
        params: {
            query: term
        }
    });

    
    return response.data.results;
};

export default searchImages;
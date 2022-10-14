import axios from "axios";

const nasaApi = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=HI8kOXtwnr8RB3Hr1LYI0OiE86UxIxtgCFfAdbWJ",
});

export const getPicture = () => {
    return nasaApi.get().then((res) => {
        return res.data;
    });
};

const newsApi = axios.create({ baseURL: "https://api.spaceflightnewsapi.net/v3/articles", });

export const getNews = () => {
    return newsApi.get().then((res) => {
        return res.data;
    });
};
export const getIndividualNews = (id) => {
    return newsApi.get(`/${id}`).then((res) => {
        console.log(res.data);
        return res.data;
    });
};
import axios from "axios";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY_QUERY = `key=${process.env.REACT_APP_REDUX_BLOG_HEROKU_APP_API_KEY}`;

export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";
export const FETCH_POST = "fetch_post";
export const FETCH_POSTS = "fetch_posts";

export const createPost = (values, callback) => {
    const request =
        axios.post(`${ROOT_URL}/posts?${API_KEY_QUERY}`, values)
            .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
};

export const deletePost = (id, callback) => {
    axios.delete(`${ROOT_URL}/posts/${id}?${API_KEY_QUERY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
};

export const fetchPost = id => {
    const request =
        axios.get(`${ROOT_URL}/posts/${id}?${API_KEY_QUERY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
};

export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts?${API_KEY_QUERY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
};
// import { post } from "../../server/routes/api/tasklist";
import axios from 'axios';

// const url = 'http://localhost:5000/api/posts/'; delete localhost:5000 by put it in vue.config.js file
const url = 'api/posts/';

class PostService{
    // Get Posts to frontend
    static getPosts(){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            }).catch((err)=>{
                reject(err);
            })
        })
    }

    // Create Post to frontend
    static insertPost(task){
        return axios.post(url, {
            task
        });
    }

    // Delete Post to frontend
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;
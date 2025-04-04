
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../services/Api";
import LayoutPost from "../../layouts/LayoutPost";
import Detailnews from "../../component/Detailnews";
import Skeleton from "react-loading-skeleton";

const PostShow = () => {
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Tambahkan state loading
    const [loadingPosts, setLoadingPosts] = useState(true);
    const { slug } = useParams();


    const fetchDataPost = async () => {
        //setLoadingPosts "true"
        setLoading(true);

        //fetch data
        await Api.get(`/api/public/posts/${slug}`).then((response) => {
            //assign response to state "posts"
            setPost(response.data.data);

            setLoading(false);
            //setTimeout(() => { setLoading(false) }, 1000);
        });
    };


    const fetchDataPosts = async () => {
        await Api.get("/api/public/posts/getposthomepage").then((response) => {
            setPosts(response.data.data);
            setLoadingPosts(false);
        });
    }


    useEffect(() => {
        //call method "fetchDataPosts"
        fetchDataPost();
        fetchDataPosts();
    }, [slug]);

    return (
        <LayoutPost>
            <Detailnews data={post} loading={loading} posts={posts} loadingPosts={loadingPosts} />
        </LayoutPost>
    );

}

export default PostShow
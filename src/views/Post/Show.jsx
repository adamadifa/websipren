
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../services/Api";
import LayoutPost from "../../layouts/LayoutPost";
import Detailnews from "../../component/Detailnews";
import Skeleton from "react-loading-skeleton";

const PostShow = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // Tambahkan state loading
    const { slug } = useParams();


    const fetchDataPost = async () => {
        //setLoadingPosts "true"
        setLoading(true);

        //fetch data
        await Api.get(`/api/public/posts/${slug}`).then((response) => {
            //assign response to state "posts"
            setPost(response.data.data);

            //setLoadingPosts "false"
            setTimeout(() => { setLoading(false) }, 1000);
        });
    };


    useEffect(() => {
        //call method "fetchDataPosts"
        fetchDataPost();
    }, []);

    return (
        <LayoutPost>
            {loading ? <Detailnews data={null} /> : <Detailnews data={post} />}

        </LayoutPost>
    );

}

export default PostShow
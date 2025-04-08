
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../services/Api";
import LayoutPost from "../../layouts/LayoutPost";
import Detailnews from "../../component/Detailnews";


const PostShow = () => {
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Tambahkan state loading
    const [loadingPosts, setLoadingPosts] = useState(true);
    const { slug } = useParams();
    // Fungsi untuk update atau membuat <meta name="...">
    function updateMetaTag(name, content) {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("name", name);
            document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
    }

    // Fungsi untuk update atau membuat <meta property="...">
    function updateMetaProperty(property, content) {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("property", property);
            document.head.appendChild(tag);
        }
        tag.setAttribute("content", content);
    }

    function stripHtml(html) {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }

    const fetchDataPost = async () => {
        //setLoadingPosts "true"
        setLoading(true);

        //fetch data
        await Api.get(`/api/public/posts/${slug}`).then((response) => {
            //assign response to state "posts"
            setPost(response.data.data);
            // Bersihkan tag HTML dari konten atau excerpt
            const plainDescription = stripHtml(response.data.data.content).substring(0, 150) + "...";
            document.title = `${response.data.data.title} | Pesantren Persis 80 Al Amin Sindangkasih`
            updateMetaTag("description", plainDescription);
            updateMetaProperty("og:title", response.data.data.title);
            updateMetaProperty("og:description", plainDescription);
            updateMetaProperty("og:image", response.data.data.image || "/default.jpg");
            updateMetaProperty("og:url", window.location.href);
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
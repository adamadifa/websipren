import Jenjang from "../component/Jenjang"
import News from "../component/News"
import Maps from "../component/Maps"
import TentangKami from "../component/Tentangkami"
import LayoutHome from "../layouts/LayoutHome"
import Api from "../services/Api"
import { useState, useEffect } from "react"
import Sebaranalumni from "../component/Sebaranalumni"
import Bannerpendaftaran from "../component/Bannerpendaftran"
import Programunggulan from "../component/Programunggulan"
import Ekstrakurikuler from "../component/Ekstrakurikuler"


const Home = () => {
    document.title = 'Home | Pesantren Persis 80 Al Amin Sindangkasih'

    const [posts, setPosts] = useState([]);
    const [lastPost, setLastPost] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [loadingLastPost, setLoadingLastPost] = useState(true);

    const fetchDataPosts = async () => {
        //setLoadingPosts "true"
        setLoadingPosts(true);

        //fetch data
        await Api.get("/api/public/posts/getposthomepage").then((response) => {
            //assign response to state "posts"
            setPosts(response.data.data);

            //setLoadingPosts "false"
            setTimeout(() => { setLoadingPosts(false) }, 1000);
        });
    };

    const fetchDataLastPost = async () => {
        setLoadingPosts(true);
        await Api.get("/api/public/posts/getlastposthomepage").then((response) => {
            setLastPost(response.data.data);
            setLoadingLastPost(false);
            //setLoadingPosts(false);
        })
    }

    //hook useEffect
    useEffect(() => {
        //call method "fetchDataPosts"
        fetchDataPosts();
        fetchDataLastPost();
    }, []);
    return (
        <>
            <LayoutHome>
                <TentangKami />
                <Jenjang />
                <Sebaranalumni />
                <Programunggulan />
                <Bannerpendaftaran />
                <Ekstrakurikuler />
                <News posts={posts} loadingPosts={loadingPosts} lastPost={lastPost} loadingLastPost={loadingLastPost} />
                <Maps />
            </LayoutHome>
        </>
    )
}

export default Home
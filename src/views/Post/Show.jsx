
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services/Api";
import LayoutPost from "../../layouts/LayoutPost";
import Detailnews from "../../component/Detailnews";

const PostShow = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // Tambahkan state loading

    const { slug } = useParams();
    const fetchDataPost = async () => {
        try {
            setLoading(true); // Set loading ke true saat mulai fetch
            const response = await Api.get(`api/public/posts/${slug}`);
            setPost(response.data.data);
            document.title = `${response.data.data.title} | Pesantren Persis 80 Al Amin Sindangkasih`;
        } catch (error) {
            console.error("Gagal mengambil data postingan:", error);
        } finally {
            setLoading(false); // Set loading ke false setelah fetch selesai
        }
    };

    useEffect(() => {
        fetchDataPost();
    }, [slug]);

    return (
        <LayoutPost>
            {loading ? (
                <p>Loading...</p> // Tambahkan indikator loading
            ) : post ? (
                <Detailnews data={post} />
            ) : (
                <p>Data tidak ditemukan</p> // Tampilkan pesan jika data tidak ada
            )}
        </LayoutPost>
    );

}

export default PostShow
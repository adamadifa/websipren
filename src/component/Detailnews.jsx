import Skeleton from "react-loading-skeleton";
import DateID from "../utils/DateID";
import AlertDataEmpty from "./general/AlertDataEmpty";
import { Link } from "react-router-dom";

const Detailnews = (props) => {
    const { data, loading, posts, loadingPosts } = props
    return (
        <section id="berita" className="pt-32">
            <div className="container mx-auto px-4">
                {loading ? <Skeleton /> : (
                    <nav className="flex mb-5" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#"
                                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{data.category.name}</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span
                                        className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{data.title}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                )}
                <div className="flex flex-col justify-start space-x-4 md:flex-row ">
                    <div id="detailberita" className="md:w-7/12 w-full">
                        {loading ? <Skeleton height={300} /> : (
                            <img src={data.image} alt="" className="rounded-lg mb-5 w-full h-96 object-cover" />
                        )}
                        {loading ? <Skeleton height={50} /> : (
                            <>
                                <h4 className="text-4xl text-slate-900 mb-2 font-bold">{data.title}</h4>
                                <span className="text-slate-400 text-sm mb-3">{DateID(new Date(data.created_at))}</span>
                                <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
                            </>
                        )}
                        <div className="flex justify-start space-x-2 py-5">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com" target="_blank"
                                className="bg-blue-600 p-2 rounded-full">
                                <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                        clipRule="evenodd" />
                                </svg>

                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com" target="_blank"
                                className="bg-pink-600 p-2 rounded-full">
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd"
                                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                        clipRule="evenodd" />
                                </svg>


                            </a>
                            <a href="https://api.whatsapp.com/send?text=https://example.com" target="_blank"
                                className="bg-green-500 hover:bg-green-700 p-2 rounded-full">
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd"
                                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                                        clipRule="evenodd" />
                                    <path fill="currentColor"
                                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div id="lastfivenews" className="w-full lg:w-4/12">
                        <h4 className="text-2xl font-bold mb-3 border-b-2 py-2 border-slate-400">Berita Terbaru</h4>
                        {loadingPosts ? (<Skeleton height={100} width={100} />) :
                            (
                                posts.map((post, index) => (
                                    <Link to={`/posts/${post.slug}`} className="text-decoration-none" key={index}>
                                        <div className="flex mb-4">
                                            <div className="h-20 w-20 object-cover">
                                                <img src={post.image} alt="" className="rounded-xl w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-5">
                                                <h4 className="text-xl text-slate-900  font-bold">{post.title}</h4>
                                                <span className="text-slate-500 text-sm">Rabu, 27 Maret 2025</span>
                                                <p dangerouslySetInnerHTML={{ __html: post.content.substring(0, 120) }}>

                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))

                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Detailnews
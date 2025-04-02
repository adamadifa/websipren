import Cardheadlinenews from "./Cardheadlinenews";
import Cardnews from "./Cardnews";
import Pengumuman from "./Pengumuman";

const News = (props) => {
    return (
        <section className="py-10 px-5" id="berita">
            <div className="flex flex-col lg:flex-row  mx-auto max-w-screen-xl gap-2">
                <Cardheadlinenews data={props.lastPost} />
                <div id="lastfivenews" className="w-full lg:w-4/12">
                    {props.posts.map((post, index) => (
                        <Cardnews key={index} data={post} loading={props.loadingPosts} />
                    ))}
                </div>
                <Pengumuman />
            </div>
        </section>
    );
}

export default News
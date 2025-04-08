
import { Link } from "react-router-dom";
import DateID from "../utils/DateID";
import Skeleton from 'react-loading-skeleton'
const Cardnews = (props) => {

    return (
        props.loading ? (
            <Skeleton height={100} />
        ) : (
            <Link to={`/posts/${props.data.slug}`} className="text-decoration-none">
                <div className="flex mb-4">
                    <div className="w-40 h-25 object-cover">
                        <img src={props.data.image} alt="" className="rounded-xl w-full h-full object-cover" />
                    </div>
                    <div className="ml-5 w-full">
                        <h4 className="md:text-2xl text-xl text-slate-900 font-bold">
                            {props.data.title.length > 50
                                ? `${props.data.title.substring(0, 50)}...`
                                : props.data.title}
                        </h4>
                        <span className="text-slate-500 text-sm">{DateID(new Date(props.data.created_at))}</span>
                        <p dangerouslySetInnerHTML={{ __html: props.data.content.substring(0, 150) }}></p>
                    </div>
                </div>
            </Link>
        )
    )
}

export default Cardnews
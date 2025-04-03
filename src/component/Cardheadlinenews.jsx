import Skeleton from "react-loading-skeleton";
import AlertDataEmpty from "./general/AlertDataEmpty";

const Cardheadlinenews = (props) => {
    return (
        <div id="lastnews" className="w-full lg:w-2/5 mb-5">
            {props.data === null ? (
                <AlertDataEmpty />
            ) : (
                <>
                    {props.loading ? <Skeleton height={250} /> :
                        <a href="#">
                            <img src={props.data.image} alt="" className="rounded-lg mb-5 w-[640px] h-80 object-cover" />
                        </a>
                    }
                    {props.loading ? <Skeleton height={50} /> :
                        <h4 className="text-4xl text-slate-900 mb-5 font-bold">{props.data.title}</h4>
                    }
                    {props.loading ? <Skeleton height={70} /> :
                        <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: props.data.content.substring(0, 200) }}></p>
                    }
                </>
            )}

        </div>
    );
}

export default Cardheadlinenews
import { FaHandPointUp } from "react-icons/fa6";

export default function Pilar(props) {
    const { data } = props;
    return (
        <div className="flex flex-col items-center lg:flex-row space-x-4 space-y-4 mb-5 text-white">
            {data.icon}
            <div className="text-center lg:text-left">
                <h4 className="font-bold text-xl">{data.title}</h4>
                <p className="text-gray-400">
                    {data.description}
                </p>
            </div>
        </div>
    );
}
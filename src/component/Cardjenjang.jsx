import Star from "./Star";

const Cardjenjang = (props) => {
    return (
        <div className="w-full max-w-sm bg-white  border-t-8 border-[#1a7469] rounded-lg shadow-sm ">
            <a href="#">
                <img className="p-4 rounded-t-lg mx-auto" src={props.data.image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                        {props.data.name}
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">

                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>

                </div>
                <div className="flex items-center justify-between">
                    <a href="#"
                        className="text-white w-full bg-[#1a7469] hover:bg-[#13564f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Daftar
                        Sekarang
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cardjenjang
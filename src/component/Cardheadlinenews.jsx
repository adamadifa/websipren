const Cardheadlinenews = (props) => {
    return (
        <div id="lastnews" className="w-full lg:w-2/5 mb-5">
            <a href="#">
                <img src={props.data.image} alt="" className="rounded-lg mb-5 w-[640px] h-80 object-cover" />
            </a>
            <h4 className="text-4xl text-slate-900 mb-5 font-bold">{props.data.title}</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sed tenetur eveniet dolore
                repudiandae quod similique veniam est vel. Blanditiis deserunt sapiente iusto placeat quis
                animi,
                itaque quaerat numquam omnis!
            </p>
        </div>
    );
}

export default Cardheadlinenews
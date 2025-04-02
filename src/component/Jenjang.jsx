import Cardjenjang from "./Cardjenjang";

const Jenjang = () => {
    const data = [
        {
            'name': 'TK Calisa Rabbani',
            'image': '/assets/images/tk.png'
        },
        {
            'name': 'SDIT Al amin',
            'image': '/assets/images/sdit.png'
        },
        {
            'name': 'Madrasah Diniyah Ula',
            'image': '/assets/images/mdu.png'
        },
        {
            'name': 'Madrasah Tsanawiyah',
            'image': '/assets/images/mts.png'
        },
        {
            'name': 'Madrasah Aliayah',
            'image': '/assets/images/ma.png'
        }
    ];
    return (
        <section className="py-10" id="jenjangpendidikan">
            <h4 className="text-4xl text-slate-900 mb-10 font-bold text-center ">Jenjang Pendidikan</h4>
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 px-5 lg:grid-cols-5 gap-5">
                {data.map((jenjang, index) => (
                    <Cardjenjang key={index} data={jenjang} />
                ))}
            </div>
        </section>
    )
}

export default Jenjang;
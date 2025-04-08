const Bannerpendaftaran = () => {
    return (

        <section id="bannerpendaftaran" className="bg-gradient-to-r from-teal-700 to-teal-800 h-90">
            <div className="mx-auto max-w-screen-xl flex flex-row items-center">
                <div id="modeliklan" className="w-1/2">
                    <img src="/assets/images/modeliklan.png" className="h-90" />
                </div>
                <div id="deskripsippdb">
                    <div>
                        <h1 className="text-4xl text-white mb-10 font-bold">
                            Sistem Penerimaan Murid Baru
                            <br />Pesantren Persis 80 Al Amin
                            <br />Tahun Ajaran 2025/2026
                        </h1>
                    </div>
                    <div className="flex flex-row gap-4">
                        <a href="#" className="py-2 px-6 bg-yellow-400 font-semibold rounded-md">Daftar Sekarang</a>
                        <a href="#" className="py-2 px-6 border-1 border-white font-semibold rounded-md text-white">Download Brosur</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bannerpendaftaran
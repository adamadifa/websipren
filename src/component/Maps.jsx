import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa"
const Maps = () => {
    return (
        <section className="py-10" id="maps">
            <div className="mx-auto max-w-screen-xl">
                <h1 className="text-4xl text-slate-900 mb-10 font-bold text-center ">Hubungi Kami</h1>
                <div className="flex flex-row space-x-5">
                    <div id="lokasipesantren">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4555334324227!2d108.23921471177555!3d-7.30260859267471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5a091e763947%3A0x6c74e3c1a7e4ee9!2sPesantren%20Persatuan%20Islam%2080%20Al-Amin!5e0!3m2!1sid!2sid!4v1744067987078!5m2!1sid!2sid" width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div id="detailkontak">
                        <h1 className="text-2xl text-slate-700 mb-2 font-bold ">Pesantren Persatuan Islam 80 Al-Amin</h1>
                        <p className="text-slate-500 mb-4">Jl. Ancol No.27, Sindangkasih, Kec. Sindangkasih, Kabupaten Ciamis, Jawa Barat 46268</p>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <div id="facebook" className="flex gap-2 items-center">
                                    <FaFacebook className="text-[#1a7469] text-xl" />
                                    <span className="text-slate-700">Pesantren Persis 80 Al Amin Sindangkasih</span>
                                </div>
                            </li>
                            <li>
                                <div id="instagram" className="flex gap-2 items-center">
                                    <FaInstagram className="text-[#1a7469] text-xl" />
                                    <span className="text-slate-700">persis.alamin</span>
                                </div>
                            </li>
                            <li>
                                <div id="youtube" className="flex gap-2 items-center">
                                    <FaYoutube className="text-[#1a7469] text-xl" />
                                    <span className="text-slate-700"> Persis 80 Al Amin Sindangkasih</span>
                                </div>
                            </li>
                            <li>
                                <div id="phone" className="flex gap-2 items-center">
                                    <FaPhone className="text-[#1a7469] text-xl" />
                                    <span className="text-slate-700">+62 812 3456 7890</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Maps
import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa"
import { motion } from "motion/react"
const Sebaranalumni = () => {
    return (
        <section id="sebaranalumni">
            <div className="mx-auto max-w-screen-xl  p-5">
                <div className="flex flex-row gap-5 items-start">
                    <motion.div initial={{ x: '-30%', opacity: 0 }}
                        whileInView={{ x: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }} id="sebaranalumni" className="w-3/5">
                        <img src="/assets/images/sebaranalumni.png" alt="" className="w-full h-full object-cover" />
                    </motion.div>
                    <div id="deskripsi_sebaranalumni" className="w-2/5 ">
                        <motion.h1 initial={{ y: '100%', opacity: '0%' }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }} className="text-3xl text-slate-700 mb-2 font-bold ">Sebaran Alumni</motion.h1>
                        <motion.p initial={{ y: '40%', opacity: '0%' }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-slate-500 mb-4">
                            Pesantren Persis 80 Al-Amin merupakan lembaga pendidikan Islam yang tidak hanya fokus pada pembinaan akhlak dan penguatan keilmuan agama, tetapi juga mendorong santrinya meraih prestasi akademik yang gemilang. Hal ini terbukti dari sebaran alumni yang berhasil masuk ke Perguruan Tinggi Negeri (PTN) favorit mencapai 88%.
                            Dengan kurikulum terpadu antara diniyah dan umum, serta bimbingan intensif persiapan masuk PTN, para santri dibekali dengan kompetensi spiritual, intelektual, dan sosial yang seimbang. Keberhasilan ini menjadi bukti nyata bahwa Pesantren Persis 80 Al-Amin mampu mencetak generasi yang unggul, berakhlak mulia, dan siap bersaing di dunia global.
                        </motion.p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Sebaranalumni
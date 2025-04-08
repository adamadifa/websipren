
import { motion } from "motion/react"
const Ekstrakurikuler = () => {
    const kegiatanEkstrakurikuler = [
        { title: "Tahfizh" },
        { title: "Archery" },
        { title: "Volley" },
        { title: "Futsal" },
        { title: "Badminton" },
        { title: "Karate" },
        { title: "Shurul Khan" },
        { title: "Bripsus" },
        { title: "AHC" },
        { title: "Perisai Diri" },
        { title: "Pramuka" },
        { title: "Mewarnai (TK)" },
        { title: "Menari (TK)" },
        { title: "English Club" },
        { title: "Arabic Club" },
        { title: "Sains" }
    ];

    return (
        <section id="ekstrakurikuler">
            <div className="mx-auto max-w-screen-xl  p-5">
                <div className="flex flex-row space-x-10 items-center">
                    <motion.div initial={{ x: '-30%', opacity: 0 }}
                        whileInView={{ x: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }} id="ekstrakurikuler" className="w-2/5">
                        <img src="/assets/images/modeliklan3.png" alt="" className="w-full h-full object-cover" />
                    </motion.div>
                    <div id="deskripsi_ekstrakurikuler" className="w-3/5 ">
                        <motion.h1 initial={{ y: '100%', opacity: '0%' }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }} className="text-3xl text-slate-700 mb-2 font-bold ">Ekstrakurikuler</motion.h1>
                        <motion.div initial={{ y: '40%', opacity: '0%' }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-slate-500 mb-4">
                            <p>
                                Pesantren Persis 80 Al-Amin tidak hanya fokus pada pendidikan akademik, tetapi juga mendorong santrinya untuk mengembangkan bakat dan minat melalui kegiatan ekstrakurikuler. Kegiatan ini bertujuan untuk meningkatkan kemampuan sosial, keterampilan, dan keseimbangan hidup santri.
                                Dengan berbagai pilihan kegiatan seperti olahraga, seni, dan organisasi, para santri dapat menemukan minat dan bakatnya, serta mengembangkannya menjadi prestasi yang gemilang. Keberhasilan ini menjadi bukti nyata bahwa Pesantren Persis 80 Al-Amin mampu mencetak generasi yang unggul, berakhlak mulia, dan siap bersaing di dunia global.
                            </p>

                            {kegiatanEkstrakurikuler.map((item, index) => (
                                <span key={index} class="bg-teal-700 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm">{item.title}</span>
                            ))}



                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Ekstrakurikuler
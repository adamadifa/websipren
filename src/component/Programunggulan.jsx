import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa"
import { motion } from "motion/react"
import { useState } from "react"
const Programunggulan = () => {
    const [activeAccordion, setActiveAccordion] = useState('');

    const toggleAccordion = (accordionName = '') => {
        setActiveAccordion(prev => prev === accordionName ? '' : accordionName);
    };

    const programUnggulan = [
        {
            title: "Pembentukan Karakter",
            deskripsi:
                "Program ini fokus pada pembentukan akhlak mulia, kedisiplinan, tanggung jawab, dan etika peserta didik melalui kegiatan rutin, mentoring, dan keteladanan.",
        },
        {
            title: "Tahsin & Tahfizh Al Quran",
            deskripsi:
                "Meningkatkan kemampuan membaca Al-Quran dengan tajwid yang benar (tahsin) dan membina peserta didik agar mampu menghafal Al-Quran secara terstruktur dan konsisten (tahfizh).",
        },
        {
            title: "Bahasa Asing (Arab & Inggris)",
            deskripsi:
                "Membekali peserta didik dengan kemampuan dasar dalam berbahasa Arab dan Inggris secara aktif, baik lisan maupun tulisan, melalui pembelajaran kontekstual dan praktik langsung.",
        },
        {
            title: "Science",
            deskripsi:
                "Menumbuhkan rasa ingin tahu dan keterampilan sains melalui eksperimen, observasi, dan pembelajaran berbasis proyek yang mendorong peserta didik berpikir kritis dan kreatif.",
        },
    ];

    return (
        <section id="programunggulan">
            <div className="mx-auto max-w-screen-xl  p-5">
                <div className="flex flex-row space-x-10 items-start">
                    <div id="deskripsi_programunggulan" className="w-4/5 ">
                        <motion.h1 initial={{ y: '100%', opacity: '0%' }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }} className="text-3xl text-slate-700 mb-4 font-bold ">Program Unggulan</motion.h1>

                        <motion.div initial={{ y: '40%', opacity: '0%' }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} >
                            {programUnggulan.map((item, index) => (
                                <div key={index}>
                                    <h2 id="accordion-collapse-heading-1">
                                        <button onClick={() => toggleAccordion(index)} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded={activeAccordion === index ? "true" : "false"} aria-controls="accordion-open-body-1">
                                            <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> {item.title}</span>
                                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className={activeAccordion === index ? 'block' : 'hidden'} aria-labelledby="accordion-collapse-heading-1">
                                        <div className="p-5 border border-b-0 border-gray-200">
                                            <p className="mb-2 text-gray-500">
                                                {item.deskripsi}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>


                    </div>
                    <motion.div initial={{ x: '30%', opacity: 0 }}
                        whileInView={{ x: '0%', opacity: 1 }}
                        transition={{ duration: 0.8 }} id="sebaranalumni" className="w-2/5">
                        <img src="/assets/images/modeliklan2.png" alt="" className="w-full h-full object-cover" />
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default Programunggulan
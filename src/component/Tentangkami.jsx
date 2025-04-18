import { motion } from "motion/react"
const TentangKami = () => {
    return (
        <section className="py-10" id="tentangkami">
            <div className="flex flex-col items-center lg:gap-10 gap-5 lg:items-start lg:flex-row max-w-screen-xl mx-auto">
                <motion.div initial={{ x: '-30%', opacity: 0 }}
                    whileInView={{ x: '0%', opacity: 1 }}
                    transition={{ duration: 0.8 }} className="w-3/5 md:max-w-60 h-auto lg:w-full">
                    <img src="/assets/images/paridwajdi.png" className="w-full" alt="Parid Wajdi" />
                </motion.div>
                <div className="lg:flex w-4/5">
                    <div className="lg:flex-col">
                        <motion.div initial={{ y: '20%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
                            <h2 className="text-4xl text-slate-900 mb-5 font-bold text-center lg:text-left">
                                Tentang Pesantren
                            </h2>
                        </motion.div>
                        <motion.div initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                            <p className="text-slate-500 px-5 lg:px-0">
                                Berawal dari sebuah masjid yang dibangun pada tahun 1986. Masjid ini diberi nama Masjid Al-Amin. Di
                                Masjid tersebut, diadakan pengajian untuk anak-anak usia sekolah dasar setiap ba’da maghrib.
                                Materinya adalah baca tulis Al-Qur’an.
                                <br /><br />
                                Hari demi hari, semakin bertambahlah anak-anak yang ikut mengaji. Hingga bermusyawarahlah para
                                orangtua beserta pengurus Masjid. Hasil kesepakatan musyawarah pada saat itu, didirikanlah sebuah
                                lembaga pendidikan agama untuk pemula yaitu Madrasah Diniyah. Di awal pembelajaran, santri belajar
                                di teras masjid dan ruang tamu rumah H. Ukar Sukarya sebagai pimpinan pesantren yang rumahnya berada
                                di samping masjid Al-Amin.
                                <br /><br />
                                Pada tahun 1989, melihat telah selesainya bangunan kelas, orangtua santri juga masyarakat menuntut
                                untuk mendirikan Madrasah Tsanawiyah. Akhirnya, berdirilah Madrasah Tsanawiyah. Bila pagi hari
                                santri-santri Tsanawiyah yang memanfaatkan bangunan tersebut, maka di sore hari digunakan oleh
                                tingkat Diniyyah. 9 tahun kemudian, tepatnya pada tahun 1998 orangtua santri Tsanawiyah mendesak
                                untuk mendirikan Mu’allimin atau Madrasah Aliyah. Sehingga pada tahun itulah, didirikan Mu’allimin
                                atau Madrasah Aliyah angkatan pertama.
                                <br /><br />
                                Sampai saat ini Para Santriwan dan santriwati di Pesantren Persatuan Islam 80 Sindangkasih ini
                                berasal dari berbagai daerah di Jawa Barat seperti Tasikmalaya Kota dan Kabupaten, Ciamis, Bandung,
                                Sumedang, Cimahi, juga dari luar Jawa Barat seperti DKI Jakarta, Banten, Sumatera, NTT dan daerah
                                lainnya.
                            </p>
                        </motion.div>

                    </div>
                </div>
                <div id="iklanppdb" className="w-1/5">
                    <img src="/assets/images/iklanppdb.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default TentangKami;
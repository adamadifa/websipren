import { motion } from "motion/react" // Perubahan dari "motion/react" ke "framer-motion"

const Jumbotron = () => {
    return (
        <section className="bg-transparent lg:p-0 lg:h-[calc(100vh-192px)]" id="jumbotron">
            <div className="px-4 mx-auto max-w-screen-2xl text-center py-24 md:px-16 md:py-16 xl:py-16 flex flex-col lg:flex-row items-center">
                {/* Image Section */}

                <motion.div
                    animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="order-first lg:order-last" id="model-1">
                    <img
                        src="/assets/images/model1.png"
                        alt="Model"
                        className="mb-5 md:max-w-max md:min-w-max md:h-[calc(100vh-255px)] h-96"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div initial={{ x: '-30%', opacity: 0 }} whileInView={{ x: '0%', opacity: 1 }} transition={{ duration: 0.8 }}
                    id="highlight">
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none lg:text-left text-white xl:text-6xl">
                        Berakhlak Mulia, Tafaquh Fiddien, Berprestasi
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-left">
                        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row justify-center md:justify-center lg:justify-start sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-slate-800 rounded-lg bg-yellow-400 hover:bg-yellow-600">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Jumbotron;
import { FaHandPointUp, FaUsersViewfinder } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import Pilar from "./Pilar";

const EmpatPilar = () => {
    const pilarpendidikan = [
        {
            icon: <FaHandPointUp className="text-6xl xl:text-8xl" />,
            title: "Tauhidullah",
            description: "Aqidah lurus, ibadah benar, hafal dalil, tartil Al-Qur'an, dan berakhlak mulia."
        },
        {
            icon: <FaGlobe className="text-6xl xl:text-8xl" />,
            title: "Leadership",
            description: "Syukur, kepemimpinan diri, visi shaleh, tangguh, hadapi ujian, semangat raih target."
        },
        {
            icon: <FaHandshake className="text-6xl xl:text-8xl" />,
            title: "Kemandirian",
            description: "Mandiri, penuhi kebutuhan sendiri, dan kuasai satu bahasa asing dengan baik."
        },
        {
            icon: <FaUsersViewfinder className="text-6xl xl:text-8xl" />,
            title: "Rahmatan Lil'alamiin",
            description: "Sehat, aman, cinta & sayang makhluk, bermanfaat bagi lingkungan."
        }
    ];

    return (
        <section className="lg:h-48 shadow-[0px_-4px_4px_rgba(0,0,0,0.25)]">
            <div className="max-w-screen-xl mx-auto py-6 px-5 grid grid-cols-2 lg:grid-cols-4 space-x-4">
                {pilarpendidikan.map((pilar, index) => (
                    <Pilar key={index} data={pilar} />
                ))}
            </div>
        </section>

    );
};

export default EmpatPilar;

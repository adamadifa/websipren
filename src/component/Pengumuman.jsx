import React from "react";
import { FaBullhorn } from "react-icons/fa6";
const announcements = [
    "Jadwal Ujian Semester Ganjil",
    "Pembukaan Pendaftaran Siswa Baru",
    "Pelaksanaan Upacara Bendera",
    "Jadwal Kegiatan Ekstrakurikuler",
    "Pembukaan Kegiatan OSIS",
    "Jadwal Ujian Nasional",
    "Pelaksanaan Kegiatan Siswa",
    "Pembukaan Kegiatan Guru",
    "Jadwal Kegiatan Sekolah",
    "Pembukaan Kegiatan Ekstrakurikuler"
];

const Pengumuman = () => {
    return (
        <div className="bg-[#1a7469] p-5 rounded-lg h-full flex-1">
            <h4 className="font-bold text-2xl text-white mb-3 flex gap-2 items-center">
                <FaBullhorn style={{ transform: "rotate(-20deg)" }} />
                Pengumuman
            </h4>
            <ul>
                {announcements.map((announcement, index) => (
                    <li key={index} className="py-1">
                        <h4 className="font-bold text-white flex items-center gap-2">
                            <FaBullhorn style={{ transform: "rotate(-20deg)" }} className="text-yellow-400" />
                            {announcement}
                        </h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pengumuman;

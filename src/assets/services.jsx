
import { FaBookBookmark, FaPersonChalkboard } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";

export const services = [
    {
        titulo: 'E-Learning',
        contenido: 'Digitalizamos tu formación corporativa con experiencias interactivas y enriquecedoras.',
        icono: <FaBookBookmark size={120} color="rgb(20, 51, 114)"></FaBookBookmark>,
    },
    {
        titulo: 'Formación con expertos',
        contenido: 'Ofrecemos sesiones de entrenamiento y talleres prácticos personalizados para abordar necesidades empresariales.',
        icono: <FaPersonChalkboard size={140} color="rgb(20, 51, 114)"></FaPersonChalkboard>,
    },
    {
        titulo: 'Academias',
        contenido: 'Reunimos profesionales de diferentes industrias para colaborar y crecer juntos.',
        icono: <RiPlantFill size={140} color="rgb(20, 51, 114)"></RiPlantFill>,
    }
];
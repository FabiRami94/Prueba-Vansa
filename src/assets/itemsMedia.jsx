
import { CiInstagram, CiLinkedin, CiSearch } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export const itemsMedia = [
    {
        icon: <CiSearch size={45}></CiSearch>,
        link: 'https://www.vansa.co/',
        direction: 'row',
        arrow: <IoMdArrowDropright size={40} color="white"></IoMdArrowDropright>,
        name: 'Página web'
    },
    {
        icon: <CiLinkedin size={45}></CiLinkedin>,
        link: 'https://co.linkedin.com/company/vansalatam',
        direction: 'row-reverse',
        arrow: <IoMdArrowDropleft size={40} color="white"></IoMdArrowDropleft>,
        name: 'LinkedIn'
    },
    {
        icon: <CiInstagram size={45}></CiInstagram>,
        link: 'https://www.instagram.com/vansalatam/',
        direction: 'row',
        arrow: <IoMdArrowDropright size={40} color="white"></IoMdArrowDropright>,
        name: 'Instagram'
    }
];
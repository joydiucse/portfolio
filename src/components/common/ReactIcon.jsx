import {FaLaptopCode, FaGithub, FaLinkedin, FaAws} from "react-icons/fa";
import {HiCode, HiOutlineHome} from "react-icons/hi";
import {FiArrowRight, FiInfo, FiX, FiMail, FiPhone} from "react-icons/fi";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {BiSolidQuoteSingleLeft} from "react-icons/bi";
import {RiDoubleQuotesL} from "react-icons/ri";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiPhp,
    SiLaravel,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiTailwindcss,
    SiMui,
    SiBootstrap,
    SiNextdotjs,
    SiExpress
} from "react-icons/si";
import {BsDatabaseCheck, BsGear} from "react-icons/bs";
import {TbManualGearbox} from "react-icons/tb";
import {PiGitForkBold} from "react-icons/pi";

export const ReactIcon = ({name='', className='', ...props}) => {
    if (name === 'web') return <FaLaptopCode className={className} {...props} />
    if (name === 'right-arrow') return <FiArrowRight className={className} {...props} />
    if (name === 'info') return <FiInfo className={className} {...props} />
    if (name === 'arrow-up-right') return <FaArrowUpRightFromSquare  className={className} {...props} />
    if (name === 'single-quote') return <BiSolidQuoteSingleLeft className={className} {...props} />
    if (name === 'quote') return <RiDoubleQuotesL className={className} {...props} />
    if (name === 'close') return <FiX className={className} {...props} />
    if (name === 'github') return <FaGithub className={className} {...props} />
    if (name === 'linkedin') return <FaLinkedin className={className} {...props} />
    if (name === 'email') return <FiMail className={className} {...props} />
    if (name === 'phone') return <FiPhone className={className} {...props} />
    if (name === 'react') return <SiReact className={className} {...props} />
    if (name === 'javascript') return <SiJavascript className={className} {...props} />
    if (name === 'typescript') return <SiTypescript className={className} {...props} />
    if (name === 'node') return <SiNodedotjs className={className} {...props} />
    if (name === 'code') return <HiCode className={className} {...props} />
    if (name === 'php') return <SiPhp className={className} {...props} />
    if (name === 'laravel') return <SiLaravel className={className} {...props} />
    if (name === 'database') return <BsDatabaseCheck className={className} {...props} />
    if (name === 'mysql') return <SiMysql className={className} {...props} />
    if (name === 'postgresql') return <SiPostgresql className={className} {...props} />
    if (name === 'mongodb') return <SiMongodb className={className} {...props} />
    if (name === 'redis') return <SiRedis className={className} {...props} />
    if (name === 'docker') return <SiDocker className={className} {...props} />
    if (name === 'kubernetes') return <SiKubernetes className={className} {...props} />
    if (name === 'aws') return <FaAws className={className} {...props} />
    if (name === 'git') return <SiGit className={className} {...props} />
    if (name === 'tailwind') return <SiTailwindcss className={className} {...props} />
    if (name === 'mui') return <SiMui className={className} {...props} />
    if (name === 'bootstrap') return <SiBootstrap className={className} {...props} />
    if (name === 'next') return <SiNextdotjs className={className} {...props} />
    if (name === 'express') return <SiExpress className={className} {...props} />
    if (name === 'gear') return <BsGear className={className} {...props} />
    if (name === 'methodology') return <TbManualGearbox className={className} {...props} />
    if (name === 'git-fork') return <PiGitForkBold className={className} {...props} />
    else return <HiOutlineHome className={className} {...props} />
}

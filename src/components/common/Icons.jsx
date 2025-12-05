import {FaLaptopCode, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineHome} from "react-icons/hi";
import {FiArrowRight, FiInfo, FiX, FiMail, FiPhone} from "react-icons/fi";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {BiSolidQuoteSingleLeft} from "react-icons/bi";
import {RiDoubleQuotesL} from "react-icons/ri";

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
    else return <HiOutlineHome className={className} {...props} />

}

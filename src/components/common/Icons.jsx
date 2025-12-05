import {FaLaptopCode} from "react-icons/fa";
import {HiOutlineHome} from "react-icons/hi";
import {FiArrowRight} from "react-icons/fi";

export const ReactIcon = ({name='', className='', ...props}) => {
    if (name === 'web') return <FaLaptopCode className={className} {...props} />
    if (name === 'right-arrow') return <FiArrowRight className={className} {...props} />
    else return <HiOutlineHome className={className} {...props} />

}
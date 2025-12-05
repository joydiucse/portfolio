import {FaLaptopCode} from "react-icons/fa";
import {HiOutlineHome} from "react-icons/hi";

export const ReactIcon = ({name='', className='', ...props}) => {
    if (name === 'web') return <FaLaptopCode className={className} {...props} />
    else return <HiOutlineHome className={className} {...props} />

}
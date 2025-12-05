import {FaLaptopCode} from "react-icons/fa";
import {HiOutlineHome} from "react-icons/hi";
import {FiArrowRight, FiInfo} from "react-icons/fi";
import {FaArrowUpRightFromSquare} from "react-icons/fa6";
import {BiSolidQuoteSingleLeft} from "react-icons/bi";

export const ReactIcon = ({name='', className='', ...props}) => {
    if (name === 'web') return <FaLaptopCode className={className} {...props} />
    if (name === 'right-arrow') return <FiArrowRight className={className} {...props} />
    if (name === 'info') return <FiInfo className={className} {...props} />
    if (name === 'arrow-up-right') return <FaArrowUpRightFromSquare  className={className} {...props} />
    if (name === 'single-quote') return <BiSolidQuoteSingleLeft className={className} {...props} />
    else return <HiOutlineHome className={className} {...props} />

}

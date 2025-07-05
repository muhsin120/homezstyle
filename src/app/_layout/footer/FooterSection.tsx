// import cn from '@/utils/tailwind';

import LowerFooter from './LowerFooter';
import MiddleFooter from './MiddleFooter';
import UpperFooter from './UpperFooter';
// type Props={
//     className?: string;
// }
const FooterSection = () => {
    return (
        <footer className='footer relative bg-darkBlue text-white  z-10 '>
            <UpperFooter />
            <MiddleFooter />
            <LowerFooter />
        </footer>
    );
};

export default FooterSection;

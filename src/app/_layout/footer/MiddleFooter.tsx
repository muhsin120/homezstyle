import Link from 'next/link';
import Call from '../../../../public/svg/footer/call.svg';
import Instagram from '../../../../public/svg/footer/instagram.svg';
import Linkedin from '../../../../public/svg/footer/linkedin.svg';
import Facebook from '../../../../public/svg/facebook.svg';
import Whatsapp from '../../../../public/svg/footer/whatsapp.svg';
import { ButtonAnimation } from '@/components/ButtonAnimation';

const MiddleFooter = () => {
    return (
        <div className="pb-[4rem] pt-[1.5rem] md:pb-[5.5rem] md:pt-[3.5rem] ">
            <div className="block  md:flex md:justify-between md:gap-[3.2rem] md:px-[1.5rem] lg:gap-0 lg:px-28">
                <div className="pt-[1.88rem] md:pt-0">
                    <div>
                        <h1 className=" font-medium text-center text-small-footer-menu md:text-heading-footer ">
                            Reach Out
                        </h1>
                    </div>
                    <div className="flex flex-col  items-center pt-[0.62rem] md:block ">
                        <Link prefetch={false} href={'mailto:info@homezstyletradingandservices.com'}>
                            <div className="font-poppins font-normal pt-[0.62rem] ~text-body-medium/[1rem] hover:underline">
                                info@homezstyletradingandservices.com
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="pt-[1.88rem]  md:pt-0">
                    <div className="flex justify-center  lg:block">
                        <h1 className="font-poppins font-medium text-small-footer-menu md:text-heading-footer">Our Location</h1>
                    </div>
                    <div className="flex flex-col px-[2.5rem] pt-[1.25rem] text-center  md:block md:w-auto  md:items-center md:px-0  lg:text-start">
                        <p className="text-white font-poppins ~text-body-medium/[1rem] ">
                            Building No: 69,
                            Street 220,
                            Zone 26<br />
                            PO Box 7982 ,
                            <span className='font-medium'> Doha Jadeed</span>
                        </p>
                        <p className="font-poppins ~text-body-medium/desktop-body "> </p>
                        <div className="flex items-center justify-center gap-[0.5rem] md:justify-start">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleFooter;

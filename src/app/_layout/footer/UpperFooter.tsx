import { ButtonAnimation } from '@/components/ButtonAnimation';
import Link from 'next/link';


// import CardAnimation from '@/components/animations/CardAnimation';

const FooterMenu = [
    {
        Name: 'Home',
        Link: '/',
    },
    {
        Name: 'About',
        Link: '/about',
    },
    {
        Name: 'Contact Us',
        Link: '/contact',
    },
];

const UpperFooter = () => {
    return (
        <div className="md:px-[3rem] md:py-[1.5rem] lg:px-[10rem]  xl:px-[17.63rem] ">
            <ul className=" flex flex-wrap justify-around text-center md:justify-between ">
                {FooterMenu.map((footer, i) => (
                    // <CardAnimation key={i} index={i} delay={0.02}>
                    <ButtonAnimation key={i}>
                        <li
                            key={i}
                        className="mx-3 pt-[1rem] font-poppins text-label-footer text-white  hover:underline md:text-title-large"
                        >
                            <Link prefetch={false} href={footer.Link}>
                                {footer.Name}
                            </Link>
                        </li>
                    </ButtonAnimation>
                    // </CardAnimation>
                ))}
            </ul>
        </div>
    );
};

export default UpperFooter;

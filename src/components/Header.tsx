import { navLinks } from '../utils/data';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <nav>
                {navLinks.map((link, index) => {
                    return (
                        <ul key={index}>
                            <Link href={link.path} passHref>
                                <li key={index}>{link.name}</li>
                            </Link>
                        </ul>
                    )
                })}
            </nav>
        </div>
    )
};

export default Header;
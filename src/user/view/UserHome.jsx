import NavBar from '../../shared/common/Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Footer } from './Footer/Footer';
import { Products } from './Products/Products';

export const UserHome = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Products />
            <Footer />
        </>
    );
}
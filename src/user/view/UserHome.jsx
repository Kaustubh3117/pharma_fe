import NavBar from '../../shared/common/Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Footer } from './Footer/Footer';
import { Products } from './Products/Products';
import { PrimeReactProvider } from "primereact/api";

export const UserHome = () => {
    return (
        <>
            <PrimeReactProvider>
                <NavBar>
                    <Banner />
                    <Products />
                    <Footer />
                </NavBar>
            </PrimeReactProvider>
        </>
    );
}
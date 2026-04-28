import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* custom components */
import { getCartCount } from '../../../user/store/actions/cartAction/cartAction';
import { buttonConfigs, navItems, profileMenuItems } from './navbarHelper';
import { Footer } from '../Footer/Footer';

/* prime react components */
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';

/* common components */
import { PrimeBadge } from '../../../shared/common/PrimeBadge/PrimeBadge';
import { PrimeAvatar } from '../../../shared/common/PrimeAvatar/PrimeAvatar';
import { PrimeButton } from '../../../shared/common/PrimeButton/PrimeButton';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

export const Navbar = ({ children }) => {
    const navigate = useNavigate()
    const isAuthenticated = true; // Replace with actual auth logic
    const cartCount = useSelector((state) => state.user.cart.cartCount); // Replace with actual cart count from state
    const menuRef = useRef(null);
    const dispatch = useDispatch();
    const [selectedCity, setSelectedCity] = useState(null);


    useEffect(() => {
        dispatch(getCartCount(1))
    }, [dispatch]);


    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" }
    ];

    const avatarContent = {
        label: 'KP',
        size: 'large',
        // className= "w-12 h-12 bg-blue-500 text-white cursor-pointer",
        style: { backgroundColor: '#2196F3', color: '#ffffff', cursor: 'pointer' },
        shape: 'circle',
        onClick: (e) => menuRef.current.toggle(e)
    }

    const end = (
        <div className="flex align-items-center gap-3">
            <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                editable
                placeholder="Filter By Product, Brand, Category"
                className="w-full md:w-14rem"
            />

            {/* Cart Icon with Badge */}
            <span className="p-overlay-badge" style={{ position: 'relative' }}>
                <i className="pi pi-shopping-cart" style={{ fontSize: '2rem', cursor: 'pointer' }}
                    onClick={() => window.location.href = '/cart'} />
                <PrimeBadge value={cartCount} severity="danger" />
            </span>

            {/* Avatar with dropdown menu when authenticated */}
            {isAuthenticated && (
                <>
                    <PrimeAvatar {...avatarContent} />
                    <Menu model={profileMenuItems} popup ref={menuRef} />
                </>
            )}

            {/* Login & Register Buttons if not authenticated */}
            {!isAuthenticated && (
                <>
                    {buttonConfigs.map((config) => (
                        <PrimeButton {...config} />
                    ))}
                </>
            )}
        </div>
    );

    return (
        <>
            <Menubar model={navItems(navigate)} end={end} className='border-noround' />
            <div className='ml-2 mr-2'>
                {children}
            </div>
            <Footer />
        </>
    );
};

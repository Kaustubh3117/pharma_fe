import { useEffect, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import { PrimeBadge } from '../PrimeBadge/PrimeBadge';
import { PrimeButton } from '../PrimeButton/PrimeButton';
import { buttonConfigs, items, profileMenuItems, start } from './navbarHelper';
import { PrimeAvatar } from '../PrimeAvatar/PrimeAvatar';
import { Footer } from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCartCount } from '../../../user/store/actions/cartAction/cartAction';

const NavBar = ({ children }) => {
    const isAuthenticated = true; // Replace with actual auth logic
    const cartCount = useSelector((state) => state.user.cart.cartCount); // Replace with actual cart count from state
    const menuRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartCount(1))
    }, [dispatch]);

    const avatarContent = {
        label: 'KP',
        size: '',
        style: { backgroundColor: '#2196F3', color: '#ffffff', cursor: 'pointer' },
        shape: 'circle',
        onClick: (e) => menuRef.current.toggle(e)
    }

    const end = (
        <div className="flex align-items-center gap-3">
            {/* Avatar with dropdown menu */}
            {isAuthenticated && (
                <>
                    <PrimeAvatar {...avatarContent} />
                    <Menu model={profileMenuItems} popup ref={menuRef} />
                </>
            )}
            {/* Cart Icon with Badge */}
            <span className="p-overlay-badge" style={{ position: 'relative' }}>
                <i className="pi pi-shopping-cart" style={{ fontSize: '2rem', cursor: 'pointer' }}
                    onClick={() => window.location.href = '/cart'} />
                <PrimeBadge value={cartCount} severity="danger" />
            </span>

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
            <Menubar model={items} start={start} end={end} className='border-noround' />
            <div className='ml-2 mr-2'>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default NavBar;

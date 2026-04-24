import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* custom components */
import { getCartCount } from '../../../user/store/actions/cartAction/cartAction';
import { buttonConfigs, items, profileMenuItems, start } from './navbarHelper';
import { Footer } from '../Footer/Footer';

/* prime react components */
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';

/* common components */
import { PrimeBadge } from '../../../shared/common/PrimeBadge/PrimeBadge';
import { PrimeAvatar } from '../../../shared/common/PrimeAvatar/PrimeAvatar';
import { PrimeButton } from '../../../shared/common/PrimeButton/PrimeButton';

export const Navbar = ({ children }) => {
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
            {/* Avatar with dropdown menu when authenticated */}
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
            <Menubar model={items} start={start} end={end} className='border-noround' />
            <div className='ml-2 mr-2'>
                {children}
            </div>
            <Footer />
        </>
    );
};

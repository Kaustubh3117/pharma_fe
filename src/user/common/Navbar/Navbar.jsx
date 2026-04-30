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
import { PrimeAutoComplete } from '../../../shared/common/PrimeAutoComplete/PrimeAutoComplete';

export const Navbar = ({ children }) => {
    const navigate = useNavigate()
    const isAuthenticated = true; // Replace with actual auth logic
    const cartCount = useSelector((state) => state.user.cart.cartCount); // Replace with actual cart count from state
    const menuRef = useRef(null);
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState(null);
    const [showSearch, setShowSearch] = useState(false)

    useEffect(() => {
        dispatch(getCartCount(1))
    }, [dispatch]);


    const avatarContent = {
        label: 'KP',
        style: {
            backgroundColor: '#2196F3',
            color: '#ffffff',
            cursor: 'pointer',
            height: "40px",
            width: "40px"
        },
        shape: 'circle',
        onClick: (e) => menuRef.current.toggle(e)
    }

    const products = [
        { name: "iPhone 15" },
        { name: "Samsung Galaxy S25" },
        { name: "Sony Headphones" },
        { name: "Nike Shoes" },
        { name: "Adidas Hoodie" },
    ];

    const autoCompleteValues = {
        selectedValue,
        setSelectedValue,
        suggestionsData: products,
        placeholder: "Search products, brands, categories",
        optionLabel: "name",
        className: "flex align-items-center justify-content-center",
    }

    const end = (
        <div className="flex align-items-center gap-3">
            <i
                className={`pi pi-search ${showSearch ? 'highlight-icon' : ''}`}
                style={{ fontSize: '2rem', cursor: 'pointer' }}
                onClick={() => setShowSearch(!showSearch)}
            />
            {/* Cart Icon with Badge */}
            <span className="p-overlay-badge mt-2" style={{ position: 'relative' }}>
                <i className="pi pi-shopping-cart" style={{ fontSize: '2rem', cursor: 'pointer' }}
                    onClick={() => navigate("/cart")} />
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
            {
                showSearch &&
                <div className='p-2' style={{ backgroundColor: "#f9f9f9" }}>
                    <PrimeAutoComplete {...autoCompleteValues} />
                </div>
            }
            <div className='ml-2 mr-2'>
                {children}
            </div>
            <Footer />
        </>
    );
};

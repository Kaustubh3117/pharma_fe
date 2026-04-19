import { useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';

const NavBar = () => {
    const isAuthenticated = true; // Replace with actual auth logic
    const menuRef = useRef(null);

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { window.location.href = '/'; }
        },
        {
            label: 'Products',
            icon: 'pi pi-box',
            items: [
                { label: 'Categories', icon: 'pi pi-list', command: () => { window.location.href = '/products/categories'; } },
                { label: 'Brands', icon: 'pi pi-tags', command: () => { window.location.href = '/products/brands'; } }
            ]
        },
        { label: 'About', icon: 'pi pi-info-circle', command: () => { window.location.href = '/about'; } },
        { label: 'Contact', icon: 'pi pi-envelope', command: () => { window.location.href = '/contact'; } }
    ];

    const start = <span className="font-bold text-xl">Pharma</span>;

    const profileMenuItems = [
        { label: 'Profile', icon: 'pi pi-user', command: () => { window.location.href = '/profile'; } },
        { label: 'Logout', icon: 'pi pi-sign-out', command: () => { /* logout logic */ } }
    ];

    const end = (
        <div className="flex align-items-center gap-3">
            {/* Avatar with dropdown menu */}
            {isAuthenticated && (
                <>
                    <Avatar label="KP" size=""
                        style={{ backgroundColor: '#2196F3', color: '#ffffff', cursor: 'pointer' }}
                        shape="circle"
                        onClick={(e) => menuRef.current.toggle(e)} />
                    <Menu model={profileMenuItems} popup ref={menuRef} />
                </>
            )}
            {/* Cart Icon with Badge */}
            <span className="p-overlay-badge" style={{ position: 'relative' }}>
                <i className="pi pi-shopping-cart" style={{ fontSize: '2rem', cursor: 'pointer' }}
                    onClick={() => window.location.href = '/cart'} />
                <Badge value={3} severity="danger" />
            </span>

            {!isAuthenticated && (
                <>
                    <Button label="Login" className="p-button-sm p-button-success" onClick={() => window.location.href = '/login'} />
                    <Button label="Signup" className="p-button-sm p-button-success" onClick={() => window.location.href = '/signup'} />
                </>
            )}
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default NavBar;

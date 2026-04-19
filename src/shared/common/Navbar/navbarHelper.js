export const items = [
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

export const start = <span className="font-bold text-xl">Pharma</span>;

export const profileMenuItems = [
    { label: 'Kaustubh Patil', icon: 'pi pi-user' },
    { label: 'Profile', icon: 'pi pi-pen-to-square', command: () => { window.location.href = '/profile'; } },
    { label: 'Logout', icon: 'pi pi-sign-out', command: () => { /* logout logic */ } }
];

export const buttonConfigs = [
    {
        label: "Login",
        icon: "pi pi-lock-open",
        iconPos: "left",
        severity: "success",
        style: { width: '100%' },
        onClick: () => console.log('Add to Cart:')
    },
    {
        label: "Signup",
        icon: "pi pi-lock",
        severity: "warning",
        iconPos: "left",
        style: { width: '100%', marginLeft: '0.5rem' },
        onClick: () => console.log('Add to Cart:')
    }
];
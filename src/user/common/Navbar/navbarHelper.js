export const navItems = (navigate) => {
    return [
        {
            label: <span className="font-bold text-xl">Pharma</span>,
            icon: '',
            command: () => { navigate("/") }
        },
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { navigate("/") }
        },
        {
            label: 'Products',
            icon: 'pi pi-box',
            items: [
                { label: 'All Products', icon: 'pi pi-box', command: () => { navigate("catalogView/products") } },
                { label: 'Categories', icon: 'pi pi-list', command: () => { navigate("catalogView/categories") } },
                { label: 'Brands', icon: 'pi pi-tags', command: () => { navigate("catalogView/brands") } }
            ]
        },
        { label: 'About', icon: 'pi pi-info-circle', command: () => { window.location.href = '/about'; } },
        { label: 'Contact', icon: 'pi pi-envelope', command: () => { window.location.href = '/contact'; } }
    ];
}

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
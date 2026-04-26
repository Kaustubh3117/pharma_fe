export const catalogs = (data) => {
    return [
        { id: 1, title: 'Products ', data: data?.products, catalogType: "products" },
        { id: 2, title: 'Popular Deals', data: data?.popular_deals, catalogType: "popular_deals" },
        { id: 3, title: 'Categories', data: data?.categories, catalogType: "categories" },
        { id: 4, title: 'Brands', data: data?.brands, catalogType: "brands" },
        { id: 5, title: 'You Might Also Like', data: data?.simple_recommendations, catalogType: "simple_recommendations" },
    ];
}


export const btnData = (catalogType, navigate) => {
    return {
        key: "1",
        label: "",
        icon: "pi pi-arrow-right",
        outlined: true,
        style: {
            backgroundColor: "#1a1a1a",
            color: "#fff",
            height: "2rem",
        },
        tooltip: "View All",
        tooltipOptions: { position: "left" },
        onClick: () => { navigate(`catalogView/${catalogType}`) }
    }
} 
import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";

export const cardContent = (item, navigate) => {
    const header = (
        <div className="product-image-wrapper">
            <img
                src={item.image}
                alt={item.image}
                className="product-image"
            />
            <div className="product-image-overlay">
                <i className="pi pi-eye" />
            </div>
        </div>
    );

    const content = (
        <div className="-mt-4 -ml-3">
            <span style={{ color: '#999', textDecoration: 'line-through' }}>₹{item.old_price}</span>
            <div className='flex justify-content-start gap-2'>
                <span className="text-lg font-weight-bold" style={{ color: '#1a7f3c' }}>₹{item.new_price}</span>
                <PrimeBadge value={`${item.discount}% OFF`} severity="warning" className="text-sm" />
            </div>
        </div>
    );

    const title = <h6 className="-mt-3 -ml-3 white-space-nowrap overflow-hidden text-overflow-ellipsis">{item.title}</h6>

    return {
        header: header,
        title: title,
        subTitle: item?.new_price ? content : undefined,
    }
}

export const catalogs = (products) => {
    return [
        { id: 1, title: 'Products ', data: products?.products },
        { id: 2, title: 'Popular Deals', data: products?.popular_deals },
        { id: 3, title: 'Categories', data: products?.categories },
        { id: 4, title: 'Brands', data: products?.brands },
        { id: 5, title: 'You Might Also Like', data: products?.simple_recommendations },
    ];
}


export const btnData = [
    {
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
        tooltipOptions: { position: "left" }
    },
];
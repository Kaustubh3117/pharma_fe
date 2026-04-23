import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";
import { PrimeButton } from "../../../shared/common/PrimeButton/PrimeButton";

export const buttonConfigs = [
    {
        label: "Details",
        icon: "pi pi-eye",
        iconPos: "left",
        severity: "success",
        style: { width: '100%' }
    },
    {
        label: "Cart",
        icon: "pi pi-shopping-cart",
        severity: "warning",
        iconPos: "left",
        style: { width: '100%', marginLeft: '0.5rem' },
        onClick: () => console.log('Add to Cart:')
    }
];



export const cardContent = (product, navigate) => {
    const header = (
        <div
            className="product-image-wrapper"
            onClick={() => {
                navigate(`productDetails/${product.id}`)
            }}
        >
            <img
                src={product.image_urls}
                alt={product.image_urls}
                className="product-image"
            />
            <div className="product-image-overlay">
                <i className="pi pi-eye" />
            </div>
        </div>
    );

    const content = (
        <>
            <div className='flex justify-content-start gap-2 mt-2 mb-2'>
                <span style={{ color: '#555', fontWeight: 600 }}>MRP:</span>
                <span style={{ color: '#999', textDecoration: 'line-through' }}>${product.old_price}</span>
                <span className="text-lg font-weight-bold" style={{ color: '#1a7f3c' }}>${product.new_price}</span>
                <PrimeBadge value={`${product.discount}% OFF`} severity="warning" className="text-sm" />
            </div>
            <p><strong>Per unit:</strong> ${product.price_per_quantity}</p>
        </>
    );
    const footer = (
        <div className='flex align-items-center justify-content-center mt-3'>
            {buttonConfigs.map((config) => (
                <PrimeButton {...config} onClick={config.label === "Details" ? () => navigate(`productDetails/${product.id}`) : config.onClick} />
            ))}
        </div>
    );

    return {
        header: header,
        title: product.title,
        subTitle: content,
        footer: footer
    }
}
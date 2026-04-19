import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";
import { PrimeButton } from "../../../shared/common/PrimeButton/PrimeButton";

//dummy data remove this after api call
export const products = [
    {
        id: 1,
        title: "Aspirin",
        image: "https://picsum.photos/300/200?random=1",
        old_price: 150,
        new_price: 99,
        discount: 34,
        price_per_quantity: 10,
        description: "Pain reliever and fever reducer",
        faqs: "Take with water. Do not exceed recommended dose.",
        product_details: "500mg tablets, 20 pack",
        category_id: 1,
        brand_id: 1,
        expiry_date: "2026-12-31",
        manufacture_date: "2024-01-15",
        drug_license_number: "DL-2024-001",
        required_prescription: "No"
    },
    {
        id: 2,
        title: "Cough Syrup",
        image: "https://picsum.photos/300/200?random=2",
        old_price: 200,
        new_price: 149,
        discount: 25,
        price_per_quantity: 15,
        description: "Effective cough suppressant",
        faqs: "Shake well before use. Take as directed.",
        product_details: "200ml bottle",
        category_id: 2,
        brand_id: 2,
        expiry_date: "2025-08-20",
        manufacture_date: "2023-08-20",
        drug_license_number: "DL-2023-005",
        required_prescription: "No"
    },
    {
        id: 3,
        title: "Amoxicillin",
        image: "https://picsum.photos/300/200?random=3",
        old_price: 350,
        new_price: 280,
        discount: 20,
        price_per_quantity: 28,
        description: "Antibiotic for bacterial infections",
        faqs: "Complete the full course. Take with or without food.",
        product_details: "500mg capsules, 10 pack",
        category_id: 3,
        brand_id: 3,
        expiry_date: "2026-06-15",
        manufacture_date: "2024-06-15",
        drug_license_number: "DL-2024-012",
        required_prescription: "Yes"
    },
    {
        id: 4,
        title: "Vitamin C",
        image: "https://picsum.photos/300/200?random=4",
        old_price: 120,
        new_price: 79,
        discount: 34,
        price_per_quantity: 8,
        description: "Immune system booster",
        faqs: "Take one tablet daily with breakfast.",
        product_details: "1000mg tablets, 30 pack",
        category_id: 4,
        brand_id: 4,
        expiry_date: "2027-03-10",
        manufacture_date: "2024-03-10",
        drug_license_number: "DL-2024-008",
        required_prescription: "No"
    }
];

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



export const cardContent = (product, handleViewDetails) => {
    const header = (
        <div
            className="product-image-wrapper"
            onClick={() => {
                handleViewDetails(product);
            }}
        >
            <img
                src={product.image}
                alt={product.title}
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
                <PrimeButton {...config} onClick={config.label === "Details" ? () => handleViewDetails(product) : config.onClick} />
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
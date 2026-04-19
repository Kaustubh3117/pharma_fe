import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { products } from './productHelper';
import { useState } from 'react';
import { ProductDetails } from '../ProductDetails/ProductDetails';

export const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setDisplayDialog(true);
    };

    const handleDialogHide = () => {
        setDisplayDialog(false);
        setSelectedProduct(null);
    };

    const buttonConfigs = [
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
    return (
        <>
            <div className="grid">
                {products.map((product) => (
                    <div key={product.id} className="col-12 md:col-6 lg:col-4 xl:col-3">
                        <div className="card">
                            <Card title={product.title}>
                                <div
                                    className="product-image-wrapper"
                                    onClick={() => handleViewDetails(product)}
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
                                <div className='flex justify-content-start gap-2 mt-2 mb-2'>
                                    <span style={{ color: '#555', fontWeight: 600 }}>Price:</span>
                                    <span style={{ color: '#999', textDecoration: 'line-through' }}>${product.old_price}</span>
                                    <span className="text-lg font-weight-bold" style={{ color: '#1a7f3c' }}>${product.new_price}</span>
                                    <Badge value={`${product.discount}% OFF`} severity="warning" className="text-sm" />
                                </div>
                                <p><strong>Per unit:</strong> ${product.price_per_quantity}</p>
                                <div className='flex align-items-center justify-content-center mt-3'>
                                    {buttonConfigs.map((config) => (
                                        <Button
                                            key={config.label}
                                            label={config.label}
                                            icon={config.icon}
                                            iconPos={config.iconPos}
                                            style={config?.style}
                                            severity={config.severity}
                                            onClick={config.label === "Details" ? () => handleViewDetails(product) : config.onClick}
                                        />
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            <ProductDetails
                product={selectedProduct}
                visible={displayDialog}
                onHide={handleDialogHide}
            />
        </>
    );
}
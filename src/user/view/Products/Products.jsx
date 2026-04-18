import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
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
    return (
        <>
            <div className="grid">
                {products.map((product) => (
                    <div key={product.id} className="col-3">
                        <div className="card">
                            <Card title={product.title}>
                                <div className="product-card">
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
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '10px', marginTop: '10px' }}>
                                        <span style={{ color: '#555', fontWeight: 600 }}>Price:</span>
                                        <span style={{ color: '#999', textDecoration: 'line-through' }}>${product.old_price}</span>
                                        <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a7f3c' }}>${product.new_price}</span>
                                        <span style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '4px 10px',
                                            borderRadius: '999px',
                                            backgroundColor: '#fff4e5',
                                            color: '#b45309',
                                            fontWeight: 700,
                                            fontSize: '0.85rem'
                                        }}>
                                            {product.discount}% OFF
                                        </span>
                                    </div>
                                    <p style={{ margin: '0 0 10px', color: '#555' }}><strong>Per unit:</strong> ${product.price_per_quantity}</p>
                                    <hr />
                                    <p><strong>Description:</strong> {product.description}</p>
                                    <p className="m-0"><small>{product.product_details}</small></p>
                                    <hr />
                                    <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                        <Button
                                            label="Details"
                                            icon="pi pi-eye"
                                            iconPos="left"
                                            style={{
                                                backgroundColor: '#90EE90',
                                                color: '#000',
                                                border: 'none',
                                                flex: 1
                                            }}
                                            onClick={() => handleViewDetails(product)}
                                        />
                                        <Button
                                            label="Cart"
                                            icon="pi pi-shopping-cart"
                                            iconPos="left"
                                            style={{
                                                backgroundColor: '#FFFF00',
                                                color: '#000',
                                                border: 'none',
                                                flex: 1
                                            }}
                                            onClick={() => console.log('Add to Cart:', product.id)}
                                        />
                                    </div>
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
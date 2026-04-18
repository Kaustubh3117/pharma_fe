import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';

export const ProductDetails = ({ product, visible, onHide }) => {
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header={product.title}
            modal
            style={{ width: '90vw', maxWidth: '1000px' }}
            maximizable
            className="product-details-dialog"
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '20px' }}>
                {/* Product Image */}
                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }}
                    />
                </div>

                {/* Product Info */}
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '1.1em', color: '#666' }}>
                            <strong>Category ID:</strong> {product.category_id} | <strong>Brand ID:</strong> {product.brand_id}
                        </p>
                    </div>

                    {/* Pricing Section */}
                    <div style={{
                        backgroundColor: '#f5f5f5',
                        padding: '15px',
                        borderRadius: '8px',
                        marginBottom: '20px'
                    }}>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Old Price:</strong>
                            <span style={{ textDecoration: 'line-through', marginLeft: '10px', color: '#999' }}>
                                ${product.old_price}
                            </span>
                        </p>
                        <p style={{ fontSize: '2em', color: '#28a745', marginBottom: '10px' }}>
                            <strong>New Price:</strong> ${product.new_price}
                        </p>
                        <p>
                            <strong>Discount:</strong>
                            <span style={{
                                backgroundColor: '#ff6b6b',
                                color: '#fff',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                marginLeft: '10px',
                                fontWeight: 'bold'
                            }}>
                                {product.discount}%
                            </span>
                        </p>
                        <p style={{ marginTop: '10px' }}>
                            <strong>Price Per Quantity:</strong> ${product.price_per_quantity}
                        </p>
                    </div>

                    {/* Description */}
                    <div style={{ marginBottom: '20px' }}>
                        <p>
                            <strong>Description:</strong>
                        </p>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            {product.description}
                        </p>
                    </div>

                    {/* Quantity Selector */}
                    <div style={{ marginBottom: '20px' }}>
                        <p><strong>Quantity:</strong></p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Button
                                icon="pi pi-minus"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                style={{ width: '40px', height: '40px', padding: 0 }}
                            />
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                style={{
                                    width: '60px',
                                    textAlign: 'center',
                                    padding: '8px',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                }}
                            />
                            <Button
                                icon="pi pi-plus"
                                onClick={() => setQuantity(quantity + 1)}
                                style={{ width: '40px', height: '40px', padding: 0 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Details Section */}
            <div style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h4 style={{ marginTop: 0 }}>Order Details</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    <div>
                        <p><strong>Expiry Date:</strong></p>
                        <p style={{ color: '#28a745', fontWeight: 'bold' }}>{product.expiry_date}</p>
                    </div>
                    <div>
                        <p><strong>Manufacture Date:</strong></p>
                        <p>{product.manufacture_date}</p>
                    </div>
                    <div>
                        <p><strong>Requires Prescription:</strong></p>
                        <p style={{
                            color: product.required_prescription === 'Yes' ? '#ff6b6b' : '#28a745',
                            fontWeight: 'bold'
                        }}>
                            {product.required_prescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Additional Info Section */}
            <div style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h4 style={{ marginTop: 0 }}>Additional Information</h4>
                <div>
                    <p>
                        <strong>Product Details:</strong>
                    </p>
                    <p style={{ color: '#666' }}>{product.product_details}</p>
                </div>
                <div>
                    <p>
                        <strong>FAQs:</strong>
                    </p>
                    <p style={{ color: '#666' }}>{product.faqs}</p>
                </div>
                <div>
                    <p>
                        <strong>Drug License Number:</strong> {product.drug_license_number}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end',
                borderTop: '1px solid #ddd',
                paddingTop: '20px'
            }}>
                <Button
                    label="Add to Cart"
                    icon="pi pi-shopping-cart"
                    style={{
                        backgroundColor: '#FFFF00',
                        color: '#000',
                        border: 'none',
                        padding: '10px 30px'
                    }}
                    onClick={() => console.log(`Added ${quantity} of ${product.title} to cart`)}
                />
                <Button
                    label="Close"
                    icon="pi pi-times"
                    onClick={onHide}
                />
            </div>
        </Dialog>
    );
};

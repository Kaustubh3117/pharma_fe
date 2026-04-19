import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { PrimeBadge } from '../../../shared/common/PrimeBadge/PrimeBadge';
import { InputNumber } from 'primereact/inputnumber';

export const ProductDetails = ({ product, visible, onHide }) => {
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    const sectionStyle = {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
    }

    const footer = (
        <div className='flex align-items-center justify-content-end mt-3 gap-3'>
            <Button
                label="Add to Cart"
                icon="pi pi-shopping-cart"
                onClick={() => console.log(`Added ${quantity} of ${product.title} to cart`)}
            />
            <Button
                label="Close"
                icon="pi pi-times"
                onClick={onHide}
            />
        </div>
    );

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header={product.title}
            modal
            style={{ width: '90vw', maxWidth: '1000px' }}
            maximizable
            footer={footer}
        >
            <div className='grid mb-4'>
                {/* Product Image */}
                <div className='col-12 md:col-6'>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-22rem"
                    />
                </div>

                {/* Product Info */}
                <div className='col-12 md:col-6'>
                    <p className='-mt-1'>
                        <strong>Category ID:</strong> {product.category_id} | <strong>Brand ID:</strong> {product.brand_id}
                    </p>

                    {/* Pricing Section */}
                    <div style={sectionStyle}>
                        <strong>Old Price:</strong>
                        <span className="line-through ml-2 text-700">
                            ${product.old_price}
                        </span>
                        <p style={{ fontSize: '2em', color: '#28a745', marginBottom: '10px' }}>
                            <strong>New Price:</strong> ${product.new_price}
                        </p>
                        <PrimeBadge value={`${product.discount}% OFF`} severity="warning" className="text-sm" />
                        <p className='mt-3'>
                            <strong>Price Per Quantity:</strong> ${product.price_per_quantity}
                        </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex-auto">
                        <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Quantity:</label>
                        <InputNumber
                            inputId="horizontal-buttons"
                            value={quantity}
                            onValueChange={(e) => setQuantity(e.value)}
                            showButtons
                            buttonLayout="horizontal"
                            decrementButtonClassName="p-button-primary"
                            incrementButtonClassName="p-button-primary"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                            inputClassName="w-3rem"
                        />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div style={sectionStyle}>
                <p>
                    <strong>Description:</strong>
                </p>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                    {product.description}
                </p>
            </div>

            {/* Order Details Section */}
            <div style={sectionStyle}>
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
            <div style={sectionStyle}>
                <p>
                    <strong>Product Details:</strong>
                </p>
                <p style={{ color: '#666' }}>{product.product_details}</p>
                <p>
                    <strong>FAQs:</strong>
                </p>
                <p style={{ color: '#666' }}>{product.faqs}</p>
            </div>
        </Dialog>
    );
};

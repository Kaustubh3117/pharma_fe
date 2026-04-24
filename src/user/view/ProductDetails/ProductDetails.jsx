import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';
import { PrimeBadge } from '../../../shared/common/PrimeBadge/PrimeBadge';
import { InputNumber } from 'primereact/inputnumber';
import { useParams } from 'react-router-dom';
import ImageSwitcher from './ImageSwitcher/ImageSwitcher';
import { getProductById } from '../../store/actions/productAction/productAction';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const product = useSelector((state) => state.user.productData.productDetailsById);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [id, dispatch]);

    if (!product) return (<h1>No Product Found</h1>);

    const sectionStyle = {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
    }

    const btnCollection = (
        <div className='flex align-items-center justify-content-start mt-3 gap-3'>
            <Button
                label="Add to Cart"
                icon="pi pi-shopping-cart"
                outlined={true}
                onClick={() => console.log(`Added ${quantity} of ${product.title} to cart`)}
            />
            <Button
                label="Buy Now"
                icon="pi pi-credit-card"
                onClick={() => console.log(`Buying ${quantity} of ${product.title}`)}
            />
        </div>
    );

    return (
        <>
            <div className='grid mt-2'>
                {/* Product Image */}
                <div className='col-12 md:col-6'>
                    <ImageSwitcher images={product.image_urls} />
                </div>

                {/* Product Info */}
                <div className='col-12 md:col-6'>
                    <h2>{product.title}</h2>
                    <p className='-mt-1'>
                        <strong>Category ID:</strong> {product.category_id} | <strong>Brand ID:</strong> {product.brand_id}
                    </p>
                    {/* Pricing Section */}
                    <div style={sectionStyle}>

                        <PrimeBadge value={"OFFER"} severity="warning" className="text-sm" />

                        <div className='flex justify-content-left align-items-center gap-2 mb-2 mt-2'>
                            <div className="font-bold" style={{ fontSize: '2em', color: '#28a745' }}>
                                ₹{product.discount}% OFF
                            </div>
                            <span className="line-through ml-2 text-700" style={{ fontSize: '2em', color: '#28a745' }}>
                                ₹{product.old_price}
                            </span>
                            <span className='font-bold' style={{ fontSize: '2em', color: '#28a745' }}>
                                ₹{product.new_price}
                            </span>
                        </div>
                        {/* Quantity Selector */}
                        <div className="flex-auto">
                            <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Quantity:</label>
                            <InputNumber
                                inputId="horizontal-buttons"
                                value={quantity}
                                onValueChange={(e) => setQuantity(e.value)}
                                showButtons
                                min={0}
                                buttonLayout="horizontal"
                                decrementButtonClassName="p-button-primary"
                                incrementButtonClassName="p-button-primary"
                                incrementButtonIcon="pi pi-plus"
                                decrementButtonIcon="pi pi-minus"
                                inputClassName="w-3rem"
                            />
                        </div>
                        <p className='mt-3 -mb-2' style={{ color: "#9e9b9b" }}>
                            <strong>Price Per Quantity:</strong> ₹{product.price_per_quantity}
                        </p>
                    </div>
                    {btnCollection}
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
        </>
    );
};

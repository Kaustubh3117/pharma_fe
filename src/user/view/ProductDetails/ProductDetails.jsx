import { useEffect } from 'react';
import { PrimeBadge } from '../../../shared/common/PrimeBadge/PrimeBadge';
import { useNavigate, useParams } from 'react-router-dom';
import ImageSwitcher from './ImageSwitcher/ImageSwitcher';
import { getProductById } from '../../store/actions/productAction/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { PrimeButton } from '../../../shared/common/PrimeButton/PrimeButton';
import { addItemToCart } from '../../store/actions/cartAction/cartAction';

export const ProductDetails = () => {
    const product = useSelector((state) => state.user.productData.productDetailsById);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [id, dispatch]);

    if (!product) return (<h1>No Product Found</h1>);

    const addProductTocart = () => {
        //here we will always send quantity as  static 1 dont change it
        const payload = {
            user_id: 1,
            product_id: Math.floor(id),
            quantity: 1,
        }

        dispatch(addItemToCart(payload))
    }

    const sectionStyle = {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
    }

    const btnData = [
        { key: "1", label: "Add to Cart", icon: "pi pi-shopping-cart", iconPos: "left", onClick: () => addProductTocart(), outlined: true, disabled: !product.quantity },
        { key: "2", label: "Buy Now", icon: "pi pi-credit-card", iconPos: "left", onClick: () => navigate("/checkout"), outlined: false, disabled: !product.quantity },
    ];

    const btnCollection = (
        <div className='flex align-items-start justify-content-start mt-3 gap-3'>
            {btnData.map((btn, index) => (
                <PrimeButton key={index} {...btn} />
            ))}
        </div>
    );

    return (
        <>
            <div className='grid mt-2'>
                {/* Product Image */}
                <div className='col-12 md:col-4'>
                    <ImageSwitcher images={product.image_urls} />
                </div>

                {/* Product Info */}
                <div className='col-12 md:col-8'>
                    <h2>{product.title}</h2>
                    <p className='-mt-1'>
                        <strong>Category ID:</strong> {product.category_id} | <strong>Brand ID:</strong> {product.brand_id}
                    </p>
                    {/* Pricing Section */}
                    <div style={sectionStyle}>

                        <PrimeBadge value={"OFFER"} severity="warning" className="text-sm" />

                        <div className='flex justify-content-left align-items-center font-bold text-xl sm:text-4xl gap-2 mb-2 mt-2'>
                            <div style={{ color: '#28a745' }}>
                                ₹{product.discount}% OFF
                            </div>
                            <span className="line-through ml-2" style={{ color: "#9e9b9b" }}>
                                ₹{product.old_price}
                            </span>
                            <span className='ml-2' style={{ color: '#28a745' }}>
                                ₹{product.new_price}
                            </span>
                        </div>
                        <p className='mt-3 -mb-2' style={{ color: "#9e9b9b" }}>
                            <strong>Price Per Quantity:</strong> ₹{product.price_per_quantity}
                        </p>
                        <p className="text-lg font-weight-bold ml-2" style={product.quantity ? { color: '#1a7f3c' } : { color: '#d51616' }}>{product.quantity ? "In Stock" : "Out of Stock"}</p>

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

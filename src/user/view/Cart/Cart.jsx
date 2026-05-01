import React from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { PrimeCard } from "../../../shared/common/PrimeCard/PrimeCard";
import { Message } from "primereact/message";
import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";

export function Cart() {
    const products = [
        { id: 1, name: "Paracetamol 500mg", price: 50, qty: 2 },
        { id: 2, name: "Vitamin C Tablets", price: 120, qty: 1 },
    ];

    const subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);

    const cardContent = (product) => (
        <div className="grid">
            <div className="col-3">
                <img
                    src={"https://picsum.photos/300/200?random=70"}
                    alt={"https://picsum.photos/300/200?random=70"}
                    className="product-image"
                    style={{ width: "160px", height: "100px" }}
                />
                <InputNumber
                    value={product.qty}
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    min={0}
                    className="custom-inputnumber mt-2"
                />
            </div>
            <div className="col-4 text-center">

                <h4>{product.name}</h4>
                <div className="">
                    <PrimeBadge value={`50% OFF`} severity="warning" className="text-sm" />
                    <span style={{ color: '#999', textDecoration: 'line-through' }}>₹10</span>
                    <span className="text-lg font-weight-bold" style={{ color: '#1a7f3c' }}>₹20</span>
                </div>
                <p>Delivered By Mon May 5 </p>
            </div >
            <div className="col-2 flex align-items-center -mr-0">
            </div>
        </div >
    )

    const productFooter = (
        <div className="grid">
            <div className="col">
                <Button label="Buy Now" className="p-button-success w-full" />
            </div>
            <div className="col">
                <Button icon="pi pi-trash" label="Remove" className="p-button-danger w-full" />
            </div>
        </div>
    )

    // subtotal conent
    const subTotalCardContent = (
        <>
            <div className="flex justify-between mb-2">
                <span>Price</span>
                <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span>₹{(subtotal * 0.05).toFixed(2)}</span>
            </div>
            <Message
                severity="success"
                text={`Total Amount: ₹${(subtotal * 1.05).toFixed(2)}`}
                className="w-full mt-4 -mb-4"
            />
        </>
    )

    const subTotalFooter = (
        <>
            <div className="border-top-1 border-dashed border-gray-300 my-3"></div>
            <Button label="Place Order" className="p-button-success mt-2 w-full" />
        </>
    )

    const subTotalTitle = (
        <>
            <h3>Price Details</h3>
            <div className="border-top-1 border-dashed border-gray-300 my-3"></div>
        </>
    )

    return (
        <div className="grid">
            {/* left col */}
            <div className="col-8">
                <div>
                    {products.map((product, index) => (
                        <PrimeCard
                            key={product.id}
                            className="mt-2"
                            content={cardContent(product)}
                            footer={productFooter}
                        />
                    ))}
                </div>
            </div>

            {/* left col */}
            <div className="col-4 mt-2">
                <PrimeCard title={subTotalTitle} content={subTotalCardContent} footer={subTotalFooter} />
            </div>
        </div>
    );
}

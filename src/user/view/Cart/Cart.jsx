import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Chip } from 'primereact/chip'
import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";
import "../Cart/cartStyle.css"

export function Cart() {
    const [quantity, setQuantity] = useState(2)
    const products = [
        { id: 1, name: "Paracetamol 500mg", price: 50, qty: 2 },
        { id: 2, name: "Vitamin C Tablets", price: 120, qty: 1 },
    ];

    const subtotal = products.reduce((sum, p) => sum + p.price * p.qty, 0);
    /* product card  */
    const productCardContent = (product) => (
        <div className="grid">
            <div className="col-4 sm:col-3">
                <img
                    src={"https://picsum.photos/300/200?random=70"}
                    alt={"https://picsum.photos/300/200?random=70"}
                    className="responsive-img"
                />

            </div>
            <div className="col-1 sm:col-2"></div>
            <div className="col-6 sm:col-4 -mt-4 sm:mt-0">
                <h4>{product.name}</h4>
                <div>
                    <PrimeBadge value={`50% OFF`} severity="warning" className="text-sm" />
                    <span className="ml-2" style={{ color: '#999', textDecoration: 'line-through' }}>₹10</span>
                    <span className="text-lg font-weight-bold ml-2" style={{ color: '#1a7f3c' }}>₹20</span>
                </div>
                <InputNumber
                    value={quantity}
                    onValueChange={(e) => setQuantity(e.value)}
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    min={0}
                    className="custom-inputnumber mt-2"
                />
                <p>Delivered By Mon May 5 </p>
            </div >
        </div >
    )

    const productFooter = (
        <div className="grid">
            <div className="col">
                <Button label="Buy Now" text raised className="w-full" />
            </div>
            <div className="col">
                <Button severity="secondary" className="w-full" label="Remove" text raised />
            </div>

        </div>
    )
    /* end of product conent */

    // subtotal content
    const subTotalCardContent = (
        <>
            <div className="flex justify-between mb-2 gap-2">
                <span>Price:</span>
                <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 gap-2">
                <span>Discount: </span>
                <span>₹{(subtotal * 0.05).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 gap-2">
                <span>Platform Fees: </span>
                <span>₹{subtotal}</span>
            </div>
        </>
    )

    const subTotalFooter = (
        <div className="flex align-items-center sm:static fixed bottom-0 mt-2 left-0 right-0 z-5">
            <Chip label={`Total Amount: ₹${(subtotal * 1.05).toFixed(2)}`} className="border-noround w-full h-3rem" />
            <Button
                label="Place Order"
                className="p-button-success border-noround h-3rem w-8"
            />
        </div>
    )

    const subTotalTitle = (
        <h2 className="-mt-1">Price Details</h2>
    )

    return (
        <div className="grid">
            {/* left col */}
            <div className="col-12 sm:col-8">
                {products.map((product, index) => (
                    <div className="shadow-2 border-round-md mt-2">
                        <div className="p-2">
                            {productCardContent(product)}
                            {productFooter}
                        </div>
                    </div>
                ))}
            </div>

            {/* left col */}
            <div className="col-12 sm:col-4 mt-2">
                <div className="shadow-2 border-round-md">
                    <div className="p-2">
                        {subTotalTitle}
                        {subTotalCardContent}
                        {subTotalFooter}
                    </div>
                </div>
            </div>
        </div>
    );
}

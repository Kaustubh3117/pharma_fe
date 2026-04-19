import { useState } from 'react';
import { cardContent, products } from './productHelper';

//All Shared Imports
import { ProductDetails } from '../ProductDetails/ProductDetails';
import { PrimeCard } from '../../../shared/common/PrimeCard/PrimeCard';

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
                {products.map((product) => {
                    const content = cardContent(product, handleViewDetails);
                    return (
                        <div key={product.id} className="col-12 md:col-6 lg:col-4 xl:col-3">
                            <PrimeCard header={content.header} title={content.title} subTitle={content.subTitle} content={content.content} footer={content.footer} />
                        </div>
                    );
                })}
            </div>
            <ProductDetails
                product={selectedProduct}
                visible={displayDialog}
                onHide={handleDialogHide}
            />
        </>
    );
};
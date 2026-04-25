import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardContent } from './catalogHelper';
import { Button } from 'primereact/button';

// Shared Imports
import { PrimeCard } from '../../../shared/common/PrimeCard/PrimeCard';
import { getCombinedProductDetails } from '../../store/actions/productAction/productAction';
import { HorizontalScroller } from '../../common/Scoller/HorizontalScroller';

export const Catalog = () => {
    const products = useSelector((state) => state.user.productData.combinedProductDetails);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCombinedProductDetails());
    }, [dispatch]);

    // Generic card builder
    const buildCards = (items, type) =>
        items?.map((item) => {
            const content = cardContent(item, navigate);
            return (
                <div
                    key={item.id}
                    onClick={() => navigate(`productDetails/${item.id}`)}
                    className="col-12 md:col-6 lg:col-4 xl:col-3 cursor-pointer w-5 md:w-2 lg:w-2 xl:w-2"
                >
                    <PrimeCard
                        header={content.header}
                        title={content.title}
                        subTitle={content.subTitle}
                        content={content.content}
                        footer={content.footer}
                    />
                </div>
            );
        });

    // Config-driven catalogs
    const catalogs = [
        { id: 1, title: 'View All Products', data: products?.products, type: 'product' },
        { id: 2, title: 'View All Categories', data: products?.categories, type: 'category' },
        { id: 3, title: 'View All Brands', data: products?.brands, type: 'brand' },
        { id: 4, title: 'View All Popular Deals', data: products?.popular_deals, type: 'offer' },
        { id: 5, title: 'You Might Also Like', data: products?.simple_recommendations, type: 'combo' },
    ];

    return (
        <>
            {catalogs.map((catalog) => (
                <section key={catalog.id} className="p-m-4">
                    <div className="p-d-flex p-jc-end p-mb-3">
                        <Button label={catalog.title} className="p-button-outlined" />
                    </div>
                    <HorizontalScroller content={buildCards(catalog.data, catalog.type)} />
                </section>
            ))}
        </>
    );
};

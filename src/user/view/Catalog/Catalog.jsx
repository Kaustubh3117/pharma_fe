import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardContent, catalogs, btnData } from './catalogHelper';

// Shared Imports
import { PrimeCard } from '../../../shared/common/PrimeCard/PrimeCard';
import { getCombinedProductDetails } from '../../store/actions/productAction/productAction';
import { HorizontalScroller } from '../../common/Scoller/HorizontalScroller';
import { PrimeButton } from '../../../shared/common/PrimeButton/PrimeButton';

export const Catalog = () => {
    const products = useSelector((state) => state.user.productData.combinedProductDetails);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCombinedProductDetails());
    }, [dispatch]);

    // Generic card builder
    const buildCards = (items) =>
        items?.map((item) => {
            const content = cardContent(item, navigate);
            return (
                <div
                    key={item.id}
                    onClick={() => navigate(`productDetails/${item.id}`)}
                    className="col-12 md:col-6 lg:col-4 xl:col-3 cursor-pointer w-8 md:w-2 lg:w-2 xl:w-2"
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

    const catalogsData = catalogs(products);

    return (
        <>
            {catalogsData.map((catalog) => (
                <section key={catalog.id} className="p-3 mt-4" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <h3 className="m-0">{catalog.title}</h3>
                        <PrimeButton {...btnData[0]} />
                    </div>
                    <HorizontalScroller content={buildCards(catalog.data)} />
                </section>
            ))}
        </>
    );
};

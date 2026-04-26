import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { catalogs, btnData } from './catalogHelper';
import { getCombinedCatalog } from '../../store/actions/catalogAction/catalogAction';

// Shared Imports
import { HorizontalScroller } from '../../common/Scoller/HorizontalScroller';
import { PrimeButton } from '../../../shared/common/PrimeButton/PrimeButton';
import { CardBuilder } from '../../common/CardBuilder/CardBuilder';
export const Catalog = () => {
    const combinedData = useSelector((state) => state.user.catalog.combinedCatalog);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCombinedCatalog());
    }, [dispatch]);

    const catalogsData = catalogs(combinedData);

    return (
        <>
            {catalogsData.map((catalog) => (
                <section key={catalog.id} className="pt-3 pb-3 mt-4" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                    <div className="flex justify-content-between align-items-center mb-3 ml-2 mr-2">
                        <h3 className="m-0">{catalog.title}</h3>
                        <PrimeButton {...btnData(catalog.catalogType, navigate)} />
                    </div>
                    <HorizontalScroller content={<CardBuilder items={catalog.data} />} />
                </section>
            ))}
        </>
    );
};

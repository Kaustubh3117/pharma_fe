import { cardContent } from './productHelper';

//All Shared Imports
import { PrimeCard } from '../../../shared/common/PrimeCard/PrimeCard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCombinedProductDetails } from '../../store/actions/productAction/productAction';

export const Products = () => {
    const products = useSelector((state) => state.user.productData.combinedProductDetails);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCombinedProductDetails())
    }, [dispatch])

    return (
        <>
            <div className="grid">
                {products?.products?.map((product) => {
                    const content = cardContent(product, navigate);
                    return (
                        <div key={product.id} className="col-12 md:col-6 lg:col-4 xl:col-3">
                            <PrimeCard header={content.header} title={content.title} subTitle={content.subTitle} content={content.content} footer={content.footer} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
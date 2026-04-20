import { cardContent, products } from './productHelper';

//All Shared Imports
import { PrimeCard } from '../../../shared/common/PrimeCard/PrimeCard';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="grid">
                {products.map((product) => {
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
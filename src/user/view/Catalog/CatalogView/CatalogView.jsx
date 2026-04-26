import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCatalog, getProductsByCatalogId } from "../../../store/actions/catalogAction/catalogAction";
import { PrimeCard } from "../../../../shared/common/PrimeCard/PrimeCard";
import { cardContent } from "../catalogHelper";

export const CatalogView = () => {
    const catalog = useSelector((state) => state.user.catalog.catalog)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { catalogType, id } = useParams();

    useEffect(() => {
        if (["brands", "categories"].includes(catalogType) && id) {
            dispatch(getProductsByCatalogId({ category_type: catalogType, id: id }))
        }
        else {
            dispatch(getCatalog(catalogType))
        }
    }, [dispatch, catalogType, id])

    return (
        <>
            <h1>All {catalogType}</h1>
            <div className="grid">
                {catalog?.[catalogType]?.map((item) => {
                    const content = cardContent(item);
                    return (
                        <div
                            key={item.id}
                            onClick={() => navigate(item.url)}
                            className="col-12 sm:col-3 lg:col-3 xl:col-4 cursor-pointer w-full sm:w-4 lg:w-2 xl:w-2"
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
                })}
            </div>
        </>
    )
}
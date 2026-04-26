import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardBuilder } from "../../../common/CardBuilder/CardBuilder";
import { getCatalog, getProductsByCatalogId } from "../../../store/actions/catalogAction/catalogAction";

export const CatalogView = () => {
    const catalog = useSelector((state) => state.user.catalog.catalog)
    const dispatch = useDispatch()
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
            <div className="flex justify-content-start align-items-start">
                <CardBuilder items={catalog?.[catalogType]} />
            </div>
        </>
    )
}
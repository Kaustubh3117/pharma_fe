import { GET_CATALOG, GET_COMBINED_CATALOG, GET_PRODUCTS_BY_CATALOG_ID, } from "../../actionTypes/catalogConstants/catalogConstants"

export const getCombinedCatalog = () => {
    return {
        type: GET_COMBINED_CATALOG,
    };
};

export const getCatalog = (catalogType) => {
    return {
        type: GET_CATALOG,
        payload: catalogType
    }
}

export const getProductsByCatalogId = (payload) => {
    return {
        type: GET_PRODUCTS_BY_CATALOG_ID,
        payload: payload
    }
} 
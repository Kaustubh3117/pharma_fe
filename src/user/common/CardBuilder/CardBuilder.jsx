import { useNavigate } from "react-router-dom";

import { cardContent } from "./cardBuilderHelper";

import { PrimeCard } from "../../../shared/common/PrimeCard/PrimeCard";

export const CardBuilder = ({ items }) => {
    const navigate = useNavigate()

    return (
        <>
            {items?.map((item) => {
                const content = cardContent(item);
                return (
                    <div
                        key={item.id}
                        onClick={() => navigate(item.url)}
                        className="col-12 md:col-6 lg:col-4 xl:col-3 cursor-pointer w-full sm:w-4 lg:w-2 xl:w-2"
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
        </>
    )
}
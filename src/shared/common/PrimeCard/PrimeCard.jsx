import { Card } from 'primereact/card';

export const PrimeCard = ({ header, title, subTitle, content, footer, className, style }) => {
    return (
        <div className="card" style={style}>
            <Card title={title || ""} subTitle={subTitle || ""} footer={footer} header={header} className={className || ""}>
                {content}
            </Card>
        </div>
    );
};
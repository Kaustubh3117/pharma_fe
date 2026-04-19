import { Card } from 'primereact/card';

export const PrimeCard = ({ header, title, subTitle, content, footer, className }) => {
    return (
        <div className="card">
            <Card title={title || ""} subTitle={subTitle || ""} footer={footer} header={header} className={className || ""}>
                {content}
            </Card>
        </div>
    );
};
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ServiceCard = (props: any) => {
    const { icon, title, description, color } = props;
    return (
        <Card
            className="service-card"
            style={{
                marginBottom: '24px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                height: '100%',
                padding: '24px',
                backgroundColor: color ?? '#fff',
                // maxWidth: '500px',
            }}
            hoverable
        >
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>
                {icon}
            </div>
            <Title level={4} style={{ marginBottom: '12px', }}>{title}</Title>
            <Paragraph style={{ color: '#555', marginBottom: 0 }}>
                {description}
            </Paragraph>
        </Card>
    );
};

export default ServiceCard;
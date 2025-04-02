import React from 'react';
import { Row, Col, Typography, Button, Card, Space, Divider } from 'antd';
import {
    AimOutlined,
    FileTextOutlined,
    LineChartOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const ServiceCard = (props: any) => {
    const { icon, title, description } = props;
    return (
        <Card
            className="service-card"
            style={{
                marginBottom: '24px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                height: '100%',
                // maxWidth: '50px',
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

const ServicesSectionUI = () => {
    const services = [
        {
            icon: <AimOutlined />,
            title: 'Business Strategy Development',
            description: 'Achieve clarity and direction with our custom-designed strategies. We analyze your goals, market trends, and competition to create a roadmap for sustained growth.'
        },
        {
            icon: <FileTextOutlined />,
            title: 'Operational Excellence',
            description: 'Streamline your processes, improve efficiency, and reduce costs. Our team helps you implement systems that drive seamless operations and measurable results.'
        },
        {
            icon: <LineChartOutlined />,
            title: 'Financial Advisory',
            description: 'Optimize your financial performance with expert insights and planning. From budgeting to investment strategies, we ensure your business remains financially healthy.'
        }
    ];

    return (
        <Space style={{
            margin: '100px',
            display: 'flex',
            padding: '24px',
            backgroundColor: '#f5f7f9',
        }}>
            <Row gutter={[48, 48]}>
                <Col
                    xs={24}
                    md={12}
                    lg={12}
                    style={{
                        position: 'sticky',
                        top: '48px',
                        height: '100%'
                    }}
                >
                    <div style={{ paddingTop: '24px' }}>
                        <Text style={{
                            color: '#000',
                            textTransform: 'uppercase',
                            fontWeight: '300',
                            display: 'block',
                            textDecoration: 'underline', 
                            textUnderlineOffset: '10px'
                        }}>
                            WHAT WE DO
                        </Text>
                        <Title level={2} style={{
                            fontSize: '40px',
                            marginTop:10, 
                            lineHeight: '1.2',
                        }}>
                            Our Services
                        </Title>
                        <Paragraph style={{
                            fontSize: '16px',
                            fontWeight: '400',
                            color: '#5c5c5c',
                            marginBottom: '32px'
                        }}>
                            Our range of services is crafted to deliver strategic insights, and foster
                            sustainable growth for businesses across various industries.
                        </Paragraph>

                        <Button
                            type="primary"
                            style={{
                                backgroundColor: '#1a1a1a',
                                border: 'none',
                                borderRadius: '4px',
                                height: '48px',
                                padding: '0 24px'
                            }}
                        >
                            View All Services
                        </Button>
                    </div>
                </Col>

                {/* Right Side - Cards with Hover Effect */}
                <Col xs={24} md={12} lg={12}>
                    <Space direction="vertical" size={24} style={{ width: '100%' }}>
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </Space>
                </Col>
            </Row>

            {/* CSS for hover effect */}
            <style jsx>{`
        .service-card:hover {
          background-color: #f0f5ff;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
      `}</style>
        </Space >
    );
};

export default ServicesSectionUI;
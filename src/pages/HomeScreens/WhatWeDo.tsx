import { Row, Col, Typography, Button, Space, Grid } from 'antd';
import ServiceCard from '../../components/ServiceCard';
import { services } from '../../Utils/appContants';

const { Title, Paragraph, Text } = Typography;

const ServicesSectionUI = () => {
    const screens = Grid.useBreakpoint();;
    return (
        <Space style={{
            display: 'flex',
            padding: screens.lg ? '100px 250px' : '100px',
            justifyContent: 'center',
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
                        marginTop: 10,
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
                </Col>

                {/* Right Side - Cards with Hover Effect */}
                <Col xs={24} md={12} lg={12}>
                    <Space direction="vertical" size={24} style={{ width: '100%' }}>
                        {services.map(({ title, description, Icon }, index) => (
                            <ServiceCard
                                key={index}
                                icon={<Icon />}
                                title={title}
                                description={description}
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
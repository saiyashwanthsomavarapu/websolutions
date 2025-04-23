import { Row, Col, Typography, Space, Grid } from 'antd';
import {
    AppstoreOutlined,
    DatabaseOutlined,
    PlusCircleOutlined,
    GlobalOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const CustomComponent = () => {
    const screens = Grid.useBreakpoint();;
    const services = [
        {
            icon: <AppstoreOutlined style={{ fontSize: '32px', color: '#fff' }} />,
            title: 'Custom Software',
            description: 'We help digital companies to volume their self-interest.'
        },
        {
            icon: <DatabaseOutlined style={{ fontSize: '32px', color: '#fff' }} />,
            title: 'ERP Solutions',
            description: 'Strategy is a forward-looking plan for your brand\'s behavior.'
        },
        {
            icon: <PlusCircleOutlined style={{ fontSize: '32px', color: '#fff' }} />,
            title: 'SEO SMO',
            description: 'Audits help your company to have the unique plan for your brand.'
        },
        {
            icon: <GlobalOutlined style={{ fontSize: '32px', color: '#fff' }} />,
            title: 'Website/App Design',
            description: 'UI/UX design gives the appearance above your brand\'s behavior.'
        }
    ];

    return (
        <Space style={{
            display: "flex",
            padding: screens.lg || screens.md ? "120px" : "50px",
            justifyContent: "center",
            backgroundColor: "#0d2a4b",
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <Row gutter={[48, 48]}>
                    <Col xs={24} md={24} lg={12}>
                        <Space direction="vertical" size="small">
                            <Text style={{
                                color: '#fff',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                marginBottom: '8px',
                                display: 'block'
                            }}>
                                WHAT WE DO
                            </Text>
                            <Title level={1} style={{
                                color: '#fff',
                                fontSize: '48px',
                                fontWeight: 'bold',
                                lineHeight: '1.1',
                                margin: '16px 0 0 0'
                            }}>
                                We provide more than ever services to achieve business goal
                            </Title>
                        </Space>
                    </Col>

                    <Col xs={24} md={24} lg={12} >
                        <div style={{ marginBottom: '24px' }}>
                            <Paragraph style={{
                                color: '#fff',
                                fontSize: '16px',
                                marginBottom: '48px'
                            }}>
                                Our clients describe us as a product team which <span style={{ fontWeight: 'bold' }}>creates amazing UI/UX</span> experiences, by crafting top-notch user experience.
                            </Paragraph>
                        </div>

                        <Row gutter={[32, 40]}>
                            {services.map((service, index) => (
                                <Col xs={24} sm={12} key={index}>
                                    <div style={{ marginBottom: '16px' }}>
                                        {service.icon}
                                    </div>
                                    <Title level={4} style={{
                                        color: '#fff',
                                        marginTop: '16px',
                                        marginBottom: '8px',
                                        fontSize: '20px'
                                    }}>
                                        {service.title}
                                    </Title>
                                    <Paragraph style={{
                                        color: '#999',
                                        fontSize: '14px'
                                    }}>
                                        {service.description}
                                    </Paragraph>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </Space >
    );
};

export default CustomComponent;
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
            icon: <AppstoreOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'Custom Software',
            description: 'We help digital companies to volume their self-interest.'
        },
        {
            icon: <DatabaseOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'ERP Solutions',
            description: 'Strategy is a forward-looking plan for your brand\'s behavior.'
        },
        {
            icon: <PlusCircleOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'SEO SMO',
            description: 'Audits help your company to have the unique plan for your brand.'
        },
        {
            icon: <GlobalOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'Website/App Design',
            description: 'UI/UX design gives the appearance above your brand\'s behavior.'
        }
    ];

    return (
        <Space style={{
            display: "flex",
            padding: screens.lg || screens.md ? "120px" : "50px",
            justifyContent: "center",
            backgroundColor: "#fff",
        }}>
            <Row gutter={[48, 48]}>
                <Col xs={24} md={12} lg={12}>
                    <Space direction="vertical" size="small">
                        <Text style={{
                            color: "#000",
                            textTransform: "uppercase",
                            fontWeight: "300",
                            display: "block",
                            textDecoration: "underline",
                            textUnderlineOffset: "10px",
                        }}>
                            WHAT WE DO
                        </Text>
                        <Title level={2}
                            style={{
                                fontSize: screens.lg ? "2.5em" : "2em",
                                marginTop: 10,
                                lineHeight: "1.2",
                            }}>
                            We provide more than ever services to achieve business goal
                        </Title>
                    </Space>
                </Col>

                <Col xs={24} md={12} lg={12} >
                    <div style={{ marginBottom: '24px' }}>
                        <Paragraph style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#5c5c5c",
                            marginBottom: "32px",
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
                                    color: '#000',
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
        </Space >
    );
};

export default CustomComponent;
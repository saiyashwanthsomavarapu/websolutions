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
            title: 'Social Media Optimisation (SMO)',
            description: 'Enhance your brand\'s online presence by optimising your social media profiles for better visibility and engagement.'
        },
        {
            icon: <DatabaseOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'Social Media Marketing (SMM)',
            description: 'Engage your audience and drive conversions through strategic social media campaigns'
        },
        {
            icon: <PlusCircleOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'Search Engine Optimisation (SEO)',
            description: 'Improve your website\'s search engine rankings and attract targeted traffic with our proven SEO techniques.'
        },
        {
            icon: <GlobalOutlined style={{ fontSize: '32px', color: '#000' }} />,
            title: 'Website Speed Optimisation',
            description: 'Ensure a seamless user experience by enhancing your website\'s loading speed and performance.'
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
                            Marketing 
                        </Text>
                        <Title level={2}
                            style={{
                                fontSize: screens.lg ? "2.5em" : "2em",
                                marginTop: 10,
                                lineHeight: "1.2",
                            }}>
                            We deliver comprehensive solutions to achieve your business objectives.
                            
                        </Title>
                    </Space>
                </Col>

                <Col xs={24} md={12} lg={12} >
                    <div style={{ marginBottom: '24px' }}>
                        <Paragraph style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#000",
                            marginBottom: "32px",
                        }}>
                            Clients recognise us as innovators creating exceptional <span style={{ fontWeight: 'bold' }}> UI & UX design services and digital experiences</span>.
                            {/* Our clients describe us as a product team which creates amazing UI/UX</span> experiences, by crafting top-notch user experience. */}
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
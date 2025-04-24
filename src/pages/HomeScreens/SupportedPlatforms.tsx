
import { Card, Col, Grid, Row, Space, Typography } from "antd";
import wordPress from '../../assets/wordpress.svg';
import shopify from '../../assets/shopify.svg';
import woo from '../../assets/woo.svg';
import bigCommerce from '../../assets/bigcommerce.svg';
import react from "../../assets/react.svg";
import angular from "../../assets/angular-icon-logo-svgrepo-com.svg";

const { Title, Paragraph } = Typography;


export const SupportedPlatforms = () => {
    const screen = Grid.useBreakpoint();

    const platforms = [
        {
            icon: shopify,
            name: 'Shopify',
            link: {
                href: 'https://www.shopify.com',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: bigCommerce,
            name: 'BigCommerce',
            link: {
                href: 'https://www.bigcommerce.com',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: woo,
            name: 'WooCommerce',
            link: {
                href: 'https://woocommerce.com',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: wordPress,
            name: 'WordPress',
            link: {
                href: 'https://wordpress.org',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: react,
            name: 'React',
            link: {
                href: 'https://reactjs.org',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: angular,
            name: 'Angular',
            link: {
                href: 'https://Angular.io',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: react,
            name: 'React',
            link: {
                href: 'https://reactjs.org',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        },
        {
            icon: angular,
            name: 'Angular',
            link: {
                href: 'https://Angular.io',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        }
    ];

    return (
        <Space
            style={{
                display: "flex",
                justifyContent: "center",
                padding: screen.lg || screen.md ? "120px" : "50px",
                backgroundColor: "#0d2a4b",
            }}
        >
            <Row gutter={[48, 48]}>
                <Col xs={24} md={12} lg={12} style={{ position: 'relative' }}>
                    <Title level={2} style={{
                        fontSize: screen.lg ? '2.5em' : '2em',
                        marginTop: 10,
                        lineHeight: '1.2',
                        color: '#fff'
                    }}>
                        Supported Platforms by us
                    </Title>
                    <Paragraph style={{
                        fontSize: '16px',
                        color: '#fff',
                        marginBottom: '32px',
                        lineHeight: '1.6'
                    }}>
                        Get customized solutions built for major platforms and accelerate your business growth.
                    </Paragraph>
                </Col>
                <Col xs={24} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row gutter={[48, 16]}>
                        {platforms.map((platform, index) => (
                            <Col xs={24} sm={8} md={8} lg={8} key={index}>
                                <Card
                                    className="platform-card"
                                    style={{
                                        background: 'rgba(48, 48, 79, 0.7)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        height: '120px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <a href={platform.link.href} target={platform.link.target} rel={platform.link.rel}>
                                        <img src={platform.icon} style={{ width: '50px', height: '50px' }} />
                                    </a>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Space>
    );
};

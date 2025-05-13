
import { Card, Col, Grid, Row, Space, Typography } from "antd";
import wordPress from '../../assets/service/Wordpress.svg';
import shopify from '../../assets/service/shopify.svg';
import woo from '../../assets/service/Woocommerce.svg';
// import Framer from '../../assets/service/Framer_white.svg';
import react from "../../assets/service/ui.svg";
import Next from "../../assets/service/nextjs.svg";
import figam from "../../assets/service/figma.svg";
import Magento from "../../assets/service/Magento.svg";
import Wix from "../../assets/service/Wix.svg";
import Ios from "../../assets/service/table.svg";

const { Title, Paragraph } = Typography;


export const SupportedPlatforms = () => {
    const screen = Grid.useBreakpoint();

    const platforms = [
        {
            icon: shopify,
            name: 'Shopify',
            link: {
            href: 'https://aadhyawebsolutions.com/shopify/',
            target: '_blank',
            rel: 'noopener noreferrer'
            }
        },
        {
            icon: wordPress,
            name: 'WordPress',
            link: {
            href: 'https://aadhyawebsolutions.com/wordpress/',
            target: '_blank',
            rel: 'noopener noreferrer'
            }
        },
        {
            icon: Magento,
            name: 'Magento',
            link: {
            href: 'https://reactjs.org',
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
            icon: Next,
            name: 'Next JS',
            link: {
            href: 'https://nextjs.org',
            target: '_blank',
            rel: 'noopener noreferrer'
            }
        },
        
        {
            icon: Ios,
            name: 'IOS',
            link: {
            href: 'https://www.apple.com/ios/ios-18/',
            target: '_blank',
            rel: 'noopener noreferrer'
            }
        },
        {
            icon: figam,
            name: 'figam',
            link: {
            href: 'https://figam.io',
            target: '_blank',
            rel: 'noopener noreferrer'
            }
        },
         {
            icon: Wix,
            name: 'Wix',
            link: {
            href: 'https://www.wix.com/',
            target: '_blank',
            rel: 'noopener noreferrer'
            }
        },
         {
            icon: woo,
            name: 'WooCommerce',
            link: {
            href: 'https://aadhyawebsolutions.com/wordpress/',
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
                backgroundColor: "#000",
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
                        Expertise That Powers Your Digital Growth
                    </Title>
                    <Paragraph style={{
                        fontSize: '16px',
                        color: '#fff',
                        marginBottom: '32px',
                        lineHeight: '1.6',
                        textAlign: 'justify'
                    }}>
                        From Shopify store redesign, CRO, and migration from platforms like WordPress, Magento, Wix to Shopify, to listing your products on Amazon, Flipkart, and beyond — we specialize in scalable solutions, custom Android & iOS app development, graphic design, and more to boost your sales and drive business success.
                    </Paragraph>
                </Col>
                <Col xs={24} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row gutter={[48, 16]}>
                        {platforms.map((platform, index) => (
                            <Col xs={12} sm={8} md={8} lg={8} key={index}>
                                <Card
                                    className="platform-card"
                                    style={{
                                        background: 'rgb(18 18 22 / 70%)',
                                        border: '1px solid #212121',
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

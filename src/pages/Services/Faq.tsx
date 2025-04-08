// import { useState } from 'react';
import { Row, Col, Typography, Collapse, Space, Grid } from 'antd';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const FaqSection = () => {
    const { useBreakpoint } = Grid
    const screens = useBreakpoint();;
    // const [activeKey, setActiveKey] = useState(null);

    const faqItems = [
        {
            key: '1',
            question: 'Do you work with businesses of all sizes?',
            answer: 'Yes, we work with businesses of all sizes, from startups to enterprise-level organizations. Our solutions are scalable and can be tailored to meet your specific needs regardless of your company size.'
        },
        {
            key: '2',
            question: 'How do I get started with your services?',
            answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call. Our team will schedule an initial consultation to understand your needs and goals, after which we\'ll propose a customized solution for your business.'
        },
        {
            key: '3',
            question: 'What industries do you serve?',
            answer: 'We serve a wide range of industries including technology, healthcare, finance, retail, manufacturing, education, and more. Our expertise allows us to understand the unique challenges and opportunities across different sectors.'
        },
        {
            key: '4',
            question: 'How long does it take to see results?',
            answer: 'The timeline for results varies depending on your specific goals and the solutions implemented. Typically, clients begin to see initial results within 1-3 months, with more substantial outcomes developing over 6-12 months of ongoing partnership.'
        }
    ];

    // Custom expand icon component
    // const expandIcon = ({ isActive, panelKey }) => (
    //     <RightOutlined
    //         rotate={isActive ? 90 : 0}
    //         style={{ fontSize: '16px', transition: 'all 0.3s' }}
    //     />
    // );

    return (
        <div className="faq-container" style={{ margin: '0', padding: '0' }}>
            <Row>
                <Col
                    xs={24}
                    md={12}
                    style={{
                        height: screens.xs ? '300px' : 'auto',
                        overflow: 'hidden'
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Two business professionals discussing work"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </Col>

                <Col
                    xs={24}
                    md={12}
                    style={{
                        backgroundColor: '#f0f0e4',
                        padding: screens.lg ? '60px 40px' : '40px 50px'
                    }}
                >
                    <Space direction="vertical" size={32} style={{ width: '100%' }}>
                        <div>
                            <Text
                                style={{
                                    color: '#121212',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    fontWeight: '300',
                                    marginBottom: '1px',
                                    display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
                                }}
                            >
                                OUR HISTORY
                            </Text>

                            <Title level={2} style={{ marginTop: '8px', marginBottom: '40px', fontSize: '50px', fontWeight: 500, color: '#121212' }}>
                                Frequently Asked Questions
                            </Title>
                        </div>

                        <Collapse
                            accordion
                            bordered={false}
                            expandIconPosition="end"
                            style={{
                                background: 'transparent'
                            }}
                        >
                            {faqItems.map(item => (
                                <Panel
                                    key={item.key}
                                    header={item.question}
                                    style={{
                                        marginBottom: '0',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                        padding: '16px 0',
                                    }}
                                >
                                    <div style={{ paddingLeft: '0', paddingRight: '24px' }}>
                                        {item.answer}
                                    </div>
                                </Panel>
                            ))}
                        </Collapse>
                    </Space>
                </Col>
            </Row>
        </div >
    );
};

export default FaqSection;
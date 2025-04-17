import { Row, Col, Typography, Button, Card, Space, Divider, Grid } from 'antd';

// const { Title, Paragraph, Text } = Typography;

const { Title, Text, Paragraph } = Typography;

function OurHistory() {
    const screen = Grid.useBreakpoint();

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#fff',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px',
        }}>
            <Row gutter={[48, 48]} >
                <Col xs={24} md={12}>
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginBottom: '1px',
                        display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
                    }}>
                        OUR HISTORY
                    </Text>
                    <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: '50px', fontWeight: 500, color: '#121212' }}>
                        Empowering businesses with innovation
                    </Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                        At the core of every successful business lies the ability to adapt, innovate, and lead. We empower businesses by crafting transformative strategies that harness the latest technologies and insights, ensuring they stay ahead in a dynamic market. From streamlining operations to implementing groundbreaking solutions, our approach focuses on driving sustainable
                    </Paragraph>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            marginTop: '24px',
                            backgroundColor: '#000',
                            borderColor: '#000',
                            borderRadius: '4px',
                            height: '48px',
                            padding: '0 24px'
                        }}
                    >
                        Contact Us
                    </Button>
                    <Divider type="horizontal" style={{ margin: '60px 0px' }} />
                    <div >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={8}>
                                <Card
                                    style={{
                                        backgroundColor: '#f5f7f9',
                                        borderRadius: '8px',
                                        padding: 20,
                                        background: '#f1f6f6',

                                        border: 'none',
                                        height: '100%'
                                    }}
                                >

                                    <Title level={3} style={{ fontWeight: 500 }}>95%</Title>
                                    <Divider type='horizontal' />
                                    <Text style={{ fontWeight: 400 }}>
                                        Customer Satisfaction
                                    </Text>
                                </Card>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Card
                                    style={{
                                        backgroundColor: '#f5f7f9',
                                        borderRadius: '8px',
                                        padding: 20,
                                        background: '#f1f6f6',

                                        border: 'none',
                                        height: '100%'
                                    }}
                                >
                                    <Title level={3} style={{ fontWeight: 500 }}>50%</Title>
                                    <Divider type='horizontal' />
                                    <Text style={{ fontWeight: 400 }}>
                                        Global Clients Served
                                    </Text>
                                </Card>
                            </Col>

                            <Col xs={24} sm={8}>
                                <Card
                                    style={{
                                        backgroundColor: '#f5f7f9',
                                        borderRadius: '8px',
                                        padding: 20,
                                        background: '#f1f6f6',

                                        border: 'none',
                                        height: '100%'
                                    }}
                                >
                                    <Title level={3} style={{ fontWeight: 500 }}>90%</Title>
                                    <Divider type='horizontal' />
                                    <Text style={{ fontWeight: 400 }}>
                                        Retention Rate
                                    </Text>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col xs={24} md={12} lg={12} style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', width: '100%', maxWidth: '557px', aspectRatio: 557 / 641, borderRadius: '10px' }}>
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="Team working together"
                        style={{
                            overflow: 'hidden',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                    />
                </Col>

            </Row>
        </Space >
    )
}

export default OurHistory
// const OurHistory = () => {
//     return (
//         <Space style={{
//             display: 'flex',
//             flexDirection: 'column',
//             overflow: 'hidden',
//             border: '1px solid #e8e8e8'
//         }}>
//             <Row gutter={[48, 48]} style={{ justifyContent: 'center' }}>
//                 <Col xs={24} md={14} >
//                     <Text style={{
//                         color: '#121212',
//                         letterSpacing: '2px',
//                         textTransform: 'uppercase',
//                         fontWeight: '300',
//                         marginBottom: '1px',
//                         display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
//                     }}>
//                         OUR HISTORY
//                     </Text>
//                     <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: '50px', fontWeight: 500, color: '#121212' }}>
//                         Empowering businesses with innovation
//                     </Title>
//                     <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
//                         At the core of every successful business lies the ability to adapt, innovate, and lead. We empower businesses by crafting transformative strategies that harness the latest technologies and insights, ensuring they stay ahead in a dynamic market. From streamlining operations to implementing groundbreaking solutions, our approach focuses on driving sustainable
//                     </Paragraph>
//                     <Button
//                         type="primary"
//                         size="large"
//                         style={{
//                             marginTop: '24px',
//                             backgroundColor: '#000',
//                             borderColor: '#000',
//                             borderRadius: '4px',
//                             height: '48px',
//                             padding: '0 24px'
//                         }}
//                     >
//                         Contact Us
//                     </Button>

//                     <div style={{ padding: '20px 0', borderTop: '1px solid #e8e8e8', marginTop: '20px' }}>
//                         <Row gutter={[16, 16]}>
//                             <Col xs={24} sm={8}>
//                                 <Card
//                                     style={{
//                                         backgroundColor: '#f5f7f9',
//                                         borderRadius: '4px',
//                                         border: 'none',
//                                         height: '100%'
//                                     }}
//                                 >
//                                     <Statistic
//                                         title="Customer Satisfaction"
//                                         value="95%"
//                                         valueStyle={{
//                                             fontSize: '36px',
//                                             fontWeight: 'bold',
//                                             color: '#000'
//                                         }}
//                                     />
//                                 </Card>
//                             </Col>

//                             <Col xs={24} sm={8}>
//                                 <Card
//                                     style={{
//                                         backgroundColor: '#f5f7f9',
//                                         borderRadius: '4px',
//                                         border: 'none',
//                                         height: '100%'
//                                     }}
//                                 >
//                                     <Statistic
//                                         title="Global Clients Served"
//                                         value="50+"
//                                         valueStyle={{
//                                             fontSize: '36px',
//                                             fontWeight: 'bold',
//                                             color: '#000'
//                                         }}
//                                     />
//                                 </Card>
//                             </Col>

//                             <Col xs={24} sm={8}>
//                                 <Card
//                                     style={{
//                                         backgroundColor: '#f5f7f9',
//                                         borderRadius: '4px',
//                                         border: 'none',
//                                         height: '100%'
//                                     }}
//                                 >
//                                     <Statistic
//                                         title="Retention Rate"
//                                         value="90%"
//                                         valueStyle={{
//                                             fontSize: '36px',
//                                             fontWeight: 'bold',
//                                             color: '#000'
//                                         }}
//                                     />
//                                 </Card>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Col>

//                 <Col xs={24} md={10} lg={8} style={{ overflow: 'hidden', width: '100%', maxWidth: '557px', aspectRatio: 557 / 641, borderRadius: '10px' }}>
//                     <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                         <img
//                             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//                             alt="Business meeting"
//                             style={{
//                                 overflow: 'hidden',
//                                 width: '100%',
//                                 height: '100%',
//                                 objectFit: 'cover',
//                                 borderRadius: '10px'
//                             }}
//                         />
//                     </div>
//                 </Col>
//             </Row>
//         </Space>
//     );
// };

// export default OurHistory;
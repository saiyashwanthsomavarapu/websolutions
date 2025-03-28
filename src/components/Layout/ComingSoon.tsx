import { Col, Row, Image, Typography, Layout, Space } from 'antd'
import Business from '../../assets/Businessman excited to launch new project.png'

const { Title, Text } = Typography;
const {  Content } = Layout;

function ComingSoon() {
    return (
        <Content style={{ display: 'flex', background: '#F8F8F8',alignItems: 'center', justifyContent: 'center' }}>
            <Space.Compact style={{ display: 'flex', flexDirection: 'column',  }}>
            <Row gutter={[32, 32]} align="middle" style={{ width: "100%", height: "100vh" }}>
                <Col xs={24} md={12}>
                    
                    <Text style={{ color: '#A7A7A7', fontSize: '18px', fontFamily:'Poppins', }}>
                        Coming soon
                    </Text>
                    <Title
                        level={1}
                        style={{
                            fontSize: '64px',
                            lineHeight: 1.2,
                            marginBottom: '50px',
                            marginTop: 20,
                            fontFamily:'Poppins',
                            whiteSpace: 'pre-line'
                        }}
                    >
                        {`GET NOTIFIED
                        WHEN WE
                        WILL LAUNCH!`}
                    </Title>
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ position: 'relative', width: '100%'}}>
                        <Image src={Business}  alt="coming soon" preview={false} />
                    </div>
                </Col>
            </Row>
            </Space.Compact>
        </Content>
    )
}

export default ComingSoon
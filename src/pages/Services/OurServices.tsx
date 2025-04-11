import { Row, Col, Typography, Space, Grid } from 'antd';
import { services } from '../../Utils/appContants';
import ServiceCard from '../../components/ServiceCard';

const { Title, Text } = Typography;

const OurServices = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();
    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#fff',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px',
        }}>
            <Row gutter={[48, 48]} style={{ justifyItems: 'start' }}>
                <Col xs={24} md={24} lg={24}>
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginBottom: '1px',
                        display: 'block', textDecoration: 'underline', textUnderlineOffset: '10px'
                    }}>
                        What We Do
                    </Text>
                    <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: '50px', fontWeight: 500, color: '#121212' }}>
                        Our Services
                    </Title>

                </Col>
                {services.map(({ title, description, Icon }, index) => (
                    <Col xs={24} md={12} lg={12} >
                        <ServiceCard
                            key={index}
                            icon={<Icon />}
                            title={title}
                            color="#f1f6f6"
                            description={description}
                        />
                    </Col>
                ))}
            </Row>
        </Space>
    )
}

export default OurServices
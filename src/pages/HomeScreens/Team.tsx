import { Row, Col, Typography, Button, Space, Grid } from 'antd';

import person from "../../assets/person.jpeg";

import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const TeamMember = (props: any) => {
    const { name, title, imageSrc } = props;
    return (
        <div style={{ marginBottom: '24px' }}>
            <div
                style={{
                    width: '100%',
                    paddingTop: '100%',
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    backgroundColor: '#f0f0f0'
                }}
            >
                <img
                    src={imageSrc}
                    alt={name}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <Title level={4} style={{ margin: '0', fontWeight: 'bold', fontSize: '18px' }}>
                {name}
            </Title>
            <Text style={{ color: '#666', fontSize: '14px' }}>
                {title}
            </Text>
        </div>
    );
};

const TeamSection = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();
    const navigateTo = useNavigate();

    const teamMembers = [
        {
            name: 'John Doe',
            title: 'Chief Executive Officer',
            imageSrc: person  // Using placeholder as instructed
        },
        {
            name: 'Jane Smith',
            title: 'Chief Financial Officer',
            imageSrc: person
        },
        {
            name: 'Michael Johnson',
            title: 'Head of Risk Management',
            imageSrc: person
        },
        {
            name: 'Emily Carter',
            title: 'Acquisitions Advisor',
            imageSrc: person
        }
    ];


    return (
        <Space style={{
            display: 'flex',
            padding: (screen.lg || screen.md) ? '120px' : '50px',
            justifyContent: 'center',
            backgroundColor: '#f5f7f9',
        }}>
            <Row gutter={[48, 48]}>
                <Col
                    xs={24}
                    md={24}
                    lg={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: (screen.md || screen.lg) ? 'row' : 'column',
                        height: '100%'
                    }}
                >
                    <div style={{ paddingTop: '24px' }}>
                        <Text style={{
                            color: '#000',
                            textTransform: 'uppercase',
                            fontWeight: '300',
                            display: 'block',
                            textDecoration: 'underline',
                            textUnderlineOffset: '10px'
                        }}>
                            OUR VALUES
                        </Text>
                        <Title level={2} style={{
                            fontSize: screen.lg ? '2.5em' : '2em',
                            marginTop: 10,
                            lineHeight: '1.2',
                        }}>
                            Meet the consultation team
                        </Title>
                    </div>
                    <div style={{ paddingTop: '24px' }}>
                        <Button
                            type="primary"
                            style={{
                                backgroundColor: '#1a1a1a',
                                border: 'none',
                                borderRadius: '4px',
                                height: '48px',
                                padding: '0 24px'
                            }}
                            onClick={() => navigateTo("/services")}
                        >
                            View All Services
                        </Button>
                    </div>

                </Col>

                {/* Right Side - Cards with Hover Effect */}
                {/* <Col xs={24} md={12} lg={24}> */}

                {teamMembers.map((member, index) => (
                    <Col xs={24} sm={12} md={6} key={index}>
                        <TeamMember
                            key={index}
                            name={member.name}
                            title={member.title}
                            imageSrc={member.imageSrc}
                        />
                    </Col>
                ))}
                {/* <Space direction="vertical" size={24} style={{ width: '100%' }}>
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </Space> */}
                {/* </Col> */}
            </Row>

            {/* CSS for hover effect */}

        </Space >
    );
};

export default TeamSection;
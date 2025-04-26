import { Row, Col, Typography, Space, Grid } from 'antd';
import Card from 'antd/es/card/Card';

const { Title, Paragraph } = Typography;


const styleProps = {
    color: '#121212',
    letterSpacing: '2px',
    textTransform: 'uppercase' as 'uppercase',
    fontWeight: '300',
    textDecoration: 'underline',
    textUnderlineOffset: '10px'
}   
const TermsConditions = () => {
    const { useBreakpoint } = Grid;
    const screen = useBreakpoint();

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: (screen.lg || screen.md) ? '120px' : '100px 50px',
            backgroundColor: '#fff'
        }}>
            <Row gutter={[48, 48]} >
                <Col xs={24} md={24} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
                    <Typography.Text style={styleProps}>
                        Terms and Conditions
                    </Typography.Text>
                </Col>
                <Col xs={24} md={24} lg={8}>

                <Card
            className="service-card"
            style={{
                marginBottom: '24px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                height: '100%',
                padding: '24px',
                backgroundColor: 'rgb(241, 246, 246)',
                // maxWidth: '500px',
            }}
            hoverable
        >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                {/* <img src={img} style={{ width: '50px', height: '50px' }} /> */}
            </div>
            <Title level={4} style={{ marginBottom: '12px', }}>Illegal Use</Title>
            <Paragraph style={{ color: '#555', marginBottom: 0 }}>
            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
            
            </Paragraph>
        </Card>
            </Col>
            <Col xs={24} md={24} lg={8}>

                <Card
            className="service-card"
            style={{
                marginBottom: '24px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                height: '100%',
                padding: '24px',
                backgroundColor: 'rgb(241, 246, 246)'
                // maxWidth: '500px',
            }}
            hoverable
        >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                {/* <img src={img} style={{ width: '50px', height: '50px' }} /> */}
            </div>
            <Title level={4} style={{ marginBottom: '12px', }}>Spamming</Title>
            <Paragraph style={{ color: '#555', marginBottom: 0 }}>
            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
            </Paragraph>
        </Card>
            </Col>
            <Col xs={24} md={24} lg={8}>

                <Card
            className="service-card"
            style={{
                marginBottom: '24px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                height: '100%',
                padding: '24px',
                backgroundColor: 'rgb(241, 246, 246)'
                // maxWidth: '500px',
            }}
            hoverable
        >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                {/* <img src={img} style={{ width: '50px', height: '50px' }} /> */}
            </div>
            <Title level={4} style={{ marginBottom: '12px', }}>Actions Taken by Aadhya Web</Title>
            <Paragraph style={{ color: '#555', marginBottom: 0 }}>
            Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
            </Paragraph>
        </Card>
            </Col>
            </Row>
        </Space >
    //     <Space
    //         style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         overflow: 'hidden',
    //         backgroundColor: '#fff',
    //         padding: screen.lg || screen.md ? '120px' : '100px 50px',
    //         }}
    //     >
    //         <Row gutter={[48, 48]} justify="center">
    //         <Col xs={24} md={12} lg={12}>
    //             <Title
    //             level={1}
    //             style={{
    //                 marginTop: '8px',
    //                 marginBottom: '40px',
    //                 fontSize: screen.lg || screen.md ? '50px' : '30px',
    //                 fontWeight: 500,
    //                 color: '#121212',
    //             }}
    //             >
    //             Terms and Conditions
    //             </Title>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             Please read these terms and conditions carefully before using our website. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             The following Terms of Use apply to ALL Web Indore customers:
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Illegal Use:</strong> Web Indore services may be used for lawful purposes only. Transmission, storage or distribution of any information, data or material in violation of any applicable law or regulation or that may directly facilitate the violation of any particular law or regulation is prohibited. This includes, but is not limited to: copyrighted material; trademarks; trade secrets or other intellectual property rights used without proper authorization; material that is obscene, defamatory, constitutes an illegal threat, or violates export control laws.
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Spamming:</strong> Sending unsolicited bulk and/or commercial messages over the Internet (known as “spamming”) is prohibited, regardless of whether or not it overloads a server or disrupts service to Web Indore’s customers. Web Indore reserves the right to determine, in its sole and absolute discretion, what constitutes a violation of this provision.
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             />
    //             <strong>Viruses and Other Destructive Activities: </strong> Use of Web Indore’s services or equipment for creating or sending Internet viruses, worms or Trojan horses, or for pinging, flooding or mail bombing, or engaging in denial of service attacks is prohibited.
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Pornography:</strong> The use of Web Indore’s services to store, post, display, transmit, advertise or otherwise make available any type of pornography is prohibited. Web Indore as required by law, and will, notify law enforcement agencies when it becomes aware of the presence of pornography on, or being transmitted through its services.                
    //             </p> 
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Payment:</strong> Web Indore reserves the right to suspend the services if the payments are not made by the due date. Web Indore shall not be held liable for any kind of loss due to disruption of services.
    //             </p> 
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Actions Taken by Aadhya Web :</strong> The failure by a customer to meet or follow any of the TOU is grounds for account deactivation. Web Indore will be the sole arbiter as to what constitutes a violation of the TOU. Web Indore reserves the right to remove any account without prior notice and to refuse service to anyone at any time. Depending on the severity of the violation, Web Indore may, at its sole discretion, restrict, suspend or terminate a customer’s web hosting account and/or pursue other civil remedies. If such violation is a criminal offense, Web Indore will notify the appropriate law enforcement authorities of such violation. Web Indore does not issue credits for outages incurred through service disablement resulting from TOU violations. Web Indore customers agree to indemnify and hold harmless Web Indore from any claims resulting from the use of our services that damages them or any other party.
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>IRC :</strong> Web Indore does not allow IRC or IRC bots to be operated by Web Hosting and E-Commerce customers.
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Anti Piracy:</strong> Web Indore’s Web Hosting and E-Commerce accounts should not be used to distribute illegal or pirated software and/or multimedia products.

    //                 The Web Indore service is provided on an as is, as available basis without warranties of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose or non-infringement. Web Indore and its partners and suppliers will not be liable for any cost or damage arising either directly or indirectly from any transaction or use of the service.
    //             </p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Income Disclaimer:</strong> Web Indore strictly prohibits its Partners from publicly disclosing their own earnings because no one person’s income is typical but does show what is possible with time, effort, and dedication.

    //                         What you earn as an Web Indore partners is wholly determined by your own individual efforts. Web Indore does not guarantee that any partners will earn any amount of income or any income at all from the promotion of our program.

    //                         The amount of time and/or money you invest in your business, will determine your success.</p>
    //             <p
    //             style={{
    //                 fontSize: screen.lg || screen.md ? '16px' : '14px',
    //                 lineHeight: '1.6',
    //                 color: '#555',
    //             }}
    //             >
    //             <strong>Cancellations and Refunds:</strong> Refundable: Not withstanding anything to the contrary contained in this policy, there are no refunds for all products or services of the Company.
    //             Cancellation: You may terminate or cancel the Services from the control panel at any time. If you cancel the Services, you are obligated to pay all fees and charges occurred prior to the effectiveness of such cancellation. If you request to suspend or cancel your customer account, your access to the control panel will be suspended and you will not be able to access the billing system to renew products or services or to update your account information. However, you will continue to have access to use the services already purchased until the end of your prepaid term.                </p>
    //         </Col>
    //     </Row>
    // </Space>
    );
}

export default TermsConditions
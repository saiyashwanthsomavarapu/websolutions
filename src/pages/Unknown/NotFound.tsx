import React from 'react';
import { Button, Typography, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { Content } = Layout;
const { Title, Text } = Typography;

const NotFoundContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 40px 20px;
  text-align: center;
`;

const ErrorCode = styled.div`
  font-size: 200px;
  font-weight: 300;
  line-height: 1;
  margin: 20px 0;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 120px;
  }
  
  @media (max-width: 480px) {
    font-size: 80px;
  }
`;

const OutlinedText = styled.span`
  -webkit-text-stroke: 1px #000;
  color: transparent;
  font-weight: 500;
`;

const NotFound: React.FC = () => {
  const navigateTo = useNavigate();

  return (
    <NotFoundContainer>

      <ErrorCode>
        <OutlinedText>404</OutlinedText>
      </ErrorCode>

      <Title level={2} style={{ margin: '10px 0', fontWeight: 500 }}>
        Ooops! Page Not Found..
      </Title>

      <Text style={{ fontSize: 16, color: '#666' }}>
        Unfortunately, page you are looking for does not exitst
      </Text>

      <Button
        type="primary"
        style={{
          backgroundColor: '#1a1a1a',
          border: 'none',
          borderRadius: '4px',
          height: '48px',
          padding: '0 24px',
          marginTop: '2em'
        }}
        onClick={() => navigateTo("/services")}
      >
        Back To Home
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;
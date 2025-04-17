import React from 'react';
import { Button, Typography, Layout } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
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

const StyledButton = styled(Button)`
  margin-top: 30px;
  height: 44px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  
  &:hover {
    border-color: #000;
    color: #000;
  }
`;

const NotFound: React.FC = () => {
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

            <Link to="/">
                <StyledButton type="primary" size="large">
                    Back To Home <ArrowRightOutlined style={{ marginLeft: 8 }} />
                </StyledButton>
            </Link>
        </NotFoundContainer>
    );
};

export default NotFound;
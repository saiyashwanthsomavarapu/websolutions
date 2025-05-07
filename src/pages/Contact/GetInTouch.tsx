import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { Row, Col, Typography, Card, Space, Grid, Input, Button, Select } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import { countryCodes } from '../../Utils/countryCodes';

const { Title, Text, Paragraph } = Typography;

// Define types for form data and validation
type InputStatus = "" | "warning" | "error" | undefined;

interface FormData {
    name: string;
    email: string;
    phone?: string;
    countryCode?: string;
    message: string;
}

interface ValidationState {
    status: InputStatus;
    message: string;
}

interface FormValidation {
    name: ValidationState;
    email: ValidationState;
    phone?: ValidationState;
    message: ValidationState;
}

interface TouchedState {
    name: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
}

const GetInTouch: React.FC = () => {
    const { useBreakpoint } = Grid;
    const form = useRef<HTMLFormElement | null>(null);
    const screen = useBreakpoint();

    // Form state
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        countryCode: '+1',
        phone: '',
        message: ''
    });

    // Validation state
    const [validation, setValidation] = useState<FormValidation>({
        name: {
            status: undefined,
            message: ''
        },
        email: {
            status: undefined,
            message: ''
        },
        message: {
            status: undefined,
            message: ''
        }
    });

    // Touched state to show validation only after field interaction
    const [touched, setTouched] = useState<TouchedState>({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    // Validate email format with regex
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // Validate email format with regex
    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,5}?\)?[-.\s]?\d{1,5}[-.\s]?\d{1,9}$/;
        return phoneRegex.test(phone);
    };
    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Validate on change
        validateField(name as keyof FormData, value);
    };

    // Handle field blur (when user leaves a field)
    const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name } = e.target;
        setTouched(prevState => ({
            ...prevState,
            [name]: true
        }));
        validateField(name as keyof FormData, formData[name as keyof FormData] || '');
    };

    // Validate a specific field
    const validateField = (name: keyof FormData, value: string): void => {
        let status: InputStatus = undefined;
        let message = '';

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    status = 'error';
                    message = 'Name is required';
                } else if (!/^[a-zA-Z\s]*$/.test(value)) {
                    status = 'error';
                    message = 'Name should only contain letters and spaces';
                } else if (value.length < 2) {
                    status = 'error';
                    message = 'Name must be at least 2 characters';
                }
                break;

            case 'email':
                if (!value.trim()) {
                    status = 'error';
                    message = 'Email is required';
                } else if (!validateEmail(value)) {
                    status = 'error';
                    message = 'Please enter a valid email address';
                }
                break;

            case 'phone':
                if (!value.trim()) {
                    status = 'error';
                    message = 'Phone is required';
                } else if (!validatePhone(value)) {
                    status = 'error';
                    message = 'Please enter a valid phone number';
                }
                break;

            case 'message':
                if (!value.trim()) {
                    status = 'error';
                    message = 'Message is required';
                } else if (value.length < 10) {
                    status = 'error';
                    message = 'Message must be at least 10 characters';
                }
                break;
        }

        setValidation(prevState => ({
            ...prevState,
            [name]: {
                status,
                message
            }
        }));
    };

    // Check if the form is valid
    const isFormValid = (): boolean => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.message.trim() !== '' &&
            !validation.name.message &&
            !validation.email.message &&
            !validation.message.message
        );
    };

    const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        // Set all fields as touched to show validation errors
        setTouched({
            name: true,
            email: true,
            phone: true,
            message: true
        });

        // Validate all fields
        validateField('name', formData.name);
        validateField('email', formData.email);
        validateField('message', formData.message);

        // Only proceed if form is valid
        if (isFormValid()) {
            if (form.current === null) return;
            emailjs
                .sendForm(
                    'service_o8iogp9',
                    'template_rimvd5u',
                    form.current,
                    'We-Bj0G2ktBHGJ6cA'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        // Clear all input field values
                        form.current?.reset();
                        // Reset form state
                        setFormData({
                            name: '',
                            email: '',
                            message: ''
                        });
                        // Reset validation state
                        setValidation({
                            name: { status: undefined, message: '' },
                            email: { status: undefined, message: '' },
                            message: { status: undefined, message: '' }
                        });
                        // Reset touched state
                        setTouched({
                            name: false,
                            email: false,
                            phone: false,
                            message: false
                        });
                        // Success toast message
                        toast.success("Email sent successfully");
                    },
                    (error) => {
                        toast.error(error.text || "Failed to send email");
                    }
                );
        }
    };

    const selectBefore = (
        <Select defaultValue="+1" style={{ width: 70 }} onChange={(value) => setFormData(prevState => ({ ...prevState, countryCode: value }))} placeholder="Select">
            {Object.entries(countryCodes).map(([_, value]) => (
                <Select.Option value={value}>{value}</Select.Option>
            ))}
        </Select>
    );

    return (
        <Space style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#f1f6f6',
            padding: (screen.lg || screen.md) ? '120px' : '50px'
        }}>
            <Toaster />
            <Row gutter={[48, 48]} style={{ justifyItems: 'start' }}>
                <Col xs={24} md={24} lg={24}>
                    <Text style={{
                        color: '#121212',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontWeight: '300',
                        marginBottom: '1px',
                        display: 'block',
                        textDecoration: 'underline',
                        textUnderlineOffset: '10px'
                    }}>
                        Get in touch
                    </Text>
                    <Title level={1} style={{ marginTop: '8px', marginBottom: '40px', fontSize: screen.lg ? '2.5em' : '2em', fontWeight: 500, color: '#121212' }}>
                        Let us be your guide
                    </Title>
                    <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                        We're here to help! Whether you have questions about our services, need support, or want to explore how we can collaborate, feel free to reach out to us through any of the following channels:
                    </Paragraph>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div style={{ marginBottom: '16px' }}>
                            <Input
                                size='large'
                                id="name"
                                name="name"
                                placeholder="Name"
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                status={touched.name ? validation.name.status : undefined}
                            />
                            {touched.name && validation.name.message && (
                                <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px' }}>
                                    {validation.name.message}
                                </div>
                            )}
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <Input
                                size='large'
                                id="email"
                                name="email"
                                placeholder="Email"
                                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                status={touched.email ? validation.email.status : undefined}
                            />
                            {touched.email && validation.email.message ? (
                                <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px' }}>
                                    {validation.email.message}
                                </div>
                            ) : (
                                !validation.email.message && (
                                    <Text type="secondary" style={{ fontSize: '12px', display: 'block', marginTop: '4px' }}>
                                        We'll never share your email with anyone else.
                                    </Text>
                                )
                            )}
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <Input
                                size='large'
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                addonBefore={selectBefore}
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={formData.phone || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                status={touched.phone ? validation.phone?.status : undefined}
                            />
                            {touched.phone && validation.phone?.message && (
                                <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px' }}>
                                    {validation.phone.message}
                                </div>
                            )}
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <TextArea
                                size='large'
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Message"
                                maxLength={500}
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                status={touched.message ? validation.message.status : undefined}
                            />
                            {touched.message && validation.message.message && (
                                <div style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '4px' }}>
                                    {validation.message.message}
                                </div>
                            )}
                            <div style={{ textAlign: 'right', fontSize: '12px', color: '#888' }}>
                                {formData.message.length}/500
                            </div>
                        </div>

                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{
                                marginTop: '24px',
                                borderRadius: '4px',
                                height: '48px',
                                padding: '0 24px',
                                color: '#fff',
                            }}
                            variant="solid"
                            color='default'
                            disabled={!isFormValid()}
                        >
                            Submit
                        </Button>
                    </form>
                </Col>

                <Col xs={24} sm={12} md={12} lg={12}>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} sm={12} md={12} lg={12}>
                            <Card
                                style={{
                                    backgroundColor: '#f5f7f9',
                                    borderRadius: '8px',
                                    padding: '0 20px 20px 20px',
                                    background: '#fff',
                                    border: 'none',
                                    height: '100%'
                                }}
                            >
                                <Title level={3} style={{ fontWeight: 500 }}>Contact us</Title>
                                <Text style={{ fontWeight: 400 }}>
                                    +1 (410) -334-3670
                                    <br />
                                    +91 (639)-373-3749
                                </Text>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12}>
                            <Card
                                style={{
                                    backgroundColor: '#f5f7f9',
                                    borderRadius: '8px',
                                    padding: '0 20px 20px 20px',
                                    background: '#fff',
                                    border: 'none',
                                    height: '100%'
                                }}
                            >
                                <Title level={3} style={{ fontWeight: 500 }}>Email</Title>
                                <Text style={{ fontWeight: 400 }}>
                                    support@aadhyawebsolution.com
                                </Text>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Space>
    );
};

export default GetInTouch;
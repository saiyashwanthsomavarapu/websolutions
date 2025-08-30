import { Fragment } from 'react'
import ContactUs from './ContactUs';
import GetInTouch from './GetInTouch';
import SEO from '../../components/SEO';

function Contact() {
    return (
        <Fragment>
            <SEO 
                title="Contact Aadhya Web Solution | Get in Touch for Web Development Services"
                description="Contact Aadhya Web Solution for expert website development services in the USA. Get in touch with our team for custom web solutions, WordPress development, and digital marketing services."
                keywords="contact aadhya web solution, web development contact, website design contact, wordpress development contact, digital marketing contact, usa web development company contact"
                canonical="https://aadhyawebsolution.com/contact"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Aadhya Web Solution",
                    "description": "Contact Aadhya Web Solution for expert website development services in the USA. Get in touch with our team for custom web solutions, WordPress development, and digital marketing services.",
                    "url": "https://aadhyawebsolution.com/contact",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Aadhya Web Solution",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "availableLanguage": "English"
                        }
                    }
                }}
            />
            <ContactUs />
            <GetInTouch />
        </Fragment>
    )
}

export default Contact
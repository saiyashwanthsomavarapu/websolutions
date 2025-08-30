import { Fragment } from 'react'
import OurServices from './OurServices'
import SEO from '../../components/SEO'
// import FaqSection from './Faq'

const Services = () => {
    return (
        <Fragment>
            <SEO 
                title="Web Development & Digital Marketing Services in USA | Aadhya Web Solution"
                description="We offer a full suite of web development and digital marketing services, including WordPress development, SEO, and PPC campaigns. Learn how our solutions can help your business grow."
                keywords="web development services in usa, website design services, digital marketing services, wordpress development, SEO services, PPC services, aadhya web solution"
                canonical="https://aadhyawebsolution.com/services"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Web Development & Digital Marketing Services",
                    "description": "We offer a full suite of web development and digital marketing services, including WordPress development, SEO, and PPC campaigns. Learn how our solutions can help your business grow.",
                    "provider": {
                        "@type": "Organization",
                        "name": "Aadhya Web Solution",
                        "url": "https://aadhyawebsolution.com"
                    },
                    "serviceType": [
                        "Web Development",
                        "WordPress Development",
                        "Digital Marketing",
                        "SEO Services",
                        "PPC Services",
                        "Shopify Development",
                        "Mobile App Development",
                        "Graphic Design"
                    ],
                    "areaServed": {
                        "@type": "Country",
                        "name": "United States"
                    }
                }}
            />
            <OurServices />
            {/* <FaqSection /> */}
        </Fragment>
    )
}

export default Services
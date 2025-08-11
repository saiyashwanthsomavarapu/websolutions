import { AimOutlined, LineChartOutlined } from "@ant-design/icons";
import shopify from "../assets/service/shopify.svg";
import word from "../assets/service/Wordpress.svg";
import Optimization from "../assets/service/Optimization.svg";
import graphic from "../assets/service/graphic.svg";
import Saas from "../assets/service/Mobile.svg";
import react from "../assets/service/ui.svg";
import req from "../assets/Group-discussion.mp4";
import img from "../assets/Prototyping-process.mp4";
import dev from "../assets/Development.mp4";
import test from "../assets/Software-code-testing.mp4";
import deploy from "../assets/deployment.mp4";

export const services = [
  {
    Icon: AimOutlined,
    img: shopify,
    title: "Shopify Store Setup, CRO & Speed Optimisation",
    link: {
      href: "https://aadhyawebsolutions.com/shopify/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    description:
      "Our Shopify store setup services are crafted to help you build high-performing eCommerce stores that convert visitors into loyal customers. We go beyond the basics by implementing conversion rate optimisation (CRO) strategies that increase your average order value and streamline the user journey. Combined with Shopify speed optimisation, we ensure fast-loading, mobile-responsive storefronts that offer a seamless shopping experience.",
  },
  {
    img: word,
    Icon: word,
    title: "WordPress Development",
    description:
      "Whether you need a business website, blog, or custom solution, our WordPress development services offer flexibility, scalability, and full SEO compatibility. We create responsive websites with clean UI/UX, optimised for speed and performance. Our custom WordPress themes and plugins ensure your site reflects your brand and functions exactly as your business demands.",
    link: {
      href: "https://aadhyawebsolutions.com/wordpress/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    img: Optimization,
    Icon: Optimization,
    title: "Digital Marketing",
    description:
      "We deliver data-driven digital marketing services tailored to your business goals. From strategic search engine optimisation (SEO) to high-impact PPC campaigns and content-driven lead generation, we help brands grow their digital footprint. Our team works across multiple platforms to ensure maximum reach, better engagement, and measurable ROI.",
    link: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    img: graphic,
    Icon: graphic,
    title: "Graphic Design",
    description:
      "Great design speaks volumes. Our graphic design services include everything from brand identity creation to digital and print creatives. We design visually appealing logos, marketing materials, and social media graphics that not only look great but also drive audience interaction and brand recognition.",
    link: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    img: react,
    Icon: LineChartOutlined,
    title: "Web Development",
    description:
      "Our web development services encompass everything from simple landing pages to complex web applications. We utilise the latest technologies and frameworks to build responsive, user-friendly websites that are optimised for performance and SEO. Whether you need a custom CMS, eCommerce platform, or a SaaS application, our team has the expertise to deliver high-quality solutions tailored to your business needs.",
    link: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  {
    img: Saas,
    Icon: LineChartOutlined,
    title: "Mobile App Development",
    description:
      "In today's mobile-first world, having a robust mobile app is essential for business growth. Our mobile app development services cover both iOS and Android platforms, ensuring your app is user-friendly, fast, and secure. We focus on creating intuitive interfaces and seamless user experiences, backed by powerful backend systems to support your app's functionality.",
    link: {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
];

export const cancellationRefundPolicyData = [
  {
    subtitle: "Cancellation Policy:",
    content: `You may cancel your service request or order at any time before the work is completed or delivered. 
              Cancellation requests must be submitted in writing via email or through our contact form. 
              The cancellation will take effect once we have acknowledged your request.
              
    `,
  },
  {
    subtitle: "",
    content: `
              For ongoing projects, if work has already begun, a cancellation fee may apply based on the stage of work completed. 
              In case of cancellation after the project has started, the client will be liable to pay for the services already rendered.
    `,
  },
  {
    subtitle: "Refund Policy:",
    content: `We offer a refund in specific cases under the following conditions:
    `,
    bulletPoints: [
      {
        bulletTitle: "Non-Delivery of Services:",
        bulletContent:
          "If we are unable to deliver the services as agreed upon or fail to meet the project’s milestones within the specified timeframe, you may be eligible for a refund.",
      },
      {
        bulletTitle: "Service Dissatisfaction:",
        bulletContent: `If you are not satisfied with the completed work and we cannot rectify the issue to your satisfaction within a reasonable time, you may be eligible for a refund, depending on the circumstances and the work already completed.
          `,
      },
    ],
  },
  {
    subtitle: "",
    content: `
          Refund requests must be submitted within 7 days after project delivery or service completion. Refunds will only be processed after evaluating the work completed and the reasons for dissatisfaction.

    `,
  },
  {
    subtitle: "Partial Refunds:",
    content: `If the work is partially completed or milestones have been achieved, a partial refund may be issued. 
              The refund amount will be determined based on the value of the services already provided. `,
  },
  {
    subtitle: "No Refunds:",
    content: `Refunds will not be issued in the following cases:
    `,
    bulletPoints: [
      {
        bulletTitle: "Change of Mind:",
        bulletContent:
          "If the client simply changes their mind or decides not to proceed with the project after work has started.",
      },
      {
        bulletTitle: "Work Delivered as Per Agreement:",
        bulletContent:
          "If the services are completed as per the initial agreement or contract and the client is still unsatisfied after the work has been delivered.",
      },
      {
        bulletTitle: "Third-Party Services:",
        bulletContent:
          "If the work involves third-party services (e.g., hosting, external tools, etc.) that cannot be refunded.",
      },
    ],
  },
  {
    subtitle: "How to Request a Refund or Cancellation:",
    content: `To request a refund or to cancel a service, please follow these steps:`,
    bulletPoints: [
      {
        bulletTitle: "Contact Us:",
        bulletContent:
          "Send an email to support@aadhyawebsolution.com with the subject line “Cancellation and Refund Request” or use our contact form on the website.",
      },
      {
        bulletTitle: "Provide Details:",
        bulletContent:
          "Include the reason for cancellation or refund request, your order number, and any relevant details about the project or service.",
      },
      {
        bulletTitle: "Processing Time:",
        bulletContent:
          "We will respond to your request within 2-3 business days, assess the situation, and proceed with your refund or cancellation as per the terms mentioned above.",
      },
    ],
  },
  {
    subtitle: "Refund Processing Time:",
    content: `If your refund is approved, it will be processed within 2-3 business days to the original payment method used during the transaction. Please note that the refund may take additional time depending on your payment provider or financial institution.`,
  },
  {
    subtitle: "Contact Us:",
    content: `If you have any questions about our Cancellation and Refund Policy or need to request a cancellation or refund, please contact us at:`,
    bulletPoints: [
      {
        bulletTitle: "Email: ",
        bulletContent: "support@aadhyawebsolution.com",
      },
      {
        bulletTitle: "Phone: ",
        bulletContent: "+1 (443) 554‑7121",
      },
    ],
  },
];

export const privacyPolicyData = [
  {
    content: "",
  },
  {
    subtitle: "Information Collection:",
    content: `We collect personal information that you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or make a purchase. 
              This may include your name, email address, phone number, billing details, and any other information necessary to complete a service request.
              When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.
              `,
  },
  {
    subtitle: "",
    content: `
              We may also collect non-personal information automatically through your use of our website, such as your IP address, browser type, and pages visited.
              `,
  },
  {
    subtitle: "Use of Information:",
    content: `The information we collect is used for the following purposes:
    `,
    bulletPoints: [
      {
        bulletTitle: "",
        bulletContent: "To process and complete your service requests.",
      },
      {
        bulletTitle: "",
        bulletContent: "To improve and personalize your user experience.",
      },
      {
        bulletTitle: "",
        bulletContent:
          "To send you relevant updates, newsletters, and promotional offers (if you’ve opted in).",
      },
      {
        bulletTitle: "",
        bulletContent:
          "To communicate with you regarding your account or services.",
      },
      {
        bulletTitle: "",
        bulletContent:
          "To comply with legal obligations and protect our rights.",
      },
    ],
  },
  {
    subtitle: "Data Protection:",
    content: `We implement appropriate technical and organizational measures to safeguard your personal information and protect it from unauthorized access, alteration, disclosure, or destruction.
            `,
  },
  {
    subtitle: "",
    content: `However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            `,
  },
  {
    subtitle: "Sharing Your Information:",
    content: `We do not sell, trade, or rent your personal information to third parties. 
              However, we may share your information with trusted service providers who assist in operating our website and providing services, as long as they agree to keep your information confidential.
              We may also disclose information if required by law or in response to legal processes.
            `,
  },
  {
    subtitle: "",
    content: `We may also disclose information if required by law or in response to legal processes.`,
  },
  {
    subtitle: "Cookies:",
    content: `Our website uses cookies to enhance user experience. Cookies are small data files that are stored on your device. 
              They help us analyze web traffic and improve your browsing experience. 
              You can choose to accept or decline cookies through your browser settings.
              `,
  },
  {
    subtitle: "Third-Party Links:",
    content: `Our website may contain links to other websites. 
              We are not responsible for the privacy practices of external sites and encourage you to review their privacy policies 
              before sharing any personal informationWe do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.`,
  },
  {
    subtitle: "Your Rights:",
    content: `You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights or have any concerns about how your data is being used, please contact us at support@aadhyawebsolution.com.`,
  },
  {
    subtitle: "Changes to This Privacy Policy:",
    content: `We may update this Privacy Policy from time to time. 
              Any changes will be posted on this page, and the updated date will be indicated at the top. 
              We encourage you to review this page periodically to stay informed about our privacy practices.`,
  },
  {
    subtitle: "Contact Us:",
    content: `If you have any questions about this Privacy Policy or our practices, please contact us at:
    `,
    bulletPoints: [
      {
        bulletTitle: "Email: ",
        bulletContent: "support@aadhyawebsolution.com",
      },
      {
        bulletTitle: "Phone: ",
        bulletContent: "+1 (443) 554‑7121",
      },
    ],
  },
];

export const TermsConditionsData = [
  {
    subtitle: "Client Responsibilities:",
    content: `You agree to provide accurate and complete information for the services you request. 
              This includes, but is not limited to, access to your existing platforms, necessary credentials, and other relevant business information. 
              You are responsible for ensuring all content, data, and intellectual property submitted for development are accurate, legal, and authorized for use.`,
  },
  {
    subtitle: "Payment Terms:",
    content: `All payments for services must be made in accordance with the pricing outlined on the website or in the project proposal. 
              Payments may be required upfront or in installments based on the project’s scope. 
              Payments for additional services or change requests during the course of the project will be invoiced separately.`,
  },
  {
    subtitle: "Delivery and Timeline:",
    content: `We aim to deliver our services within the timelines provided, but these may vary depending on project complexity, scope, and client responsiveness. 
              We will communicate any delays or adjustments to deadlines as needed.
              `,
  },
  {
    subtitle: "Confidentiality:",
    content: `Both parties agree to keep confidential any proprietary or confidential information obtained during the course of the project, including but not limited to designs, data, strategies, and business information. 
            This obligation remains even after the project has concluded.`,
  },
  {
    subtitle: "Intellectual Property:",
    content: `Upon full payment for our services, ownership of the final deliverables (designs, code, content) will be transferred to you. 
              However, we retain the right to use non-sensitive portions of the deliverables for portfolio or promotional purposes.
        `,
  },
  {
    subtitle: "Website Usage:",
    content: `You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair our services or systems. 
              You are responsible for ensuring your use complies with all local laws and regulations.`,
  },
  {
    subtitle: "Limitations of Liability:",
    content: `While we strive to provide the best services possible, Aadhya Web Solution is not liable for any indirect, incidental, special, or consequential damages arising out of the use or inability to use our services. 
              In no event shall our total liability exceed the amount paid for the services rendered.`,
  },
  {
    subtitle: "Termination of Services:",
    content: `Either party may terminate the agreement at any time by providing written notice. 
              In case of termination, you will be responsible for paying for any work completed up to the date of termination. 
              Aadhya Web Solution reserves the right to terminate services if there is a breach of these terms or for any other reason deemed necessary.
            `,
  },
  {
    subtitle: "Changes to the Terms & Conditions:",
    content: `Aadhya Web Solution reserves the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this page periodically for any updates.
`,
  },
  {
    subtitle: "Governing Law: ",
    content: `These terms and conditions are governed by the laws of Baltimore/Maryland, and any disputes will be handled in the appropriate jurisdiction within that area.
`,
  },
  {
    subtitle: "Contact Us:",
    content: `If you have any questions regarding these Terms & Conditions, please contact us at:
  `,
    bulletPoints: [
      {
        bulletTitle: "Email: ",
        bulletContent: "support@aadhyawebsolution.com",
      },
      {
        bulletTitle: "Phone: ",
        bulletContent: "+1 (443) 554‑7121",
      },
    ],
  },
];

export const DeliveryProcessData = [
  {
    subtitle: "Initial Consultation & Discovery:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Understanding your needs and project goals.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "We begin with a one-on-one consultation, either via phone, email, or video call. During this stage, we gather all the necessary details about your business, project objectives, and specific requirements.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "You’ll receive a personalized proposal that includes an overview of the project, timelines, and pricing.",
      },
    ],
  },
  {
    subtitle: "Project Agreement & Proposal:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Finalizing the project scope and confirming terms.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "Once you review the proposal and agree on the scope of work, we send over a formal contract and timeline. The contract outlines the deliverables, milestones, payment terms, and any other essential details.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "Upon signing the contract and receiving the initial payment (if applicable), we begin working on your project.",
      },
    ],
  },
  {
    subtitle: "Design & Development:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Turning your vision into a working product.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "Our team starts working on the design and development based on your requirements. We develop mockups and wireframes for approval (for design work) and begin coding (for websites, apps, or other services).",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "You’ll receive updates and progress reports at regular intervals. If needed, we can schedule review sessions to ensure we’re on the right track.",
      },
    ],
  },
  {
    subtitle: "Testing & Quality Assurance:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Ensuring a flawless final product.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "Once development is complete, we conduct extensive testing to ensure everything works smoothly. This includes cross-browser testing, mobile responsiveness checks, functionality testing, and performance testing.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "Any bugs or issues discovered during this phase will be fixed, and the project will be ready for final approval.",
      },
    ],
  },
  {
    subtitle: "Final Review & Approval:",
    content: `Upon full payment for our services, ownership of the final deliverables (designs, code, content) will be transferred to you. 
              However, we retain the right to use non-sensitive portions of the deliverables for portfolio or promotional purposes.`,
  },
  {
    subtitle: "Website Usage:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Gaining your final approval before launch.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "After testing, we present the completed work to you for final review. You’ll have the opportunity to review the final version, suggest any minor changes, and confirm that everything meets your expectations.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "Once you approve the project, we move on to the final steps.",
      },
    ],
  },
  {
    subtitle: "Launch & Delivery:",
    content: `While we strive to provide the best services possible, Aadhya Web Solution is not liable for any indirect, incidental, special, or consequential damages arising out of the use or inability to use our services. 
              In no event shall our total liability exceed the amount paid for the services rendered.`,
  },
  {
    subtitle: "Termination of Services:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Launching your product to the world.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "For website and eCommerce store projects, we migrate everything to the live environment and ensure that it is fully functional. For app development, the app is submitted to the appropriate stores (Google Play, Apple App Store) or delivered to you for distribution.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "Your project goes live and is fully operational. We provide you with all the necessary credentials, documentation, and support.",
      },
    ],
  },
  {
    subtitle: "Post-Launch Support & Maintenance:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Ensuring continued success.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "After launch, we offer ongoing support and maintenance services to resolve any issues, add new features, or update your website/app. Our team is available for troubleshooting, enhancements, and any other assistance you may need.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "You have continuous support to ensure your business runs smoothly and stays updated.",
      },
    ],
  },
  {
    subtitle: "Feedback & Continuous Improvement:",
    content: "",
    miniTitle: "Objective: ",
    miniContent: "Learning from your experience and refining our services.",
    bulletPoints: [
      {
        bulletTitle: "What happens: ",
        bulletContent:
          "We encourage feedback from all clients to improve our processes and services. Your insights help us grow and ensure that we provide the best possible experience for all future projects.",
      },
      {
        bulletTitle: "Outcome: ",
        bulletContent:
          "We use your feedback to enhance our services and stay aligned with your business needs.",
      },
    ],
  },
  {
    subtitle: "Why Choose Us?",
    content: `
  `,
    bulletPoints: [
      {
        bulletTitle: "Transparency: ",
        bulletContent: "Clear communication at every stage of the process.",
      },
      {
        bulletTitle: "On-Time Delivery: ",
        bulletContent:
          "We adhere to the deadlines, ensuring timely completion.",
      },
      {
        bulletTitle: "Quality Assurance: ",
        bulletContent: "We don’t deliver until everything is perfect",
      },
      {
        bulletTitle: "Ongoing Support: ",
        bulletContent:
          "Post-launch services to ensure your project stays successful.",
      },
    ],
  },
  {
    subtitle: "Contact Us:",
    content: `
  `,
    bulletPoints: [
      {
        bulletTitle: "Email: ",
        bulletContent: "support@aadhyawebsolution.com",
      },
      {
        bulletTitle: "Phone: ",
        bulletContent: "+1 (443) 554‑7121",
      },
    ],
  },
  {
    subtitle: "",
    content: `By choosing Aadhya Web Solution, you are partnering with a team dedicated to delivering high-quality solutions that exceed expectations. We look forward to working with you!`,
  },
];

export const caseStudiesdata = [
  {
    projectName: "ecommerce",
    title: "Building a Scalable and User-Friendly eCommerce Platform",
    description:
      "We developed a full-featured eCommerce platform that not only simplified the shopping experience but also empowered the business with real-time analytics, secure payment integration, and easy inventory management. This helped our client boost sales, improve user engagement, and scale effortlessly as their customer base grew.",
    client: "ShopEase Pvt. Ltd.",
    industry: "Retail / eCommerce",
    location: "Bangalore, India",
    duration: "3 Months",
    path: "/pricing-ecommerce",
    services: [
      "eCommerce Web Development, UX/UI Design, Performance Optimization",
    ],
    platform: "Web",
    technologyStack: ["React, Node.js, MongoDB, Stripe API, AWS"],
    clientRequirements: [
      "Design a user-centric shopping experience",
      "Integrate secure payment gateway and cart functionality",
      "Enable product search with filters and recommendations",
      "Optimize for mobile responsiveness and speed",
      "Implement user and admin dashboards",
    ],
    approach: [
      {
        title: "Requirement Gathering",
        requirements: [
          "Identified business goals and user personas",
          "Researched competitors",
          "Defined feature priorities",
        ],
        icon: req,
      },
      {
        title: "Design and Prototyping",
        requirements: [
          "Built interactive wireframes and mockups",
          "Created responsive design system",
          "Focused on high-conversion layouts",
        ],
        icon: img,
      },
      {
        title: "Development",
        requirements: [
          "Developed frontend using React",
          "Implemented backend API using Node.js",
          "Integrated Stripe for payments",
        ],
        icon: dev,
      },
      {
        title: "Testing",
        requirements: [
          "Cross-browser and mobile testing",
          "Security and payment validations",
          "Load and speed testing",
        ],
        icon: test,
      },
      {
        title: "Deployment",
        requirements: [
          "Hosted on AWS EC2 with auto-scaling",
          "CI/CD via GitHub Actions",
          "Enabled monitoring using CloudWatch",
        ],
        icon: deploy,
      },
    ],
    challenges: [
      {
        title: "High Cart Abandonment",
        description: "Users dropped off at checkout.",
        solution:
          "Streamlined checkout flow, added guest checkout, and exit-intent popups.",
      },
      {
        title: "Scaling Product Catalog",
        description: "Handling 10,000+ products smoothly.",
        solution:
          "Used dynamic pagination, lazy loading, and optimized DB queries.",
      },
    ],
    results: {
      conversionRateIncrease: "42%",
      bounceRateDrop: "28%",
      salesGrowth: "3.5x in 6 months",
      userRetention: "80% returning customers",
    },
    testimonial: {
      quote:
        "The platform helped us reach new markets and significantly increased online revenue. Great job by the team!",
      author: "Anjali Mehra",
      position: "Co-Founder, ShopEase",
    },
  },
  {
    projectName: "mobile-apps",
    title: "Cross-Platform Mobile App for On-Demand Services",
    description:
      "A logistics-focused mobile application built for both iOS and Android to help customers track shipments, manage orders, and receive push updates. We focused on seamless real-time tracking, offline capability, and intuitive user interfaces, resulting in improved user retention and enhanced delivery operations.",
    client: "QuickFix Services",
    industry: "Home Services",
    location: "Mumbai, India",
    duration: "4 Months",
    path: "/pricing-mobile-apps",
    services: ["Mobile App Development, UX/UI, Firebase Integration"],
    platform: "iOS & Android",
    technologyStack: ["Flutter, Firebase, Google Maps API, Stripe"],
    clientRequirements: [
      "Develop app for Android and iOS",
      "Integrate GPS tracking and booking system",
      "Enable real-time service updates and chat",
      "Push notifications and rating system",
    ],
    approach: [
      {
        title: "Requirement Gathering",
        requirements: [
          "Interviewed service professionals and users",
          "Analyzed similar apps",
          "Defined app flow and architecture",
        ],
        icon: req,
      },
      {
        title: "Design and Prototyping",
        requirements: [
          "Built wireframes and clickable app mockups",
          "Used Material Design components",
          "Created an intuitive navigation system",
        ],
        icon: img,
      },
      {
        title: "Development",
        requirements: [
          "Developed in Flutter for cross-platform support",
          "Used Firebase for backend and real-time updates",
          "Integrated payment via Stripe",
        ],
        icon: dev,
      },
      {
        title: "Testing",
        requirements: [
          "Tested on physical devices",
          "Simulated low-network environments",
          "Usability testing with real users",
        ],
        icon: test,
      },
      {
        title: "Deployment",
        requirements: [
          "Deployed on Play Store and App Store",
          "Enabled crash reporting and analytics",
          "Ongoing updates through CI/CD",
        ],
        icon: deploy,
      },
    ],
    challenges: [
      {
        title: "Real-Time Tracking Accuracy",
        description: "Needed accurate GPS-based technician tracking.",
        solution:
          "Optimized Google Maps API integration with geofencing and device calibration.",
      },
      {
        title: "User Onboarding Drop-off",
        description: "Many users left during sign-up.",
        solution:
          "Simplified onboarding with social logins and walkthrough screens.",
      },
    ],
    results: {
      downloads: "100K+ in 90 days",
      customerSatisfaction: "4.8/5 rating",
      bookingsPerDay: "150+ avg",
      operationalEfficiency: "Reduced scheduling issues by 40%",
    },
    testimonial: {
      quote:
        "The mobile app transformed our service operations. Customers love the ease and speed. Highly recommended team!",
      author: "Ravi Sharma",
      position: "Founder, QuickFix",
    },
  },
  {
    projectName: "product-development",
    title: "End-to-End SaaS Product Development for HR Automation",
    description:
      "We created a robust SaaS product to automate internal workflows for a growing tech startup. The product featured custom dashboards, role-based access, workflow triggers, and analytics. This significantly reduced manual effort, improved task visibility, and accelerated the team's delivery pipeline.",
    client: "TeamOrbit Solutions",
    industry: "Human Resources",
    location: "Pune, India",
    duration: "6 Months",
    path: "/pricing-product-development",
    services: ["Product Design, SaaS Architecture, DevOps"],
    platform: "Web App (SaaS)",
    technologyStack: ["React, Node.js, PostgreSQL, AWS, Docker"],
    clientRequirements: [
      "HR dashboard with analytics and automation tools",
      "Role-based user access (Admin, HR, Employee)",
      "Attendance, payroll, and onboarding workflows",
      "Multi-tenant architecture for SaaS delivery",
    ],
    approach: [
      {
        title: "Requirement Gathering",
        requirements: [
          "Workshops with HR professionals",
          "Analyzed existing Excel-based processes",
          "Mapped automation opportunities",
        ],
        icon: req,
      },
      {
        title: "Design and Prototyping",
        requirements: [
          "Built UI prototypes using Figma",
          "Created user journeys and data flows",
          "Designed modular component library",
        ],
        icon: img,
      },
      {
        title: "Development",
        requirements: [
          "Implemented REST APIs in Node.js",
          "Used PostgreSQL for relational data",
          "Containerized with Docker for scalability",
        ],
        icon: dev,
      },
      {
        title: "Testing",
        requirements: [
          "Automated test suite using Jest",
          "Stress testing for large datasets",
          "Manual validation for all HR workflows",
        ],
        icon: test,
      },
      {
        title: "Deployment",
        requirements: [
          "CI/CD on AWS ECS",
          "Logging and monitoring with Datadog",
          "Regular updates via feature flags",
        ],
        icon: deploy,
      },
    ],
    challenges: [
      {
        title: "Handling Multi-Tenant Architecture",
        description: "Needed dynamic data isolation per client.",
        solution:
          "Used PostgreSQL schema separation and tenant-based authorization.",
      },
      {
        title: "Complex Workflow Automations",
        description: "Automating varied HR policies was difficult.",
        solution: "Created customizable rule engines for workflows.",
      },
    ],
    results: {
      productivityBoost: "2x faster HR task completion",
      supportTicketsDrop: "70% fewer queries",
      monthlyRecurringRevenue: "$40,000+ within 4 months",
      employeeOnboardingSpeed: "Reduced onboarding time by 60%",
    },
    testimonial: {
      quote:
        "Their team delivered a flawless SaaS product that’s transforming our client's HR operations. Truly professional and scalable.",
      author: "Sneha Kulkarni",
      position: "CTO, TeamOrbit",
    },
  },
  {
    projectName: "shopify",
    title: "Custom Shopify Store for Handmade Luxury Brand",
    description:
      "Our team delivered a high-converting Shopify storefront with a bespoke product configurator tailored to the client’s custom apparel business. Features included custom checkout logic, multilingual support, and third-party integrations. The project greatly improved conversion rates and simplified store operations.",
    client: "Mystiq Handcrafts",
    industry: "Fashion / Luxury Goods",
    location: "Delhi, India",
    duration: "1 Month",
    path: "/pricing-shopify",
    services: ["Shopify Theme Development, SEO, Custom App Integration"],
    platform: "Shopify",
    technologyStack: [
      "Shopify Liquid, HTML/CSS, JavaScript, Klaviyo, Shopify Apps",
    ],
    clientRequirements: [
      "Build a visually rich online store",
      "Integrate email marketing and Instagram feed",
      "Enable gift wrapping and custom order notes",
      "Implement multi-language and currency support",
    ],
    approach: [
      {
        title: "Requirement Gathering",
        requirements: [
          "Understood brand aesthetics and customer journey",
          "Defined product taxonomy and content blocks",
        ],
        icon: req,
      },
      {
        title: "Design and Prototyping",
        requirements: [
          "Used custom Liquid theme",
          "Designed mobile-first layout",
          "Set up dynamic product carousels",
        ],
        icon: img,
      },
      {
        title: "Development",
        requirements: [
          "Developed custom features in Liquid",
          "Integrated Klaviyo for marketing",
          "Connected apps for reviews, discounts, and analytics",
        ],
        icon: dev,
      },
      {
        title: "Testing",
        requirements: [
          "Responsive testing",
          "Conversion funnel testing",
          "Third-party plugin validation",
        ],
        icon: test,
      },
      {
        title: "Deployment",
        requirements: [
          "Live deployment with redirect setup",
          "Connected Google Analytics and Facebook Pixel",
          "Created admin training guides",
        ],
        icon: deploy,
      },
    ],
    challenges: [
      {
        title: "Premium Look Without Slowing Speed",
        description: "Heavy design impacted performance.",
        solution: "Used image compression and lazy loading for optimal speed.",
      },
    ],
    results: {
      increaseInSales: "4x in first quarter",
      customerEngagement: "45% higher session duration",
      reducedAbandonment: "Checkout abandonment dropped by 33%",
    },
    testimonial: {
      quote:
        "We were amazed by how beautiful and fast our new Shopify store is. It feels like luxury in digital form.",
      author: "Meghana Rao",
      position: "Founder, Mystiq Handcrafts",
    },
  },
  {
    projectName: "graphic-design",
    title: "Brand Identity & Graphic Design for Tech Startup",
    description:
      "We crafted a bold and consistent brand identity, complete with logo design, typography, color palettes, and a UI kit. Our graphic design work helped the startup establish a trustworthy digital presence, improving recognition and boosting investor confidence during early-stage fundraising.",
    client: "InnoByte Technologies",
    industry: "Technology / SaaS",
    location: "Hyderabad, India",
    duration: "3 Weeks",
    path: "/pricing-graphic-design",
    services: ["Logo Design, Branding, Marketing Collateral"],
    platform: "Print & Digital",
    technologyStack: ["Adobe Illustrator, Photoshop, Figma"],
    clientRequirements: [
      "Create a unique and scalable brand identity",
      "Design pitch deck for investor meetings",
      "Create social media templates and icons",
      "Build design system for internal product",
    ],
    approach: [
      {
        title: "Requirement Gathering",
        requirements: [
          "Brand discovery workshops",
          "Competitor analysis",
          "Visual tone setting",
        ],
        icon: img,
      },
      {
        title: "Design and Prototyping",
        requirements: [
          "Logo concepts and mood boards",
          "Brand guidelines documentation",
          "Sample application on packaging & web",
        ],
        icon: req,
      },
      {
        title: "Development",
        requirements: [
          "Finalized vector logos and fonts",
          "Created icons, banners, pitch decks",
          "Delivered brand asset kits",
        ],
        icon: dev,
      },
      {
        title: "Testing",
        requirements: [
          "Visual feedback from stakeholders",
          "Color consistency on print and digital",
        ],
        icon: test,
      },
      {
        title: "Deployment",
        requirements: [
          "Delivered assets in all formats",
          "Uploaded to shared brand folder",
        ],
        icon: deploy,
      },
    ],
    challenges: [
      {
        title: "Establishing a Unique Identity",
        description: "Client wanted a modern but distinct brand look.",
        solution: "Used iterative branding process with multiple review loops.",
      },
    ],
    results: {
      brandRecognition: "Featured in 3 startup showcases",
      investorInterest: "Helped raise ₹2.4Cr seed round",
      designSystem: "Accelerated internal UI mockups by 50%",
    },
    testimonial: {
      quote:
        "Their design brought our vision to life. The branding played a key role in our funding and launch success.",
      author: "Rahul Menon",
      position: "CEO, InnoByte",
    },
  },
];

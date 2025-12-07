import {image} from "../utils/media.js";

export const profile = {
    name: "Joynal Abedin",
    namePro: "Joynal A.",
    firstName: "Joynal",
    fullName: "Md. Joynal Abedin",
    shortName: "Joynal",
    role: "Senior Software Engineer",
    summary: "6+ years in full-stack development, system architecture, and database optimization",
    longSummary: "Results-driven Full-Stack Developer with 6+ years of experience building scalable, high-performance web applications. Skilled in PHP, Laravel, Node.js, React, and Next.js, with strong expertise in MySQL, PostgreSQL, and MongoDB. I focus on clean architecture, optimized performance, and secure API-driven solutions. Passionate about creating reliable systems that support real business growth.",
    phone: "+88 01785 893609",
    phoneValue: "+8801785893609",
    email: "joy.diu.cse@gmail.com",
    location: "Amin Bazar, Savar, Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/joynal-abedin-cse",
    github: "https://github.com/joydiucse",
    image: image('joy-square.jpg')
}

export const skills = [
    {
        category: "Programming Languages",
        icon:'code',
        items: [
            { title: "PHP", icon: "php" },
            { title: "JavaScript (ES6+)", icon: "js" },
            { title: "Python", icon: "python" },
            { title: "SQL", icon: "sql" },
            { title: "HTML5", icon: "html" },
            { title: "CSS3", icon: "css" },
            { title: "TypeScript", icon: "ts" }
        ]
    },
    {
        category: "Frameworks & Libraries",
        icon:'node',
        items: [
            { title: "Node.js", icon: "node" },
            { title: "Express.js", icon: "express" },
            { title: "React.js", icon: "react" },
            { title: "Next.js", icon: "next" },
            { title: "Laravel", icon: "laravel" },
            { title: "Redux", icon: "redux" },
            { title: "Tailwind CSS", icon: "tailwind" },
            { title: "Material-UI", icon: "mui" },
            { title: "Bootstrap", icon: "bootstrap" }
        ]
    },
    {
        category: "Architecture & Design",
        icon:'web',
        items: [
            { title: "Microservices", icon: "microservices" },
            { title: "RESTful APIs", icon: "api" },
            { title: "MVC", icon: "mvc" },
            { title: "Design Patterns", icon: "design" },
            { title: "System Design", icon: "system" },
            { title: "Scalable & Modular Architecture", icon: "architecture" }
        ]
    },
    {
        category: "Databases & Caching",
        icon:'database',
        items: [
            { title: "MySQL", icon: "mysql" },
            { title: "PostgreSQL", icon: "postgres" },
            { title: "MongoDB", icon: "mongodb" },
            { title: "Redis", icon: "redis" },
            { title: "Query Optimization", icon: "optimize" },
            { title: "Indexing", icon: "index" },
            { title: "ORM (Eloquent, Mongoose)", icon: "orm" },
            { title: "Data Modeling", icon: "data" }
        ]
    },
    {
        category: "DevOps & Cloud",
        icon:'git-fork',
        items: [
            { title: "Docker", icon: "docker" },
            { title: "Jenkins", icon: "jenkins" },
            { title: "Git", icon: "git" },
            { title: "GitHub Actions", icon: "github" },
            { title: "CI/CD", icon: "cicd" },
            { title: "AWS", icon: "aws" },
            { title: "Cloud Computing", icon: "cloud" },
            { title: "Infrastructure as Code (IaC)", icon: "iac" }
        ]
    },
    {
        category: "Testing & Methodologies",
        icon:'methodology',
        items: [
            { title: "Unit Testing", icon: "unit" },
            { title: "Integration Testing", icon: "integration" },
            { title: "End-to-End Testing", icon: "e2e" },
            { title: "TDD", icon: "tdd" },
            { title: "BDD", icon: "bdd" },
            { title: "Agile/Scrum", icon: "agile" },
            { title: "SDLC", icon: "sdlc" }
        ]
    },
    {
        category: "Third-Party Integrations",
        icon:'gear',
        items: [
            { title: "Payment Gateways", icon: "payment" },
            { title: "Logistics APIs (ZohoBooks, QuickBooks, Ebay, Nuport, Pathao)", icon: "logistics" },
            { title: "ChatGPT API", icon: "chatgpt" },
            { title: "ZKTeco API", icon: "zkteco" },
            { title: "REST/SOAP Services", icon: "soap" }
        ]
    }
];


export const experience = [
    {
        title: "Senior Software Engineer",
        company: "Nexdecade Technology Pvt. Ltd.",
        dates: "Apr 2025 — Present",
        location: "Panthapath, Dhaka, Bangladesh",
        summary: "Led architecture, development, and deployment of scalable web applications using Node.js, Laravel, React, and Next.js. Engineered microservices and REST APIs, optimized databases, implemented CI/CD pipelines, and strengthened security measures to improve performance, throughput, and compliance.",
        bullets: [
            "Led architecture, development, and deployment of high-traffic web applications using Node.js, Laravel, React, and Next.js, improving scalability and response time by 35%.",
            "Engineered microservices and RESTful APIs with API Gateway, asynchronous processing, and service orchestration, reducing latency by 40% and increasing throughput by 50%.",
            "Built CI/CD pipelines with Docker, Kubernetes, and Jenkins/GitHub Actions, automating build, test, and deployment, cutting release cycles by 50%.",
            "Strengthened security with AES-256 encryption, JWT, OAuth2, and RBAC, ensuring data integrity and compliance.",
            "Optimized MySQL, PostgreSQL, and MongoDB with indexing, query tuning, and caching strategies, boosting performance by 30%."
        ]
    },
    {
        title: "Software Engineer",
        company: "Nexdecade Technology Pvt. Ltd.",
        dates: "Aug 2023 — May 2025",
        location: "Panthapath, Dhaka, Bangladesh",
        summary: "Developed modular full-stack applications with Laravel, React, and Node.js, integrating REST APIs and third-party services. Optimized database performance, collaborated under Agile/Scrum, and implemented comprehensive testing to ensure high-quality, efficient, and maintainable systems.",
        bullets: [
            "Delivered modular full-stack applications with Laravel, React, and Node.js, following MVC and scalable design principles.",
            "Built and integrated RESTful APIs and third-party services (payment, analytics, messaging) to enhance system integration.",
            "Optimized MySQL queries and caching strategies, improving API response times by 35%.",
            "Collaborated under Agile/Scrum using Git and CI/CD, streamlining SDLC and sprint delivery.",
            "Implemented unit, integration, and regression testing with PHPUnit and Jest, achieving 95% coverage and reducing post-deployment bugs by 25%."
        ]
    },
    {
        title: "Web Developer",
        company: "MoveXCourier",
        dates: "Feb 2023 — Jul 2023",
        location: "Dhaka, Bangladesh",
        summary: "Built courier management and tracking web applications using Laravel, implementing secure authentication, role-based access control, and third-party integrations. Designed efficient database schemas and optimized queries to ensure reliable and performant systems.",
        bullets: [
            "Developed courier management and tracking web applications using Laravel MVC architecture.",
            "Implemented authentication, authorization, and role-based access control for secure data handling.",
            "Integrated third-party APIs (payment gateways, SMS) and optimized database queries and caching.",
            "Designed normalized relational database schemas ensuring data integrity and efficient queries."
        ]
    },
    {
        title: "Web Instructor",
        company: "Dhamrai Prince Polytechnic Institute",
        dates: "Sep 2019 — May 2023",
        location: "Dhamrai, Dhaka, Bangladesh",
        summary: "Developed accounting and student management systems with Laravel and PHP, implementing full-stack MVC features and deploying cloud-hosted applications. Taught SDLC, OOP, and modern web development, mentoring students on practical latestProjects.",
        bullets: [
            "Developed accounting and student management systems with Laravel, PHP, and MySQL, streamlining operations.",
            "Implemented full-stack MVC features including authentication, CRUD operations, and responsive UI.",
            "Deployed and maintained applications on cloud hosting, ensuring uptime and security compliance.",
            "Taught SDLC, OOP, and modern web development, mentoring students on real-world latestProjects."
        ]
    }
]

export const latestProjects = [
    {
        title: "Vehicle Tracking System (VTS)",
        dates: "Apr 2023 — Present",
        summary: "Full-stack Web Application",
        stack: ["React.js", "PHP", "MySQL", "Redis", "Docker"],
        btnBackground: "bg-blue-600",
        live: "#",
        image: image('projects/vts.png'),
        bullets: [
            "Developed 3 scalable VTS platforms using React.js and PHP with AES-256 encryption, RBAC, and ETL optimization.",
            "Boosted analytics and reporting performance by 35% using Redis caching and database optimization."
        ]
    },
    {
        title: "Saddher Moddhe E-commerce",
        dates: "Mar 2024 — Present",
        summary: "E-commerce Management System",
        stack: ["Next.js", "Node.js", "MongoDB", "Redis", "Nuport API"],
        btnBackground: "bg-black",
        live: "#",
        image: image('projects/saddher-moddhe.png'),
        bullets: [
            "Built full-stack e-commerce solution with Next.js and Node.js, integrating Nuport API for automated shipping.",
            "Optimized inventory management and order processing using Redis caching and MongoDB query tuning."
        ]
    },
    {
        title: "Ad Engine Optimization",
        dates: "Aug 2023 — Mar 2025",
        summary: "Advertising Management System",
        stack: ["Node.js", "MongoDB", "React.js", "Redis"],
        btnBackground: "bg-black/80",
        live: "#",
        image: image('projects/ads.png'),
        bullets: [
            "Refactored backend microservices and implemented VAST/VMAP protocols, improving ad delivery speed by 75%.",
            "Optimized MongoDB queries and Redis caching for high-throughput ad serving."
        ]
    },
    {
        title: "Newspaper Platform management",
        dates: "Feb 2023 — Jul 2023",
        summary: "Content Management System",
        stack: ["Next.js", "Laravel", "MySQL", "Python"],
        btnBackground: "bg-red-700",
        live: "#",
        image: image('projects/newspaper.png'),
        bullets: [
            "Developed full-stack CMS with Laravel and Next.js, including audio transcoding and automated workflows.",
            "Enhanced performance and scalability using MySQL optimization and caching strategies."
        ]
    },
    {
        title: "Nex Inventory Management",
        dates: "Sep 2022 — Jan 2023",
        summary: "Inventory Management System",
        stack: ["Laravel", "MySQL", "Redis", "ChatGPT API"],
        btnBackground: "bg-black/90",
        live: "#",
        image: image('projects/inventory.png'),
        bullets: [
            "Built inventory system with Laravel, integrating ChatGPT API and Redis caching for fast queries.",
            "Optimized MySQL queries and workflows, improving operational efficiency by 40%."
        ]
    }
]

export const education = [
    {
        institution: "Daffodil International University",
        location: "Dhaka, Bangladesh",
        degree: "Bachelor of Science in Computer Science and Engineering",
        details: "CGPA: 3.98/4.00",
        dates: "Jan 2019 — Jul 2022"
    },
    {
        institution: "Dhamrai Polytechnic Institute",
        location: "Dhamrai, Dhaka, Bangladesh",
        degree: "Diploma in Engineering, Computer Technology",
        details: "CGPA: 3.78/4.00",
        dates: "Jan 2019 — Jul 2022"
    },
    {
        institution: "Nalla Pulla Ideal Islamia Senior Madrasah",
        location: "Dhaka, Bangladesh",
        degree: "Secondary Dakhil Certificate",
        details: "CGPA: 4.63/5.00",
        dates: "2013"
    }
]

export const certifications = [
    {
        title: "AI in Product Management",
        issuer: "Interactive Cares Learning Center",
        year: "2024",
        bullets: ["AI-driven product strategy and market analysis techniques"]
    },
    {
        title: "Excellence in Project Development",
        issuer: "Atomic Energy Research Establishment",
        year: "2017",
        bullets: ["Awarded Top Project Management Award for Asset Management System"]
    },
    {
        title: "Industrial Training Program",
        issuer: "Bangladesh Atomic Energy Commission",
        year: "2017",
        bullets: ["Full-stack web development with HTML, CSS, JavaScript, PHP, MySQL"]
    },
    {
        title: "Programming Contests Participant",
        issuer: "International University of Business Agriculture and Technology",
        year: "2016",
        bullets: ["Competitive programming and advanced problem-solving skills"]
    },
    {
        title: "Writing English Course",
        issuer: "Salfur's, Savar Branch",
        year: "2014",
        bullets: ["Technical writing and business communication skills"]
    },
    {
        title: "Spoken English Course",
        issuer: "Salfur's, Savar Branch",
        year: "2013",
        bullets: ["Verbal communication and professional presentation training"]
    }
]

export const social = [
    {label: "Email", value:profile.email, href: `mailto:${profile.email}`},
    {label: "Phone", value:profile.phone, href: `tel:${profile?.phoneValue}`},
    {label: "LinkedIn", value:profile.linkedin, href: profile.linkedin},
    {label: "GitHub", value:profile.github, href: profile.github},
]



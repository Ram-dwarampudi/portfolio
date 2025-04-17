/**
 * Site Data
 * All the content for the portfolio website
 */

const siteData = {
    firstName: "John",
    lastName: "Doe",
    headline: "Full Stack Developer & UX Designer",
    summary: "Crafting beautiful digital experiences through code and design. Passionate about creating intuitive solutions that solve real-world problems.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=500",
    aboutImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=600&h=700",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    availability: "Available for freelance",
    education: "BS in Computer Science",
    resumeUrl: "#", // Link to resume download
    aboutPartOne: "I'm a passionate Full Stack Developer and UX Designer with over 5 years of experience creating modern web applications. I combine technical expertise with a keen eye for design to build solutions that are both functional and visually appealing.",
    aboutPartTwo: "My journey in tech began at Stanford University, where I earned my Computer Science degree. Since then, I've worked with startups and established companies alike, helping them bring their digital visions to life. When I'm not coding, you'll find me hiking trails, experimenting with new cooking recipes, or contributing to open-source projects.",
    
    // Education timeline
    education_history: [
        {
            degree: "BS in Computer Science",
            institution: "Stanford University",
            period: "2015 - 2019",
            type: "degree",
            description: "Focused on software engineering and algorithm design. Graduated with honors and completed a senior thesis on AI applications in healthcare."
        },
        {
            degree: "MS in Human-Computer Interaction",
            institution: "Massachusetts Institute of Technology",
            period: "2019 - 2021",
            type: "degree",
            description: "Specialized in UX research methods and interactive design. Published research paper on accessibility in mobile interfaces."
        },
        {
            degree: "UX Design Certification",
            institution: "Nielsen Norman Group",
            period: "2022",
            type: "certificate",
            description: "Completed comprehensive certification program covering user research, information architecture, and interaction design principles."
        }
    ],
    
    // Skills
    technicalSkills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React & React Native", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "UI/UX Design", level: 85 },
        { name: "Database (SQL/NoSQL)", level: 75 }
    ],
    
    softSkills: [
        "Communication",
        "Project Management",
        "Team Leadership",
        "Problem Solving",
        "Time Management",
        "Adaptability",
        "Creativity",
        "Client Relations"
    ],
    
    // Work experience
    experiences: [
        {
            position: "Senior Developer",
            company: "TechNova Inc.",
            period: "Jan 2020 - Present",
            location: "San Francisco, CA",
            description: "Leading a team of 5 developers to build modern web applications for enterprise clients. Responsible for architecture decisions, code reviews, and technical mentorship.",
            achievements: [
                "Reduced application load time by 40% through code optimization and lazy loading techniques",
                "Implemented CI/CD pipeline that decreased deployment time from hours to minutes",
                "Developed component library that increased development efficiency by 25%",
                "Led transition from monolithic architecture to microservices"
            ],
            technologies: ["React", "Node.js", "GraphQL", "AWS"]
        },
        {
            position: "Frontend Developer",
            company: "WebSphere Solutions",
            period: "Mar 2018 - Dec 2019",
            location: "Boston, MA",
            description: "Worked in an agile team developing responsive web applications and e-commerce platforms. Collaborated closely with design team to implement pixel-perfect interfaces.",
            achievements: [
                "Built reusable component library that was adopted across multiple projects",
                "Improved website accessibility to meet WCAG 2.1 AA standards",
                "Optimized website performance, achieving 95+ scores on Google Lighthouse",
                "Mentored junior developers and conducted regular knowledge sharing sessions"
            ],
            technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack"]
        },
        {
            position: "UX/UI Design Intern",
            company: "Creative Digital Agency",
            period: "May 2017 - Feb 2018",
            location: "New York, NY",
            description: "Assisted senior designers in creating user interfaces for web and mobile applications. Participated in user research and usability testing sessions.",
            achievements: [
                "Designed wireframes and prototypes for client projects",
                "Conducted user interviews and synthesized research findings",
                "Created style guides and design systems for consistent brand application",
                "Collaborated with development team to ensure design feasibility"
            ],
            technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"]
        }
    ],
    
    // Projects
    projects: [
        {
            title: "E-commerce Platform",
            description: "A fully-featured online store with product management, cart functionality, and payment processing.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "#",
            liveDemo: "#",
            type: "Full Stack"
        },
        {
            title: "Fitness Tracker",
            description: "Mobile application for tracking workouts, setting fitness goals, and monitoring progress over time.",
            image: "https://images.unsplash.com/photo-1540653403703-6102bc992072?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
            technologies: ["React Native", "Firebase", "Redux", "Charts"],
            github: "#",
            liveDemo: "#",
            type: "Mobile App"
        },
        {
            title: "Task Management",
            description: "Collaborative task management system with real-time updates, assignments, and deadline tracking.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
            technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
            github: "#",
            liveDemo: "#",
            type: "Web App"
        }
    ],
    
    // Social links
    social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        dribbble: "https://dribbble.com"
    },
    
    // Other links
    githubProjectsUrl: "https://github.com?tab=repositories"
};
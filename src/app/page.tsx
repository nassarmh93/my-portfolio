import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ContactCard from '@/components/ContactCard';
import SkillTag from '@/components/SkillTag';
import SectionHeading from '@/components/SectionHeading';
import InteractiveGridBackground from '@/components/InteractiveGridBackground';

// Define skill categories with their respective skills and colors
const skillCategories = [
    {
        title: 'Business & Odoo',
        skills: ['Odoo ERP', 'Business Analysis', 'Requirements Gathering', 'Process Optimization', 'Client Consultation', 'Project Management', 'Change Management'],
        bgColor: 'bg-light',
        textColor: 'text-teal'
    },
    {
        title: 'Technical',
        skills: ['Python', 'XML', 'JavaScript', 'PostgreSQL', 'ORM', 'API Integration', 'Git'],
        bgColor: 'bg-light',
        textColor: 'text-teal'
    },
    {
        title: 'Cybersecurity (Learning)',
        skills: ['Network Security', 'Vulnerability Assessment', 'Security Frameworks', 'Risk Management', 'Compliance'],
        bgColor: 'bg-light',
        textColor: 'text-teal'
    }
];

// Project data
const projects = [
    {
        title: 'Enterprise ERP Implementation',
        description: 'Led the implementation of a comprehensive Odoo ERP system for a manufacturing client, integrating inventory, sales, accounting, and production modules. Developed custom modules to meet specific business requirements.',
        gradient: 'from-teal to-slate',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        tags: ['Odoo', 'Python', 'Business Analysis'],
        tagColor: 'blue'
    },
    {
        title: 'Multi-System Integration Project',
        description: 'Successfully integrated Odoo ERP with external CRM and e-commerce platforms for a retail client, creating a unified data flow across all business systems. Implemented automated synchronization of customers, inventory, and sales data.',
        gradient: 'from-slate to-gray',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        tags: ['API Development', 'Data Migration', 'System Architecture'],
        tagColor: 'indigo'
    },
    {
        title: 'Custom Odoo Modules',
        description: 'Developed specialized Odoo modules to meet unique business requirements for various clients. Created custom reports, automated workflows, and integrated external systems to enhance operational capabilities.',
        gradient: 'from-teal to-gray',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        tags: ['Python', 'XML', 'JavaScript', 'API Integration'],
        tagColor: 'green'
    },
    {
        title: 'Process Optimization & Training',
        description: 'Analyzed business workflows and optimized processes for efficiency through effective Odoo implementation. Conducted user training sessions and created comprehensive documentation to ensure successful adoption.',
        gradient: 'from-gray to-slate-dark',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
        tags: ['Business Analysis', 'Training', 'Documentation', 'Change Management'],
        tagColor: 'orange'
    }
];

// Contact options data
const contactOptions = [
    {
        title: 'Email Me',
        link: 'mailto:nassarmh93@gmail.com',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-bright mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/nassarmh93',
        isExternal: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-bright mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
        )
    },
    {
        title: 'Resume',
        link: '/resume-mohammad-nassar.pdf',
        isDownload: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-bright mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    }
];

export default function Home() {
    return (
        <main className="bg-transparent relative min-h-screen">
            {/* Hero Section */}
            <HeroSection
                name="Mohammad Nassar"
                title="Odoo Specialist & Business Consultant"
                description="Bridging business needs with technical solutions - specializing in Odoo implementations and transitioning to cybersecurity."
            />

            {/* About Section */}
            <section id="about" className="py-20 bg-transparent relative">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <SectionHeading>
                        <span className="relative">
                            About Me
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal"></span>
                        </span>
                    </SectionHeading>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="animate-on-scroll fade-in-up card-3d p-8 rounded-xl bg-white/20 dark:bg-slate/20 backdrop-blur-sm shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-teal-bright">My Background</h3>
                            <p className="text-slate dark:text-light mb-4">
                                I&apos;m a business professional with a strong technical foundation in Odoo ERP systems.
                                With experience as both an Odoo developer and functional consultant, I&apos;ve helped
                                businesses optimize their operations through effective implementation of business management
                                solutions.
                            </p>
                            <p className="text-slate dark:text-light mb-4">
                                My unique combination of business acumen and technical skills allows me to translate complex
                                business requirements into functional solutions. I excel at understanding client needs and
                                configuring systems that drive operational efficiency.
                            </p>
                            <p className="text-slate dark:text-light">
                                I&apos;m currently expanding my expertise into cybersecurity, as I believe secure systems
                                are the foundation of successful digital business operations. My goal is to help
                                organizations protect their digital assets while maintaining operational excellence.
                            </p>
                        </div>

                        {/* Skills section without scrollable container */}
                        <div className="card glass p-6 rounded-lg bg-white/10 dark:bg-slate/10 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-teal-bright">My Skills</h3>
                            {skillCategories.map((category) => (
                                <div key={category.title} className="mb-8 last:mb-0">
                                    <h4 className="font-medium text-slate-dark dark:text-white mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-teal rounded-full mr-2"></span>
                                        {category.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <SkillTag
                                                key={skill}
                                                bgColor={category.bgColor}
                                                textColor={category.textColor}
                                            >
                                                {skill}
                                            </SkillTag>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-transparent relative">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <SectionHeading>
                        <span className="relative">
                            Projects & Experience
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal"></span>
                        </span>
                    </SectionHeading>

                    {/* Projects grid without scrollable container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                gradient={project.gradient}
                                icon={project.icon}
                                tags={project.tags}
                                tagColor={project.tagColor}
                                animationDelay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-transparent relative">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <SectionHeading>
                        <span className="relative">
                            Get In Touch
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal"></span>
                        </span>
                    </SectionHeading>

                    <div className="max-w-3xl mx-auto card glass p-8 rounded-xl bg-white/10 dark:bg-slate/10 backdrop-blur-sm shadow-lg animate-on-scroll fade-in-up">
                        <p className="text-slate dark:text-light text-lg text-center mb-8">
                            If you&apos;re looking for someone who understands both business
                            processes and technical implementation with a growing focus on security, I&apos;d love to connect.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                            {contactOptions.map((option, index) => (
                                <ContactCard
                                    key={option.title}
                                    title={option.title}
                                    link={option.link}
                                    icon={option.icon}
                                    isExternal={option.isExternal}
                                    isDownload={option.isDownload}
                                    animationDelay={index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
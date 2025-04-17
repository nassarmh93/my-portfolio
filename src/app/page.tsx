import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
            {/* Hero Section */}
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Name</h1>
                <h2 className="text-xl md:text-2xl mb-8">Business Analyst & Odoo Specialist</h2>

                <p className="text-lg mb-8">
                    Bridging business needs with technical solutions - specializing in Odoo implementations and
                    transitioning to cybersecurity.
                </p>

                <div className="flex gap-4">
                    <Link href="#projects"
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        View Projects
                    </Link>
                    <Link href="#contact"
                          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="w-full max-w-5xl py-16">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="mb-4">
                            I&apos;m a business professional with a strong technical foundation in Odoo ERP systems.
                            With experience as both an Odoo developer and functional consultant, I&apos;ve helped
                            businesses optimize their operations through effective implementation of business management
                            solutions.
                        </p>
                        <p className="mb-4">
                            My unique combination of business acumen and technical skills allows me to translate complex
                            business requirements into functional solutions. I excel at understanding client needs and
                            configuring systems that drive operational efficiency.
                        </p>
                        <p>
                            I&apos;m currently expanding my expertise into cybersecurity, as I believe secure systems
                            are the foundation of successful digital business operations. My goal is to help
                            organizations protect their digital assets while maintaining operational excellence.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">My Skills</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="font-medium text-sm mb-2 w-full">Business & Odoo:</span>
                            {['Odoo ERP', 'Business Analysis', 'Requirements Gathering', 'Process Optimization', 'Client Consultation', 'Project Management', 'Change Management'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="font-medium text-sm mb-2 w-full">Technical:</span>
                            {['Python', 'XML', 'JavaScript', 'PostgreSQL', 'ORM', 'API Integration', 'Git'].map((skill) => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="font-medium text-sm mb-2 w-full">Cybersecurity (Learning):</span>
                            {['Network Security', 'Vulnerability Assessment', 'Security Frameworks', 'Risk Management', 'Compliance'].map((skill) => (
                                <span key={skill}
                                      className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-sm">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="w-full max-w-5xl py-16">
                <h2 className="text-3xl font-bold mb-6">Projects & Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project Card 1 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">Odoo Implementation</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Enterprise ERP Implementation</h3>
                            <p className="text-gray-600 mb-4">
                                Led the implementation of a comprehensive Odoo ERP system for a manufacturing client,
                                integrating inventory, sales, accounting, and production modules. Developed custom
                                modules to meet specific business requirements.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Odoo</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Python</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Business Analysis</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">Cybersecurity Project</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">ERP Security Audit & Enhancement</h3>
                            <p className="text-gray-600 mb-4">
                                Conducted a comprehensive security audit of an Odoo implementation, identifying
                                vulnerabilities and implementing security measures to protect sensitive business data.
                                Created documentation and training for secure system use.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Security Assessment</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Access Controls</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Data Protection</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">Custom Development</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Custom Odoo Modules</h3>
                            <p className="text-gray-600 mb-4">
                                Developed specialized Odoo modules to meet unique business requirements for various
                                clients. Created custom reports, automated workflows, and integrated external systems to
                                enhance operational capabilities.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Python</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">XML</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">JavaScript</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">API Integration</span>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 4 */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-100 h-48 flex items-center justify-center">
                            <span className="text-gray-400">Business Consulting</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">Process Optimization & Training</h3>
                            <p className="text-gray-600 mb-4">
                                Analyzed business workflows and optimized processes for efficiency through effective
                                Odoo implementation. Conducted user training sessions and created comprehensive
                                documentation to ensure successful adoption.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Business Analysis</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Training</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Documentation</span>
                                <span className="px-2 py-1 bg-gray-100 rounded text-xs">Change Management</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full max-w-5xl py-16">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-6">
                    I&apos;m currently seeking opportunities that bridge business operations with cybersecurity,
                    particularly in ERP environments. If you&apos;re looking for someone who understands both business
                    processes and technical implementation with a growing focus on security, I&apos;d love to connect.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                    <a
                        href="mailto:your.email@example.com"
                        className="px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 border border-gray-300 rounded text-center hover:bg-gray-100 transition"
                    >
                        Download Resume
                    </a>
                </div>
            </section>
        </main>
    )
}
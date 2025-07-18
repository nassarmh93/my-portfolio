import { ReactNode } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    gradient: string;
    icon: ReactNode;
    tags: string[];
    tagColor: string;
    animationDelay?: number;
}

export default function ProjectCard({
                                        title,
                                        description,
                                        gradient,
                                        icon,
                                        tags,
                                        tagColor,
                                        animationDelay = 0
                                    }: ProjectCardProps) {
    const animationStyle = {
        animationDelay: `${animationDelay}ms`
    };

    // Tag background color mapping
    const tagColorMap: Record<string, string> = {
        blue: 'bg-light/0 text-teal-bright',
        indigo: 'bg-light/0 text-teal-bright',
        green: 'bg-light/0 text-teal-bright',
        orange: 'bg-light/0 text-teal-bright',
        red: 'bg-light/0 text-teal-bright',
        purple: 'bg-light/0 text-teal-bright',
        teal: 'bg-light/0 text-teal-bright',
    };

    const tagClasses = tagColorMap[tagColor] || 'bg-light/0 text-teal';

    return (
        <div
            className="bg-white/0 dark:bg-slate/0  rounded-lg overflow-hidden shadow-lg hover-lift animate-on-scroll fade-in-up"
            style={animationStyle}
        >
            {/* Project header with icon */}
            <div className={`h-48 bg-linear-120 ${gradient} flex items-center justify-center text-white relative z-10`}>
                {icon}
            </div>

            {/* Project content */}
            <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-slate-dark dark:text-white">{title}</h3>
                <p className="text-slate mb-4 dark:text-light">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-2 py-1 ${tagClasses} rounded text-xs font-medium `}
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
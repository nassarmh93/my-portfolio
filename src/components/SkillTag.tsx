import { ReactNode } from 'react';

interface SkillTagProps {
    children: ReactNode;
    bgColor?: string;
    textColor?: string;
}

export default function SkillTag({
                                     children,
                                     bgColor = 'bg-light',
                                     textColor = 'text-teal'
                                 }: SkillTagProps) {
    return (
        <span className={`px-3 py-1 ${bgColor} ${textColor} rounded-full text-sm`}>
      {children}
    </span>
    );
}
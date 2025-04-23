import { ReactNode } from 'react';

interface ScrollableContainerProps {
    children: ReactNode;
    className?: string;
    maxHeight?: string;
    id?: string;
}

/**
 * A reusable container component with custom scrollbar styling
 */
export default function ScrollableContainer({
                                                children,
                                                className = '',
                                                maxHeight = '80vh',
                                                id
                                            }: ScrollableContainerProps) {
    return (
        <div
            id={id}
            className={`overflow-auto custom-scrollbar ${className}`}
            style={{ maxHeight }}
            aria-label="Scrollable content"
        >
            {children}
        </div>
    );
}
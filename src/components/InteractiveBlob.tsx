"use client";

interface InteractiveBlobProps {
    size?: number;
    colors?: string[];
    className?: string;
}

export default function InteractiveBlob({
                                            size = 600,
                                            colors = ["#124E66", "#2E3944", "#748092"],
                                            className = ""
                                        }: InteractiveBlobProps) {
    // Static SVG content with CSS animations
    const svgContent = (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-float"
        >
            <defs>
                <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    {colors.map((color, index) => (
                        <stop
                            key={index}
                            offset={`${index * 100 / (colors.length - 1)}%`}
                            stopColor={color}
                            stopOpacity={index === 0 ? "0.7" : index === colors.length - 1 ? "0.1" : "0.5"}
                        />
                    ))}
                </linearGradient>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
                </filter>
            </defs>

            {/* Main blob with pulse animation */}
            <path
                d="M362.9,330.5c-21.3,43.4-67.2,72.1-111.3,78.2c-44.1,6-86.3-10.7-124.4-37.6c-38.1-27-72.1-64.1-76.3-106.4
        c-4.3-42.4,21.3-89.9,61.1-116.4C151.9,121.7,205.9,116,253.6,131s89.2,50.9,110.6,94.3C385.5,268.8,384.2,287.1,362.9,330.5z"
                fill="url(#blob-gradient)"
                filter="url(#blur)"
                className="animate-pulse"
            />

            {/* Secondary blobs with float animation */}
            <path
                d="M282.9,270.5c-16.3,33.4-52.2,52.1-86.3,58.2c-34.1,6-66.3-5.7-94.4-22.6c-28.1-17-52.1-39.1-56.3-66.4
        c-4.2-27.4,11.3-59.9,41.1-76.4C117.9,146.7,155.9,146,193.6,156s69.2,30.9,80.6,59.3C285.5,238.8,299.2,237.1,282.9,270.5z"
                fill="url(#blob-gradient)"
                filter="url(#blur)"
                opacity="0.7"
                className="animate-float"
                style={{ animationDelay: '0.5s' }}
            />

            <path
                d="M322.9,290.5c-11.3,23.4-37.2,42.1-61.3,48.2c-24.1,6-46.3-0.7-64.4-12.6c-18.1-12-32.1-29.1-36.3-51.4
        c-4.2-22.4,1.3-49.9,21.1-61.4C202.9,201.7,230.9,206,253.6,216s45.2,25.9,56.6,44.3C321.5,278.8,334.2,267.1,322.9,290.5z"
                fill="url(#blob-gradient)"
                filter="url(#blur)"
                opacity="0.5"
                className="animate-float"
                style={{ animationDelay: '1s' }}
            />
        </svg>
    );

    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{ isolation: 'isolate' }}
        >
            <div className="absolute inset-0 pointer-events-none select-none">
                {svgContent}
            </div>
        </div>
    );
}
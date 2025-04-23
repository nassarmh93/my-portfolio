"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface Ripple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    startTime: number;
    duration: number;
    strength: number;
}

interface InteractiveGridBackgroundProps {
    className?: string;
    intensity?: number;
    density?: 'low' | 'medium' | 'high';
    colors?: string[];
    respectReducedMotion?: boolean;
    hoverRadius?: number;
    hoverIntensity?: number;
}

export default function InteractiveGridBackground({
                                                      className = "",
                                                      intensity = 0.7,
                                                      density = 'medium',
                                                      colors = ["#124E66", "#2E3944", "#748092", "#D3D9D4"],
                                                      respectReducedMotion = true,
                                                      hoverRadius = 45,
                                                      hoverIntensity = 0.1
                                                  }: InteractiveGridBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef<number | null>(null);
    const timeRef = useRef<number>(0);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const ripples = useRef<Ripple[]>([]);
    const isInitialized = useRef(false);

    // Performance optimization - throttle mouse move
    const throttleRef = useRef<number | null>(null);

    // Convert hex color to RGB with error checking
    const hexToRgb = (hex: string) => {
        try {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 0, g: 0, b: 0 };
        } catch (e) {
            console.error("Error parsing color:", e);
            return { r: 0, g: 0, b: 0 };
        }
    };

    // Check for reduced motion preference
    useEffect(() => {
        if (respectReducedMotion && typeof window !== 'undefined') {
            try {
                const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
                setPrefersReducedMotion(mediaQuery.matches);

                const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
                mediaQuery.addEventListener('change', handleChange);
                return () => mediaQuery.removeEventListener('change', handleChange);
            } catch (e) {
                console.error("Error setting up reduced motion listener:", e);
            }
        }
    }, [respectReducedMotion]);

    // Determine grid size based on density
    const getGridSize = useCallback(() => {
        switch(density) {
            case 'low': return { rows: 60, cols: 100 };
            case 'high': return { rows: 120, cols: 200 };
            case 'medium':
            default: return { rows: 80, cols: 140 };
        }
    }, [density]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            try {
                if (canvasRef.current) {
                    const canvas = canvasRef.current;
                    const rect = canvas.getBoundingClientRect();

                    // Set canvas dimensions to match display size
                    canvas.width = rect.width;
                    canvas.height = rect.height;

                    setCanvasSize({ width: rect.width, height: rect.height });
                }
            } catch (e) {
                console.error("Error handling resize:", e);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial setup
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Create a new ripple
    const createRipple = useCallback((x: number, y: number) => {
        try {
            // Maximum radius based on canvas size and intensity
            const maxRadius = Math.min(canvasSize.width, canvasSize.height) * 0.07;

            const newRipple: Ripple = {
                x,
                y,
                radius: 1,
                maxRadius,
                startTime: Date.now(),
                duration: 1500,
                strength: 1 * intensity
            };

            // Limit the number of active ripples for performance
            if (ripples.current.length > 5) {
                ripples.current = ripples.current.slice(-5);
            }

            ripples.current.push(newRipple);
        } catch (e) {
            console.error("Error creating ripple:", e);
        }
    }, [canvasSize, intensity]);

    // Handle document-level click events and mouse movement
    useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            if (prefersReducedMotion) return;

            try {
                if (canvasRef.current) {
                    const rect = canvasRef.current.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    // Only create ripple if coordinates are within canvas bounds
                    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                        createRipple(x, y);
                    }
                }
            } catch (e) {
                console.error("Error handling click:", e);
            }
        };

        // Throttled mouse move handler for better performance
        const handleMouseMove = (e: MouseEvent) => {
            if (prefersReducedMotion) return;

            // Throttle the mouse move to every 30ms for performance
            if (throttleRef.current !== null) return;

            throttleRef.current = window.setTimeout(() => {
                throttleRef.current = null;

                try {
                    if (canvasRef.current) {
                        const rect = canvasRef.current.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        // Update mouse position if within canvas bounds
                        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                            mousePos.current = { x, y };
                        } else {
                            // If mouse leaves canvas, set position far away
                            mousePos.current = { x: -1000, y: -1000 };
                        }
                    }
                } catch (e) {
                    console.error("Error handling mouse move:", e);
                }
            }, 30);
        };

        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('mousemove', handleMouseMove);

            if (throttleRef.current !== null) {
                clearTimeout(throttleRef.current);
                throttleRef.current = null;
            }
        };
    }, [prefersReducedMotion, canvasSize, createRipple]);

    // Main animation loop
    useEffect(() => {
        if (!canvasRef.current || canvasSize.width === 0) return;

        try {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d', { alpha: true });
            if (!ctx) return;

            const { rows, cols } = getGridSize();

            // Ensure we have at least one valid color
            const safeColors = colors.length > 0 ? colors : ["#124E66"];
            const rgbColors = safeColors.map(hexToRgb);

            // Calculate cell sizes
            const cellWidth = canvas.width / cols;
            const cellHeight = canvas.height / rows;
            const basePixelSize = Math.min(cellWidth, cellHeight) * 0.9;

            let lastTime = 0;
            isInitialized.current = true;

            const animate = (time: number) => {
                try {
                    // Calculate delta time
                    if (lastTime === 0) lastTime = time;
                    const deltaTime = time - lastTime;
                    lastTime = time;

                    // Update time reference
                    timeRef.current += deltaTime * 0.001; // Convert to seconds

                    // Clear canvas with transparent background
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw ambient background
                    for (let y = 0; y < rows; y++) {
                        for (let x = 0; x < cols; x++) {
                            // Calculate position
                            const posX = x * cellWidth + cellWidth / 2;
                            const posY = y * cellHeight + cellHeight / 2;

                            // Default pixel properties
                            let pixelSize = basePixelSize * 0.9;
                            let opacity = 0.04;
                            let colorIndex = 0;
                            let isAnimated = false; // Flag to track if this pixel is affected by animation

                            // Calculate distance from mouse position for hover effect
                            const dx = posX - mousePos.current.x;
                            const dy = posY - mousePos.current.y;
                            const distanceFromMouse = Math.sqrt(dx * dx + dy * dy);

                            // Apply hover effect if pixel is within hover radius
                            if (distanceFromMouse < hoverRadius) {
                                isAnimated = true; // This pixel is affected by hover

                                // Calculate hover intensity based on distance
                                const hoverFactor = 1 - (distanceFromMouse / hoverRadius);

                                // Apply subtle pulsing effect with time
                                const pulseEffect = Math.sin(timeRef.current * 3) * 0.5 + 0.5;

                                // Apply hover effect to pixel properties
                                pixelSize = basePixelSize * (0.9 + hoverFactor * hoverIntensity * 0.6 * pulseEffect);
                                opacity = 0.1 + hoverFactor * hoverIntensity * 0.5;

                                // Change color based on distance from mouse
                                if (rgbColors.length > 1) {
                                    const rawIndex = Math.floor(hoverFactor * pulseEffect * rgbColors.length);
                                    colorIndex = Math.min(Math.max(0, rawIndex), rgbColors.length - 1);
                                }
                            }

                            // Process active ripples
                            if (ripples.current.length > 0) {
                                const currentTime = Date.now();
                                const activeRipples: Ripple[] = [];

                                // Check each ripple's effect on this pixel
                                ripples.current.forEach(ripple => {
                                    // Calculate ripple age and progress
                                    const rippleAge = currentTime - ripple.startTime;
                                    const progress = Math.min(1, rippleAge / ripple.duration);

                                    // Skip completed ripples
                                    if (progress >= 1) return;

                                    // Ease out function
                                    const easeOutExpo = 1 - Math.pow(2, -10 * progress);
                                    ripple.radius = ripple.maxRadius * easeOutExpo;

                                    // Calculate distance from ripple center
                                    const dx = posX - ripple.x;
                                    const dy = posY - ripple.y;
                                    const distance = Math.sqrt(dx * dx + dy * dy);

                                    // Width of the ripple ring
                                    const rippleWidth = ripple.maxRadius * 0.1;

                                    // Check if pixel is within the ripple ring
                                    const innerRadius = Math.max(0, ripple.radius - rippleWidth);
                                    const outerRadius = ripple.radius + rippleWidth * 0.5;

                                    if (distance >= innerRadius && distance <= outerRadius) {
                                        isAnimated = true; // This pixel is affected by ripple

                                        // Calculate how close to the center of the ring
                                        const distFromRing = Math.abs(distance - ripple.radius);

                                        // Calculate ripple effect strength
                                        const wavePhase = (distFromRing / rippleWidth) * Math.PI * 2;
                                        const waveAmplitude = Math.sin(wavePhase) * ripple.strength * (1 - progress * 0.5);

                                        // Boost pixel size
                                        pixelSize = basePixelSize * (1 + waveAmplitude * 2.5);

                                        // Higher opacity
                                        opacity = Math.max(opacity, 0.3 + waveAmplitude * 0.7);

                                        // Color change
                                        if (rgbColors.length > 0) {
                                            const normalizedAmplitude = Math.max(0, Math.min(1, (waveAmplitude + 1) / 2));
                                            const rawIndex = Math.floor(normalizedAmplitude * rgbColors.length);
                                            colorIndex = Math.min(Math.max(0, rawIndex), rgbColors.length - 1);
                                        }
                                    }

                                    // Keep active ripples
                                    activeRipples.push(ripple);
                                });

                                // Update ripples array
                                ripples.current = activeRipples;
                            }

                            // Apply final pixel properties with safety check
                            const colorObj = rgbColors[colorIndex];
                            if (colorObj) {
                                if (isAnimated) {
                                    // Draw dollar sign for animated pixels
                                    ctx.fillStyle = `rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${opacity})`;
                                    ctx.font = `${pixelSize}px Arial`;
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText('$', posX, posY);
                                } else {
                                    // Draw rectangles for background pixels
                                    ctx.fillStyle = `rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${opacity})`;
                                    ctx.beginPath();
                                    ctx.rect(
                                        posX - pixelSize / 2,
                                        posY - pixelSize / 2,
                                        pixelSize,
                                        pixelSize
                                    );
                                    ctx.fill();
                                }
                            }
                        }
                    }

                    // Continue animation loop
                    animationFrameRef.current = requestAnimationFrame(animate);
                } catch (e) {
                    console.error("Error in animation loop:", e);
                    // Try to recover by setting up another animation frame
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            };

            // Start animation
            animationFrameRef.current = requestAnimationFrame(animate);

            // Cleanup
            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                isInitialized.current = false;
            };
        } catch (e) {
            console.error("Error setting up animation:", e);
        }
    }, [canvasSize, colors, prefersReducedMotion, hoverRadius, hoverIntensity, getGridSize]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 overflow-hidden ${className}`}
            style={{
                zIndex: -1,
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                cursor: 'pointer'
            }}
            aria-hidden="true"
        />
    );
}
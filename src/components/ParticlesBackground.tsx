"use client";

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    originalSize: number;
    speedX: number;
    speedY: number;
    color: string;
    alpha: number;
}

interface ParticlesBackgroundProps {
    count?: number;
    colors?: string[];
    minSize?: number;
    maxSize?: number;
    speed?: number;
    className?: string;
}

export default function ParticlesBackground({
                                                count = 50,
                                                colors = ["#124E66", "#748092", "#D3D9D4"],
                                                minSize = 1,
                                                maxSize = 4,
                                                speed = 0.5,
                                                className = ""
                                            }: ParticlesBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    // Fix: Initialize with null instead of undefined
    const requestIdRef = useRef<number | null>(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const isMouseMovingRef = useRef(false);
    const lastMouseMoveTimeRef = useRef(0);

    // Initialize particles with improved distribution
    const initParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = [];

        for (let i = 0; i < count; i++) {
            const size = minSize + Math.random() * (maxSize - minSize);
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: size,
                originalSize: size, // Store original size for ripple effect
                speedX: (Math.random() - 0.5) * speed,
                speedY: (Math.random() - 0.5) * speed,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 0.2 + Math.random() * 0.5 // Higher alpha for better visibility
            });
        }

        particlesRef.current = particles;
    }, [count, colors, minSize, maxSize, speed]);

    // Update particles with enhanced mouse interaction
    const updateParticles = useCallback((width: number, height: number) => {
        const particles = particlesRef.current;
        const mouseInfluenceRadius = 150; // Larger radius for better visibility
        const mouseRepelStrength = 0.3; // Stronger effect
        const currentTime = Date.now();

        // Auto-disable mouse effect after 2 seconds of no movement
        if (currentTime - lastMouseMoveTimeRef.current > 2000) {
            isMouseMovingRef.current = false;
        }

        particles.forEach(particle => {
            // Move particles
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Mouse influence (repel particles with wave-like effect)
            if (isMouseMovingRef.current) {
                const dx = particle.x - mousePositionRef.current.x;
                const dy = particle.y - mousePositionRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseInfluenceRadius) {
                    // Create wave-like effect by adjusting size and speed
                    const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
                    particle.speedX += dx / (distance || 1) * force * mouseRepelStrength;
                    particle.speedY += dy / (distance || 1) * force * mouseRepelStrength;

                    // Increase size for particles affected by mouse (wave effect)
                    particle.size = particle.originalSize * (1 + force * 2);
                } else {
                    // Gradually return to original size
                    particle.size = particle.originalSize + (particle.size - particle.originalSize) * 0.9;
                }
            } else {
                // Gradually return to original size
                particle.size = particle.originalSize + (particle.size - particle.originalSize) * 0.9;
            }

            // Limit speed for stability
            const maxSpeed = speed * 3;
            const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
            if (currentSpeed > maxSpeed) {
                particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
                particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
            }

            // Boundary check with bounce and wrap-around
            if (particle.x < 0) {
                particle.x = 0;
                particle.speedX *= -1;
            } else if (particle.x > width) {
                particle.x = width;
                particle.speedX *= -1;
            }

            if (particle.y < 0) {
                particle.y = 0;
                particle.speedY *= -1;
            } else if (particle.y > height) {
                particle.y = height;
                particle.speedY *= -1;
            }

            // Add some randomness to prevent stagnation
            if (Math.random() < 0.01) {
                particle.speedX += (Math.random() - 0.5) * 0.1;
                particle.speedY += (Math.random() - 0.5) * 0.1;
            }
        });
    }, [speed]);

    // Draw particles with enhanced visuals
    const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
        const particles = particlesRef.current;

        // Draw particles with enhanced glow
        particles.forEach(particle => {
            // Create glow effect
            const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 2
            );

            const colorWithAlpha = particle.color + Math.floor(particle.alpha * 255).toString(16).padStart(2, '0');
            gradient.addColorStop(0, colorWithAlpha);
            gradient.addColorStop(1, particle.color + '00'); // Transparent at the edge

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        });

        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;

                if (distance < maxDistance) {
                    // Fade connections based on distance
                    const opacity = (1 - distance / maxDistance) * 0.5;
                    ctx.strokeStyle = `rgba(18, 78, 102, ${opacity})`;
                    ctx.lineWidth = opacity * 1.5;

                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }, []);

    // Animation loop
    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        updateParticles(canvas.width, canvas.height);
        drawParticles(ctx);

        // Store the ID as a number in the ref
        requestIdRef.current = window.requestAnimationFrame(animate);
    }, [updateParticles, drawParticles]);

    // Initial setup and resize handling with improved canvas sizing
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            // Use the client bounds for more accurate sizing
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            // Reinitialize particles when canvas resizes
            initParticles(canvas.width, canvas.height);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Start animation
        requestIdRef.current = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (requestIdRef.current !== null) {
                cancelAnimationFrame(requestIdRef.current);
                requestIdRef.current = null;
            }
        };
    }, [initParticles, animate]);

    // Track mouse movement with correct positioning relative to canvas
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (canvas) {
                const rect = canvas.getBoundingClientRect();
                mousePositionRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
                isMouseMovingRef.current = true;
                lastMouseMoveTimeRef.current = Date.now();
            }
        };

        // Support for touch screens
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const canvas = canvasRef.current;
                if (canvas) {
                    const rect = canvas.getBoundingClientRect();
                    mousePositionRef.current = {
                        x: e.touches[0].clientX - rect.left,
                        y: e.touches[0].clientY - rect.top
                    };
                    isMouseMovingRef.current = true;
                    lastMouseMoveTimeRef.current = Date.now();
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        // Trigger mouse movement on click for immediate feedback
        const handleMouseClick = (e: MouseEvent) => {
            handleMouseMove(e);
        };

        window.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('click', handleMouseClick);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full ${className}`}
            style={{ zIndex: -1 }}
        />
    );
}
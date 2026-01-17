"use client";

import { useEffect, useRef, RefObject } from "react";
import { useScroll } from "framer-motion";

const FRAME_COUNT = 128;

export default function ScrollyCanvas({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload all images
    useEffect(() => {
        const images: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${frameNumber}.webp`;
            images.push(img);
        }

        imagesRef.current = images;

        // Wait for first image to load before rendering
        images[0].onload = () => {
            renderCanvas(0);
        };

        // Render 0 initially anyway
        renderCanvas(0);

        return () => {
            // Cleanup if needed
        };
    }, []);

    // Handle canvas rendering with object-fit: cover logic
    const renderCanvas = (frameIndex: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) return;

        // Ensure context is ready
        if (imagesRef.current.length < 1) return;

        const img = imagesRef.current[frameIndex];
        // Only draw if loaded, otherwise maybe draw previous frame? 
        // For now strict check
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Set canvas size to window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate scaling for object-fit: cover
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
            // Canvas is wider than image
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            // Canvas is taller than image
            drawWidth = canvas.height * imgAspect;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        // Clear and draw
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Update frame on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const frameIndex = Math.min(
                Math.floor(latest * FRAME_COUNT),
                FRAME_COUNT - 1
            );

            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                requestAnimationFrame(() => renderCanvas(frameIndex));
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            renderCanvas(currentFrameRef.current);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ backgroundColor: "#121212" }}
        />
    );
}

import React, { useEffect, useRef } from 'react';
import '../styles/cursor.css';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animateRing = () => {
            const dx = mousePos.current.x - ringPos.current.x;
            const dy = mousePos.current.y - ringPos.current.y;

            ringPos.current.x += dx * 0.15;
            ringPos.current.y += dy * 0.15;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
            }

            requestAnimationFrame(animateRing);
        };

        const animationId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={dotRef}></div>
            <div className="cursor-ring" ref={ringRef}></div>
        </>
    );
};

export default Cursor;

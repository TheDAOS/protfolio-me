"use client"
import { useEffect, useRef } from "react";

export default function PaperBackground() {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current!;
        const ctx = canvas.getContext("2d")!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.fillStyle = "#f3ede2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 10;
            data[i] = 240 + noise;
            data[i + 1] = 230 + noise;
            data[i + 2] = 215 + noise;
            data[i + 3] = 15; // subtle alpha
        }

        ctx.putImageData(imageData, 0, 0);
    }, []);

    return (
        <canvas
            ref={ref}
            className="fixed inset-0 -z-10"
        />
    );
}
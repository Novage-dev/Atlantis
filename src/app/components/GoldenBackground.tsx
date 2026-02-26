import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export const GoldenBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const syncHeight = () => {
      const nextHeight = document.documentElement.scrollHeight;
      if (canvas.height !== nextHeight) {
        canvas.height = nextHeight;
      }
    };
    window.addEventListener("scroll", syncHeight);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t = time / 1000;
      const lines = 5;
      for (let i = 0; i < lines; i++) {
        const baseX = (canvas.width / (lines + 1)) * (i + 1);
        const sway = Math.sin(t * 0.4 + i * 0.9) * 26;
        const opacity = i % 2 === 0 ? 0.18 : 0.1;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(201, 169, 98, ${opacity})`;
        ctx.lineWidth = i % 2 === 0 ? 1 : 0.8;
        ctx.moveTo(baseX + sway, 0);

        for (let y = 0; y <= canvas.height; y += 46) {
          const waveA = Math.sin(y * 0.008 + t * 0.5 + i) * 22;
          const waveB = Math.cos(y * 0.005 + t * 0.3 + i * 1.7) * 9;
          ctx.lineTo(baseX + sway + waveA + waveB, y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < 3; i++) {
        const startY = ((i + 1) * canvas.height) / 4;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(228, 212, 165, 0.08)";
        ctx.lineWidth = 0.8;
        ctx.moveTo(0, startY);
        ctx.bezierCurveTo(
          canvas.width * 0.22,
          startY + Math.sin(t + i) * 40,
          canvas.width * 0.72,
          startY - Math.cos(t * 0.7 + i) * 36,
          canvas.width,
          startY + Math.sin(t * 0.5 + i) * 24,
        );
        ctx.stroke();
      }

      frameId = requestAnimationFrame(draw);
    };

    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("scroll", syncHeight);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: 0.55, zIndex: 1 }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-32 -right-24 w-[26rem] h-[22rem] hero-float"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201, 169, 98, 0.2) 0%, rgba(201, 169, 98, 0.08) 42%, transparent 76%)",
            filter: "blur(46px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[38%] -left-24 w-[22rem] h-[24rem] hero-float"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(228, 212, 165, 0.18) 0%, rgba(201, 169, 98, 0.08) 45%, transparent 74%)",
            filter: "blur(52px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 right-[14%] w-[20rem] h-[16rem] hero-float"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201, 169, 98, 0.16) 0%, rgba(228, 212, 165, 0.08) 42%, transparent 74%)",
            filter: "blur(38px)",
          }}
        />
      </div>
    </>
  );
};

"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { Eye, Clock, Megaphone } from "lucide-react";
import { useMemo } from "react";

export default function Portfolio() {
  const { scrollY } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(smoothY, [0, 1000], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1000], [-10, 10]);

  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const videos = [
    { embed: "https://www.youtube.com/embed/qCcaXwJjQjM", tag: "Retention" },
    { embed: "https://www.youtube.com/embed/9kvH7MZkcds", tag: "Engagement" },
    { embed: "https://www.youtube.com/embed/3oYpHiIzU1w", tag: "Storytelling" },
  ];

  const features = [
    {
      title: "High Retention Editing",
      desc: "Structured to keep viewers watching longer.",
      icon: <Eye size={24} />,
    },
    {
      title: "Smart Monetization",
      desc: "Ads placed without breaking flow.",
      icon: <Megaphone size={24} />,
    },
    {
      title: "Efficient Delivery",
      desc: "Fast turnaround without compromising quality.",
      icon: <Clock size={24} />,
    },
  ];

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 3 + 1,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      duration: 3 + Math.random() * 2,
    }));
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl -z-10"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* PARTICLES */}
      <div className="absolute inset-0 -z-10">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: p.duration, repeat: Infinity }}
          />
        ))}
      </div>

      {/* HERO */}
      <motion.section
        style={{ y: heroY }}
        className="min-h-[70vh] flex flex-col justify-center items-center text-center"
      >
        <h1
          className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 20px rgba(168,85,247,0.7)",
          }}
        >
          NIGHT GAIJIN
        </h1>

        <p className="mt-6 text-purple-300 max-w-xl">
          High-retention editing that grows your channel and increases your revenue.
        </p>

        <motion.a
          href="https://wa.me/5581994339483"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-8 py-4 rounded-full bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
        >
          Boost My Channel
        </motion.a>
      </motion.section>

      {/* PORTFOLIO 3D */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-6">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden"
            >
              <iframe
                src={v.embed}
                className="w-full aspect-video"
                allowFullScreen
              />

              <div className="absolute top-2 left-2 bg-purple-600 px-2 py-1 text-xs rounded">
                {v.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="text-center py-10">
        <div className="border border-purple-500 p-6 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          First video discounted — limited spots.
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative p-6 mb-6 border border-purple-500 rounded-2xl"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(168,85,247,0.2)",
                  "0 0 25px rgba(168,85,247,0.6)",
                  "0 0 10px rgba(168,85,247,0.2)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            <div className="relative z-10 flex gap-4 items-center">
              {f.icon}
              <div>
                <h3>{f.title}</h3>
                <p className="text-purple-300 text-sm">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="text-center py-10">
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:nightgaijimbusiness@email.com"
            className="px-6 py-3 border border-purple-500 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.7)]"
          >
            Email
          </a>

          <a
            href="https://wa.me/5581994339483"
            target="_blank"
            className="px-6 py-3 border border-green-500 rounded-lg text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)]"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
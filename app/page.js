"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Eye, Clock, Megaphone } from "lucide-react";
import { useMemo } from "react";

export default function Portfolio() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const videos = [
    { embed: "https://www.youtube.com/embed/qCcaXwJjQjM", tag: "High Retention" },
    { embed: "https://www.youtube.com/embed/9kvH7MZkcds", tag: "Engaging Content" },
    { embed: "https://www.youtube.com/embed/3oYpHiIzU1w", tag: "Storytelling Focus" },
  ];

  const features = [
    {
      title: "High Retention Editing",
      desc: "Optimized pacing and cuts based on audience behavior.",
      icon: <Eye size={26} />,
    },
    {
      title: "Seamless Ads Integration",
      desc: "Natural sponsor placements that keep viewers engaged.",
      icon: <Megaphone size={26} />,
    },
    {
      title: "Fast Turnaround",
      desc: "Delivered as quickly as possible — often before the deadline.",
      icon: <Clock size={26} />,
    },
  ];

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map(() => ({
      size: Math.random() * 3 + 1,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      duration: 3 + Math.random() * 2,
    }));
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden"
    >

      {/* MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl -z-10"
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
            className="absolute rounded-full bg-purple-400"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              opacity: 0.3,
              willChange: "transform, opacity",
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: p.duration, repeat: Infinity }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6"
        >
          <motion.img
            src="https://yt3.googleusercontent.com/o6C2UdbAwWbMDty3l68mSvN35_fGFlUkq5tgr60pu2baQ_dKGNN_dE0KH3h7mzDUvp7QfGle3w=s160-c-k-c0x00ffffff-no-rj"
            className="w-20 h-20 rounded-full border-2 border-purple-500"
            animate={{
              boxShadow: [
                "0 0 8px rgba(168,85,247,0.3)",
                "0 0 20px rgba(168,85,247,0.8)",
                "0 0 8px rgba(168,85,247,0.3)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            style={{
              textShadow: "0 0 12px rgba(168,85,247,0.7)",
            }}
          >
            NIGHT GAIJIN
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-purple-300 max-w-xl"
        >
          High-retention editing that grows your channel and increases your revenue.
        </motion.p>

        <motion.a
          href="https://wa.me/5581994339483"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-8 py-4 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
        >
          Increase My Retention
        </motion.a>
      </section>

      {/* PORTFOLIO */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-6">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <iframe
                src={v.embed}
                className="w-full aspect-video rounded-xl"
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
        <h2 className="text-2xl mb-4">Special Offer</h2>
        <div className="border border-purple-500 p-6 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          Get your first video edited at a discounted price.
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
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 8px rgba(168,85,247,0.2)",
                  "0 0 20px rgba(168,85,247,0.6)",
                  "0 0 8px rgba(168,85,247,0.2)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />

            <div className="relative z-10 flex gap-4 items-center">
              {f.icon}
              <div>
                <h3>{f.title}</h3>
                <p className="text-sm text-purple-300">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="text-center py-10">
        <h2 className="text-2xl mb-4">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="mailto:nightgaijimbusiness@email.com"
            className="relative px-6 py-3 border border-purple-500 rounded-lg shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          >
            nightgaijimbusiness@gmail.com
          </a>

          <a
            href="https://wa.me/5581994339483"
            target="_blank"
            className="relative px-6 py-3 border border-green-500 rounded-lg text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
          >
            WhatsApp
          </a>

        </div>
      </section>
    </div>
  );
}
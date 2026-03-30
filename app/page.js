"use client";

import { motion } from "framer-motion";
import { Eye, Clock, Megaphone } from "lucide-react";
import { useMemo } from "react";

export default function Portfolio() {
  const videos = [
    {
      title: "Fast-Paced",
      embed: "https://www.youtube.com/embed/qCcaXwJjQjM",
      tag: "High Retention",
    },
    {
      title: "Entertainment",
      embed: "https://www.youtube.com/embed/9kvH7MZkcds",
      tag: "Engaging Content",
    },
    {
      title: "Informative",
      embed: "https://www.youtube.com/embed/3oYpHiIzU1w",
      tag: "Storytelling Focus",
    },
  ];

  const features = [
    {
      title: "High Retention Editing",
      desc: "Optimized pacing and cuts based on audience retention behavior and watch time.",
      icon: <Eye size={28} />,
    },
    {
      title: "Seamless Ads Integration",
      desc: "Sponsor placements that feel natural and keep viewers watching.",
      icon: <Megaphone size={28} />,
    },
    {
      title: "Fast Turnaround",
      desc: "High-quality delivery within 24–48 hours without compromising performance.",
      icon: <Clock size={28} />,
    },
  ];

  // ✅ FIX PARTICLES
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      size: Math.random() * 4 + 2,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">

      {/* Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-400"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              opacity: 0.3,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-20 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          NIGHT GAIJIN
        </h1>

        <p className="mt-6 text-lg text-purple-300 max-w-xl">
          I turn your videos into high-retention machines that grow your channel and revenue.
        </p>

        <a
          href="https://wa.me/5581994339483?text=Hi%2C%20I%20want%20to%20increase%20my%20video%20retention"
          target="_blank"
          className="mt-6 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium shadow-lg hover:scale-105"
        >
          Increase My Retention
        </a>
      </section>

      {/* PORTFOLIO */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-black/40 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-purple-500/20 overflow-hidden"
            >
              {/* VIDEO */}
              <div className="aspect-video mb-4 w-full relative">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={video.embed}
                  title={video.title}
                  allowFullScreen
                />

                {/* 🔥 OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4">
                  <span className="text-sm text-purple-200">
                    {video.tag}
                  </span>
                </div>

                {/* TAG BADGE */}
                <div className="absolute top-2 left-2 bg-purple-600 text-xs px-3 py-1 rounded-full shadow-md">
                  {video.tag}
                </div>
              </div>

              <h3 className="text-xl font-medium">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 OFFER SECTION */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-purple-600/20 border border-purple-500 rounded-3xl p-10 text-center shadow-2xl"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Special Offer
          </h2>
          <p className="text-purple-200 text-lg">
            You'll receive a discount for your first video!
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl flex items-center gap-6"
            >
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500">
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-200">
                  {item.title}
                </h3>
                <p className="text-purple-300 text-sm max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-16 flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <a
            href="mailto:nightgaijimbusiness@email.com"
            className="px-6 py-3 border border-purple-500 rounded-lg hover:scale-105 transition"
          >
            nightgaijimbusiness@email.com
          </a>

          <a
            href="https://wa.me/5581994339483"
            target="_blank"
            className="px-6 py-3 border border-green-500 rounded-lg hover:scale-105 transition text-green-400"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
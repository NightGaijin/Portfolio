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
      desc: "Optimized pacing and cuts based on audience retention behavior.",
      icon: <Eye size={28} />,
    },
    {
      title: "Seamless Ads Integration",
      desc: "Sponsor placements that feel natural and keep viewers watching.",
      icon: <Megaphone size={28} />,
    },
    {
      title: "Fast Turnaround",
      desc: "Delivery within 24–48 hours without compromising quality.",
      icon: <Clock size={28} />,
    },
  ];

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
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">

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
            }}
            animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-20">
        <div className="flex items-center gap-6">
          <motion.img
            src="https://yt3.googleusercontent.com/o6C2UdbAwWbMDty3l68mSvN35_fGFlUkq5tgr60pu2baQ_dKGNN_dE0KH3h7mzDUvp7QfGle3w=s160-c-k-c0x00ffffff-no-rj"
            className="w-20 h-20 rounded-full border-2 border-purple-500"
            animate={{
              boxShadow: [
                "0 0 10px rgba(168,85,247,0.3)",
                "0 0 30px rgba(168,85,247,0.9)",
                "0 0 10px rgba(168,85,247,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            style={{
              textShadow:
                "0 0 10px rgba(168,85,247,0.8), 0 0 30px rgba(168,85,247,0.6)",
            }}
          >
            NIGHT GAIJIN
          </h1>
        </div>

        <p className="mt-6 text-purple-300 max-w-xl">
          High-retention editing that grow your channel and increase your revenue.
        </p>

        <a
          href="https://wa.me/5581994339483?text=I%20want%20to%20increase%20my%20retention"
          target="_blank"
          className="mt-6 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition"
        >
          Increase My Retention
        </a>
      </section>

      {/* PROOF */}
      <section className="text-center py-10">
        <p className="text-purple-300">
          Helping creators improve retention, engagement and overall performance
        </p>
      </section>

      {/* PORTFOLIO */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-6">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="relative group">
              <iframe
                src={v.embed}
                className="w-full aspect-video rounded-xl"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                {v.tag}
              </div>

              <div className="absolute top-2 left-2 bg-purple-600 px-2 py-1 text-xs rounded">
                {v.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="text-center py-10">
        <div className="bg-purple-600/20 border border-purple-500 p-8 rounded-2xl">
          Get a discount on your first video.
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 mb-6 border border-purple-500 rounded-2xl"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(168,85,247,0.3)",
                  "0 0 30px rgba(168,85,247,0.8)",
                  "0 0 10px rgba(168,85,247,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
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
          <a href="mailto:nightgaijimbusiness@email.com"
            className="relative border border-purple-500 px-6 py-3 rounded">
            nightgaijimbusiness@gmail.com
          </a>

          <a href="https://wa.me/5581994339483"
            className="relative border border-green-500 px-6 py-3 rounded text-green-400">
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
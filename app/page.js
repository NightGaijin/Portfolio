"use client";

import { motion } from "framer-motion";
import { Eye, Clock, Megaphone } from "lucide-react";

export default function Portfolio() {
  const videos = [
    { title: "Fast-Paced", embed: "https://www.youtube.com/embed/qCcaXwJjQjM" },
    { title: "Entertainment", embed: "https://www.youtube.com/embed/9kvH7MZkcds" },
    { title: "Informative", embed: "https://www.youtube.com/embed/3oYpHiIzU1w" },
  ];

  const features = [
    {
      title: "High Retention",
      desc: "Higher retention leads to higher AdSense revenue. Let me help increase your earnings.",
      icon: <Eye size={28} />,
    },
    {
      title: "Functional Ads",
      desc: "Creating mid-video ads that people actually engage with, helping you attract more sponsors.",
      icon: <Megaphone size={28} />,
    },
    {
      title: "Fast Delivery",
      desc: "The editing will start as soon as you send the footage and you'll receive it as quickly as possible, often before the deadline.",
      icon: <Clock size={28} />,
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">

      {/* Animated background particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() * 4 + 2; // tamanho entre 2px e 6px
          const left = Math.random() * 100 + "%";
          const top = Math.random() * 100 + "%";
          const delay = Math.random() * 5;
          const duration = 6 + Math.random() * 4;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-400"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left,
                top,
                opacity: 0.3,
                filter: "blur(1px)",
              }}
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
            />
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <motion.img
            src="https://yt3.googleusercontent.com/o6C2UdbAwWbMDty3l68mSvN35_fGFlUkq5tgr60pu2baQ_dKGNN_dE0KH3h7mzDUvp7QfGle3w=s160-c-k-c0x00ffffff-no-rj"
            alt="profile"
            className="w-20 h-20 rounded-full border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            animate={{
              boxShadow: [
                "0 0 10px rgba(168,85,247,0.3)",
                "0 0 25px rgba(168,85,247,0.8)",
                "0 0 10px rgba(168,85,247,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-[IntroRust] transition"
            style={{
              textShadow:
                "0 0 8px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.4)",
            }}
          >
            NIGHT GAIJIN
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg text-purple-300 max-w-xl"
        >
          Professional video editor capable of adapting to any style, delivering the exact pace and rhythm your content needs: from fast-paced, high-energy edits to cinematic and immersive storytelling.
        </motion.p>

        <motion.a
          href="https://wa.me/5581994339483?text=Hi%2C%20I%27m%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20discuss%20about%20it%3F"
          target="_blank"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium shadow-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]"
        >
          Hire Me
        </motion.a>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-purple-500/20"
            >
              <div className="aspect-video mb-4 w-full">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={video.embed}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-medium">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168,85,247,0.6)" }}
              className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl flex flex-row items-center text-left gap-6"
            >
              <div className="p-4 rounded-full bg-purple-600/20 border border-purple-500">
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-purple-200">{item.title}</h3>
                <p className="text-purple-300 text-sm max-w-md">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16 flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          {/* Email */}
          <a
            href="mailto:nightgaijimbusiness@email.com"
            className="px-6 py-3 border border-purple-500 rounded-lg relative hover:scale-105 transition-all"
          >
            <span className="relative z-10 text-purple-200">nightgaijimbusiness@email.com</span>
            <motion.div
              className="absolute inset-0 rounded-lg border border-purple-400"
              animate={{ boxShadow: ["0 0 10px #a855f7", "0 0 25px #a855f7", "0 0 10px #a855f7"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5581994339483"
            target="_blank"
            className="px-6 py-3 border border-green-500 rounded-lg relative hover:scale-105 transition-all"
          >
            <span className="relative z-10 text-green-400 font-medium">Chat on WhatsApp</span>
            <motion.div
              className="absolute inset-0 rounded-lg border border-green-400"
              animate={{ boxShadow: ["0 0 10px #22c55e", "0 0 25px #22c55e", "0 0 10px #22c55e"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </a>
        </div>
      </section>
    </div>
  );
}
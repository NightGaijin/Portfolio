"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Eye, Clock, Megaphone, MessageCircle } from "lucide-react";

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

  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${(i * 8.2) % 100}%`,
      top: `${(i * 11.7) % 100}%`,
      size: 2 + (i % 3),
      delay: (i % 10) * 0.3,
      duration: 5 + (i % 5) * 1,
      opacity: 0.12 + (i % 4) * 0.08,
    }));
  }, []);

  const contactText =
    "Hi, I'm interested in your video editing services. Can we discuss about it?";

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-br from-black via-purple-900 to-black text-white">

      {/* Background particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-purple-400"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              filter: "blur(0.3px)",
            }}
            animate={{
              opacity: [0.08, 0.65, 0.12],
              scale: [1, 1.8, 1],
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

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 flex-wrap justify-center"
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
            className="text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent font-[IntroRust] transition"
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
          rel="noopener noreferrer"
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
          {videos.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl p-4 shadow-xl border border-purple-500/30 bg-black/40 backdrop-blur-md overflow-hidden"
            >
              {/* Neon border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(168,85,247,0.1)",
                    "0 0 18px rgba(168,85,247,0.6)",
                    "0 0 0px rgba(168,85,247,0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="aspect-video mb-4 w-full rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={video.embed}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-medium text-center">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col gap-8">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-3xl p-8 flex items-center gap-6 bg-black/50 backdrop-blur-xl border border-purple-500/30 shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(168,85,247,0.1)",
                  "0 0 20px rgba(168,85,247,0.6)",
                  "0 0 0px rgba(168,85,247,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 p-4 rounded-full bg-purple-600/20 border border-purple-500">
              {item.icon}
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-2 text-purple-200">{item.title}</h3>
              <p className="text-purple-300 text-sm max-w-md">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Contact Me</h2>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Email */}
          <motion.div
            className="relative overflow-hidden rounded-2xl px-6 py-4 bg-black/45 backdrop-blur-xl border border-purple-500/30 shadow-lg"
            animate={{
              boxShadow: [
                "0 0 0px rgba(168,85,247,0.15)",
                "0 0 22px rgba(168,85,247,0.6)",
                "0 0 0px rgba(168,85,247,0.15)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-purple-400/20" />
            <p className="relative z-10 text-purple-200 font-medium">
              nightgaijimbusiness@email.com
            </p>
          </motion.div>

          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/5581994339483?text=${encodeURIComponent(contactText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl px-6 py-4 bg-black/45 backdrop-blur-xl border border-purple-500/30 shadow-lg flex items-center gap-2 font-medium text-purple-100 hover:text-white transition"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(168,85,247,0.15)",
                "0 0 22px rgba(168,85,247,0.6)",
                "0 0 0px rgba(168,85,247,0.15)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-purple-400/20" />
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle size={18} />
              Converse no WhatsApp
            </span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
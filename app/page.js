"use client";

import { motion } from "framer-motion";
import { Eye, Clock, Megaphone } from "lucide-react";

export default function Portfolio() {
  const videos = [
    { title: "Video 1", embed: "https://www.youtube.com/embed/qCcaXwJjQjM" },
    { title: "Video 2", embed: "https://www.youtube.com/embed/9kvH7MZkcds" },
    { title: "Video 3", embed: "https://www.youtube.com/embed/3oYpHiIzU1w" },
  ];

  const features = [
    {
      title: "High Retention",
      desc: "Higher retention leads to higher AdSense revenue. Let me help increase your earnings.",
      icon: <Eye size={28} />,
    },
    {
      title: "Functional Ads",
      desc: "I create mid-video ads that people actually engage with, helping you attract more sponsors.",
      icon: <Megaphone size={28} />,
    },
    {
      title: "Fast Delivery",
      desc: "I start editing as soon as you send the footage and deliver it as quickly as possible—often before the deadline.",
      icon: <Clock size={28} />,
    },
  ];

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden">

      {/* Animated background particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            initial={{ y: "-10%", opacity: 0 }}
            animate={{
              y: ["0%", "120%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
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
          href="https://wa.me/5581912345678?text=Hi%2C%20I%27m%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20discuss%20about%20it%3F"
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

      {/* Contact */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-purple-300 mt-4">nightgaijimbusiness@email.com</p>
      </section>
    </div>
  );
}

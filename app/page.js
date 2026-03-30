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

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const heroY = useTransform(scrollY, [0, 400], [0, -60]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const videos = [
    { embed: "https://www.youtube.com/embed/qCcaXwJjQjM", tag: "High Retention" },
    { embed: "https://www.youtube.com/embed/9kvH7MZkcds", tag: "Engaging Content" },
    { embed: "https://www.youtube.com/embed/3oYpHiIzU1w", tag: "Storytelling" },
  ];

  const features = [
    {
      title: "High Retention Editing",
      desc: "Optimized pacing and cuts based on audience behavior.",
      icon: <Eye size={24} />,
    },
    {
      title: "Seamless Ads Integration",
      desc: "Natural sponsor placements that keep viewers engaged.",
      icon: <Megaphone size={24} />,
    },
    {
      title: "Fast Turnaround",
      desc: "Delivered as quickly as possible — often before the deadline.",
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
      className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-x-hidden"
    >

      {/* MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed w-[250px] h-[250px] rounded-full bg-purple-500/20 blur-3xl z-0"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* PARTICLES */}
      <div className="absolute inset-0 z-0">
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
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: p.duration, repeat: Infinity }}
          />
        ))}
      </div>

      {/* HERO */}
      <motion.section
        style={{ y: heroY }}
        className="relative z-10 min-h-[70vh] flex flex-col justify-center items-center text-center pt-20"
      >
        <div className="flex items-center gap-6">

          <motion.img
            src="https://yt3.googleusercontent.com/o6C2UdbAwWbMDty3l68mSvN35_fGFlUkq5tgr60pu2baQ_dKGNN_dE0KH3h7mzDUvp7QfGle3w=s160-c-k-c0x00ffffff-no-rj"
            className="w-20 h-20 rounded-full border-2 border-purple-500"
            animate={{
              boxShadow: [
                "0 0 10px rgba(168,85,247,0.3)",
                "0 0 25px rgba(168,85,247,0.8)",
                "0 0 10px rgba(168,85,247,0.3)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            style={{ textShadow: "0 0 15px rgba(168,85,247,0.7)" }}
          >
            NIGHT GAIJIN
          </h1>
        </div>

        <p className="mt-6 text-purple-300 max-w-xl">
          High-retention editing that grows your channel and increases your revenue.
        </p>

        <div className="mt-8">
          <MagneticButton />
        </div>
      </motion.section>

      {/* PORTFOLIO */}
      <section className="relative z-10 px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-6">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden"
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
      <section className="relative z-10 text-center py-10">
        <h2 className="text-2xl mb-4">Special Offer</h2>

        <div className="border border-purple-500 p-6 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          You’ll receive a discount for your first video!
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 py-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>

      {/* CONTACT */}
      <section className="relative z-10 text-center py-10">
        <h2 className="text-2xl mb-4">Contact Me</h2>

        <div className="flex gap-4 justify-center flex-wrap">
          <MagneticButton text="Email" link="mailto:nightgaijimbusiness@email.com" />
          <MagneticButton text="WhatsApp" link="https://wa.me/5581994339483" green />
        </div>
      </section>
    </div>
  );
}

/* BOTÃO MAGNÉTICO */
function MagneticButton({ text = "Increase My Retention", link, green }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function move(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={link || "https://wa.me/5581994339483"}
      target="_blank"
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x, y }}
      className={`px-6 py-3 rounded-lg border ${
        green ? "border-green-500 text-green-400" : "border-purple-500"
      } shadow-[0_0_10px_rgba(168,85,247,0.6)]`}
    >
      {text}
    </motion.a>
  );
}

/* CARD 3D CORRIGIDO */
function FeatureCard({ icon, title, desc }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(smoothY, [-40, 40], [8, -8]);
  const rotateY = useTransform(smoothX, [-40, 40], [-8, 8]);

  function move(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    let mouseX = e.clientX - rect.left - rect.width / 2;
    let mouseY = e.clientY - rect.top - rect.height / 2;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    x.set(clamp(mouseX, -40, 40));
    y.set(clamp(mouseY, -40, 40));
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      className="relative p-6 mb-6 border border-purple-500 rounded-2xl bg-black/40 backdrop-blur-xl"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
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
        {icon}
        <div>
          <h3>{title}</h3>
          <p className="text-purple-300 text-sm">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
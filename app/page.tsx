"use client";

import { useLottie } from "lottie-react";
import * as cat from "@/lottie/cat.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Nav = () => (
  <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
    <div className="bg-white neo-border neo-shadow px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
      <span className="font-extrabold text-lg md:text-xl tracking-tighter italic">
        Sanju
      </span>
      <div className="flex gap-4 md:gap-6 font-bold text-xs md:text-sm">
        <a
          href="#projects"
          className="hover:underline decoration-neo-pink decoration-2 md:decoration-4"
        >
          PROJECTS
        </a>
        <a
          href="#about"
          className="hover:underline decoration-neo-cyan decoration-2 md:decoration-4"
        >
          ABOUT
        </a>
        <a
          href="#contact"
          className="hover:underline decoration-neo-green decoration-2 md:decoration-4 uppercase"
        >
          Hi!
        </a>
      </div>
    </div>
  </nav>
);

const SectionTitle = ({
  children,
  color = "bg-neo-yellow",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div className="mb-8 md:mb-12 inline-block">
    <h2
      className={`text-3xl md:text-6xl font-black uppercase px-3 py-1 md:px-4 md:py-2 neo-border neo-shadow-lg ${color}`}
    >
      {children}
    </h2>
  </div>
);

const ProjectCard = ({
  title,
  desc,
  tags,
  color,
}: {
  title: string;
  desc: string;
  tags: string[];
  color: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02, rotate: 1 }}
    whileTap={{ scale: 0.98 }}
    className={`p-5 md:p-6 neo-border neo-shadow-lg ${color} flex flex-col gap-3 md:gap-4 cursor-pointer`}
  >
    <div className="bg-white neo-border p-2 aspect-video flex items-center justify-center font-mono text-[10px] md:text-sm uppercase text-center">
      [ Project Preview ]
    </div>
    <h3 className="text-xl md:text-2xl font-black uppercase">{title}</h3>
    <p className="font-medium leading-tight text-sm md:text-base">{desc}</p>
    <div className="mt-auto flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-[10px] md:text-xs font-bold px-2 py-1 bg-white neo-border uppercase"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const lottieOptions = {
    animationData: (cat as { default?: unknown }).default ?? cat,
    loop: true,
    style: { width: "100%", height: "100%", maxWidth: 300, maxHeight: 300 },
  };

  const { View: CatView } = useLottie(lottieOptions);

  const welcomeText = "FRONTEND DEVELOPER";

  return (
    <main
      ref={containerRef}
      className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8"
    >
      <Nav />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 md:mb-32">
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <motion.div
            initial={{ rotate: -2 }}
            animate={{ rotate: 2 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
            className="inline-block bg-neo-pink neo-border neo-shadow px-3 py-1 font-black text-sm md:text-xl uppercase"
          >
            HEY THERE! I&apos;M Sanju
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            {welcomeText.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
              >
                {word.split("").map((char, charIndex) => {
                  const absoluteIndex =
                    welcomeText.split(" ").slice(0, wordIndex).join(" ")
                      .length +
                    (wordIndex > 0 ? 1 : 0) +
                    charIndex;
                  return (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: absoluteIndex * 0.03,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl font-bold max-w-md mx-auto md:mx-0 leading-tight">
            Building fast, responsive web applications and high-performance
            mobile experiences for iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-neo-cyan px-6 md:px-8 py-3 neo-border neo-shadow font-black uppercase text-lg md:text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              MY WORK
            </button>
            <button className="bg-white px-6 md:px-8 py-3 neo-border neo-shadow font-black uppercase text-lg md:text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              RESUME
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative w-full max-w-[300px] md:max-w-none mx-auto">
          <div className="absolute inset-0 bg-neo-yellow neo-border neo-shadow -rotate-6 scale-90 -z-10" />
          <div className="bg-white neo-border neo-shadow rotate-3 p-4 w-full aspect-square flex items-center justify-center">
            {CatView}
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <div className="bg-black py-3 md:py-4 border-y-4 border-black overflow-hidden flex whitespace-nowrap mb-20 md:mb-32 -mx-4 md:-mx-8">
        <motion.div
          style={{ x }}
          className="flex gap-8 md:gap-12 text-white font-black text-2xl md:text-4xl uppercase items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex gap-8 md:gap-12 items-center">
              <span>Next.js</span>
              <span className="text-neo-yellow">★</span>
              <span>Swift</span>
              <span className="text-neo-pink">★</span>
              <span>React Native</span>
              <span className="text-neo-cyan">★</span>
              <span>TypeScript</span>
              <span className="text-neo-green">★</span>
              <span>Flutter</span>
              <span className="text-neo-yellow">★</span>
              <span>Node.js</span>
              <span className="text-neo-pink">★</span>
              <span>Kotlin</span>
              <span className="text-neo-cyan">★</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto mb-20 md:mb-32 scroll-mt-24 md:scroll-mt-32"
      >
        <SectionTitle>Selected Works</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard
            title="SoundByte Mobile"
            desc="A clean audio recording and voice-journaling app with native audio processing features."
            tags={["Flutter", "Swift", "Dart"]}
            color="bg-neo-yellow"
          />
          <ProjectCard
            title="Cyber Cat Analytics"
            desc="A full-stack web dashboard that uses AI to map user behavior databases with real-time updates."
            tags={["Next.js", "TS", "Tailwind"]}
            color="bg-neo-cyan"
          />
          <ProjectCard
            title="FitTrack Pro"
            desc="A native Android fitness tracker leveraging native sensor APIs and Health Connect integration."
            tags={["Kotlin", "Android", "Compose"]}
            color="bg-neo-pink"
          />
        </div>
      </section>

      {/* About / Contact */}
      <section
        id="about"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 scroll-mt-24"
      >
        <div
          id="contact"
          className="bg-neo-green neo-border neo-shadow p-6 md:p-8 flex flex-col justify-center text-center md:text-left scroll-mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Wanna Chat?
          </h3>
          <p className="text-base md:text-lg font-bold mb-6">
            I&apos;m always open to talking about cool projects, weird tech, or
            the best place to find pizza.
          </p>
          <a
            href="mailto:sanjusanthosh46@gmail.com"
            className="bg-white neo-border neo-shadow px-6 py-2 font-black uppercase text-center hover:bg-black hover:text-white transition-colors inline-block w-fit mx-auto md:mx-0"
          >
            Send an Email
          </a>
        </div>

        <div className="neo-border neo-shadow p-6 md:p-8 bg-white flex flex-col gap-3 md:gap-4 justify-center">
          <a
            href="https://github.com/TheDAOS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center border-b-2 md:border-b-4 border-black pb-2 hover:text-neo-pink hover:translate-x-1 transition-all"
          >
            <span className="font-black text-xl md:text-2xl uppercase underline decoration-neo-pink">
              GitHub
            </span>
            <span className="font-mono text-xs md:text-sm">@TheDAOS</span>
          </a>
          <a
            href="https://mastodon.social/@thedaos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center border-b-2 md:border-b-4 border-black pb-2 hover:text-neo-cyan hover:translate-x-1 transition-all"
          >
            <span className="font-black text-xl md:text-2xl uppercase underline decoration-neo-cyan">
              Mastodon
            </span>
            <span className="font-mono text-xs md:text-sm">
              @thedaos@mastodon.social
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sanju-santhosh-38b9431b2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center border-b-2 md:border-b-4 border-black pb-2 hover:text-neo-yellow hover:translate-x-1 transition-all"
          >
            <span className="font-black text-xl md:text-2xl uppercase underline decoration-neo-yellow">
              LinkedIn
            </span>
            <span className="font-mono text-xs md:text-sm">
              sanju-santhosh-38b9431b2
            </span>
          </a>
          <a
            href="mailto:sanjusanthosh46@gmail.com"
            className="flex justify-between items-center border-b-2 md:border-b-4 border-black pb-2 hover:text-neo-green hover:translate-x-1 transition-all"
          >
            <span className="font-black text-xl md:text-2xl uppercase underline decoration-neo-green">
              Email
            </span>
            <span className="font-mono text-xs md:text-sm">
              sanjusanthosh46@gmail.com
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center font-bold uppercase text-[10px] md:text-sm">
        <p>© {new Date().getFullYear()} — Built with chaos and coffee.</p>
      </footer>
    </main>
  );
};

export default Home;

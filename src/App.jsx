import { useEffect, useState } from "react";
import Giscus from "@giscus/react";
import csharpLogo from "./assets/csharp_logo.svg";
import cppLogo from "./assets/c++_logo.svg";
import dockerLogo from "./assets/docker_logo.svg";
import html5Logo from "./assets/html5_logo.svg";
import kotlinLogo from "./assets/kotlin_logo.svg";
import powershellLogo from "./assets/powershell_logo.svg";
import pythonLogo from "./assets/python_logo.svg";
import instagramLogo from "./assets/instagram_logo.svg";
import redditLogo from "./assets/reddit_logo.svg";
import whatsappLogo from "./assets/whatsapp_logo.svg";
import { Analytics } from '@vercel/analytics/react';
import { useHypixel } from "./hooks/useHypixel";
import heroImage from "./assets/Hero.webp"

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-[#1A1A1A] dark:fill-[#E6E8EA] transition-colors duration-300">
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-[#1A1A1A] dark:fill-[#E6E8EA] transition-colors duration-300">
    <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
  </svg>
);

function Comments({theme}) {
  return (
    <div className="w-full">
      <Giscus
        repo="poggersv2/mywebsite"
        repoId="R_kgDOSfv61w"
        category="General"
        categoryId="DIC_kwDOSfv6184C9SHy"
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === "dark" ? "dark" : "light"}
        lang="en"
        crossOrigin="anonymous"
      />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const { stats, loading } = useHypixel();

  const bw = stats?.stats?.Bedwars ?? {};
  const finalKills = bw.final_kills_bedwars ?? 0;

  return (
    <main id="about" className="min-h-screen bg-[#FAF9F6] dark:bg-[#0F1319] text-[#1A1A1A] dark:text-[#E6E8EA] transition-colors duration-300 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <div className="sticky top-0 z-50 pt-4 w-full font-sans">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="px-8 py-4 flex items-center justify-between rounded-full border border-slate-200/50 bg-[#FAF9F6]/80 text-lg backdrop-blur-md transition-colors duration-300 dark:border-slate-800/60 dark:bg-[#0F1319]/80">
              <div className="font-bold tracking-tight font-serif-heading transition-opacity duration-300 hover:opacity-70 cursor-pointer">
                <a href="#about">lee.dev</a>
              </div>

              {/* Desktop Nav */}
              <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
                <a href="#about" className="hover:opacity-70 transition-opacity duration-200">about me</a>
                <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">projects</a>
                <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">contact</a>
                <a href="#guestbook" className="hover:opacity-70 transition-opacity duration-200">guestbook</a>
                <button onClick={toggleTheme} className="cursor-pointer hover:opacity-70 transition-opacity duration-200 flex items-center">
                  {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </button>
              </div>

              {/* Mobile theme and menu*/}
              <div className="flex items-center justify-end gap-4 sm:hidden">
                <button onClick={toggleTheme} className="cursor-pointer hover:opacity-70 transition-opacity duration-200 flex items-center">
                  {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </button>
                <button
                  onClick={() => setOpen(!open)}
                  className="cursor-pointer hover:opacity-70 transition-all duration-200 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className={`fill-[#1A1A1A] dark:fill-[#E6E8EA] transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Dropdown */}
            <div
              className={`absolute left-6 right-6 sm:left-12 sm:right-12 mt-2 border border-slate-200/50 z-50 px-8 rounded-3xl flex flex-col items-end gap-4 bg-[#FAF9F6]/95 dark:bg-[#0F1319]/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
                open ? "max-h-60 py-6 opacity-100 shadow-md dark:border-slate-800/60" : "max-h-0 py-0 opacity-0 pointer-events-none border-none"
              }`}
            >
              <a href="#about" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity duration-200 text-sm font-medium">about me</a>
              <a href="#projects" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity duration-200 text-sm font-medium">projects</a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity duration-200 text-sm font-medium">contact</a>
              <a href="#guestbook" onClick={() => setOpen(false)} className="hover:opacity-70 transition-opacity duration-200 text-sm font-medium">guestbook</a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto min-h-[calc(100vh-120px)] font-sans"> 
          {/* Left half */}
          <div className="flex flex-col items-start gap-4 py-8">
            <h1 className="font-bold text-6xl sm:text-7xl lg:text-8xl font-serif-heading leading-none tracking-tight">
              Hey there, <span className="text-[#4A6B82] dark:text-[#93B4CC]">I'm Lee!</span>
            </h1>
            <div className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-400 font-serif-heading italic">I like playing Minecraft</div>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md">Oh yeah, I also program in Python, C++ and do web dev stuff.</p>
            <a href="#contact"
              className="mt-2 inline-flex rounded-xl bg-[#1A1A1A] px-6 py-3 font-bold text-white transition-all hover:opacity-80 dark:bg-[#E6E8EA] dark:text-[#0F1319] hover:scale-[1.02]">
              Contact Me
            </a>
          </div>

          {/* Right half */}
          <div className="relative grainy rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800/40 shadow-sm">
            <img
              src={heroImage}
              alt="me playing mc"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Languages / Skills Section */}
        <div className="py-12 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 font-sans">
          <div className="bg-[#FAF9F6] dark:bg-[#1B232E] border border-slate-200/40 dark:border-slate-800/50 rounded-3xl py-8 overflow-hidden">
            <div className="text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase text-center mb-6">
              Languages and technologies I use
            </div>

            {/* Marquee Wrapper Container */}
            <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              {/* Track 1 */}
              <ul className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-12 [&_img]:h-10 [&_img]:w-10 sm:[&_img]:h-12 sm:[&_img]:w-12 [&_img]:object-contain opacity-75 dark:opacity-60">
                <li><img src={cppLogo} alt="C++" /></li>
                <li><img src={csharpLogo} alt="C#" /></li>
                <li><img src={pythonLogo} alt="Python" /></li>
                <li><img src={html5Logo} alt="HTML5" /></li>
                <li><img src={kotlinLogo} alt="Kotlin" /></li>
                <li><img src={dockerLogo} alt="Docker" /></li>
                <li><img src={powershellLogo} alt="PowerShell" /></li>
              </ul>

              {/* Track 2 */}
              <ul aria-hidden="true" className="flex min-w-full shrink-0 animate-infinite-scroll items-center justify-around gap-12 [&_img]:h-10 [&_img]:w-10 sm:[&_img]:h-12 sm:[&_img]:w-12 [&_img]:object-contain opacity-75 dark:opacity-60">
                <li><img src={cppLogo} alt="C++" /></li>
                <li><img src={csharpLogo} alt="C#" /></li>
                <li><img src={pythonLogo} alt="Python" /></li>
                <li><img src={html5Logo} alt="HTML5" /></li>
                <li><img src={kotlinLogo} alt="Kotlin" /></li>
                <li><img src={dockerLogo} alt="Docker" /></li>
                <li><img src={powershellLogo} alt="PowerShell" /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="py-24 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 font-sans">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading mb-2">projects</h2>
            <div className="h-0.5 w-12 bg-[#4A6B82] dark:bg-[#93B4CC] opacity-60 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 bg-[#FAF9F6] dark:bg-[#1B232E] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700">
              <div>
                <h3 className="text-lg font-bold font-serif-heading mb-3 tracking-tight">work in progress</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">fun fact: im good at bedwars</p>
              </div>
              <div className="mt-6 text-[10px] w-fit font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#4A6B82]/10 text-[#4A6B82] dark:bg-[#93B4CC]/10 dark:text-[#93B4CC] uppercase">Active</div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 bg-[#FAF9F6] dark:bg-[#1B232E] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700">
              <div>
                <h3 className="text-lg font-bold font-serif-heading mb-3 tracking-tight">not done yet...</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-mono">67 67 67 67 67 67 67 67</p>
              </div>
              <div className="mt-6 text-[10px] w-fit font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-400 uppercase">Pending</div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 bg-[#FAF9F6] dark:bg-[#1B232E] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700">
              <div>
                <h3 className="text-lg font-bold font-serif-heading mb-3 tracking-tight">who doesn't love lorem ipsum</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum eu dui a eleifend. Vestibulum feugiat tellus vitae suscipit lacinia. Sed sit amet tincidunt tortor, eu lacinia diam.
                </p>
              </div>
              <div className="mt-6 text-[10px] w-fit font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#4A6B82]/10 text-[#4A6B82] dark:bg-[#93B4CC]/10 dark:text-[#93B4CC] uppercase">Completed</div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-6 bg-[#FAF9F6] dark:bg-[#1B232E] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-700">
              <div>
                <h3 className="text-lg font-bold font-serif-heading mb-3 tracking-tight">tbc</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">what do you call an american bee?<br />A USB<br />AHAHAH Get it?</p>
              </div>
              <div className="mt-6 text-[10px] w-fit font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200/50 text-slate-500 dark:bg-slate-800 dark:text-slate-400 uppercase">Concepts</div>
            </div>
          </div>
        </div>

        {/* Contact Me Section */}
        <div id="contact" className="py-24 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 font-sans">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading mb-2">contact me</h2>
            <div className="h-0.5 w-12 bg-[#4A6B82] dark:bg-[#93B4CC] opacity-60 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar: Context & Visual Directory */}
            <div className="flex flex-col gap-6 lg:col-span-5">  
              <div>
                <h3 className="text-3xl font-bold font-serif-heading tracking-tight text-[#4A6B82] dark:text-[#93B4CC] mb-2">Yes, I do take donations</h3>
                <p className="text-lg font-semibold leading-snug mb-3 text-slate-700 dark:text-slate-300">
                  Feel free to hit me up any time of the day (except for when I'm taking a 😴)
                </p>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  I'm very very very bored, and I promise I won't bite as long as you're nice =)
                </p>
              </div>

              {/* Profiles Directory Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <a href="https://github.com/poggersv2" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/60 bg-[#FAF9F6]/50 dark:bg-[#1B232E]/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] dark:bg-[#0F1319] border border-slate-200/40 dark:border-slate-800/40 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A6B82] dark:text-[#93B4CC]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">GitHub</span>
                    <span className="text-sm font-bold tracking-tight">@poggersv2</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/lee.lin_w/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/60 bg-[#FAF9F6]/50 dark:bg-[#1B232E]/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] dark:bg-[#0F1319] border border-slate-200/40 dark:border-slate-800/40 shadow-sm flex items-center justify-center">
                    <img src={instagramLogo} alt="Instagram" className="h-5 w-5 object-contain opacity-80 dark:opacity-90" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Instagram</span>
                    <span className="text-sm font-bold tracking-tight">@lee.lin_w</span>
                  </div>
                </a>

                <a href="https://www.reddit.com/user/random-kiddo-1/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/60 bg-[#FAF9F6]/50 dark:bg-[#1B232E]/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] dark:bg-[#0F1319] border border-slate-200/40 dark:border-slate-800/40 shadow-sm flex items-center justify-center">
                    <img src={redditLogo} alt="Reddit" className="h-5 w-5 object-contain opacity-80 dark:opacity-90" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Reddit</span>
                    <span className="text-sm font-bold tracking-tight">@random-kiddo-1</span>
                  </div>
                </a>

                <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/60 bg-[#FAF9F6]/50 dark:bg-[#1B232E]/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200">
                  <div className="p-2 rounded-lg bg-[#FAF9F6] dark:bg-[#0F1319] border border-slate-200/40 dark:border-slate-800/40 shadow-sm flex items-center justify-center">
                    <img src={whatsappLogo} alt="WhatsApp" className="h-5 w-5 object-contain opacity-80 dark:opacity-90" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">WhatsApp</span>
                    <span className="text-sm font-bold tracking-tight">Message Me</span>
                  </div>
                </a>
              </div>
            </div>
           
            {/* Right Sidebar: Form */}
            <form className="flex w-full flex-col gap-4 bg-[#FAF9F6]/40 dark:bg-[#1B232E]/20 border border-slate-200/40 dark:border-slate-800/40 rounded-2xl p-6 sm:p-8 lg:col-span-7"
                  method="POST"
                  action="https://formspree.io/f/mykvgdoy">
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className="w-full border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 bg-[#FAF9F6] dark:bg-[#0F1319] outline-none focus:ring-1 focus:ring-[#4A6B82] dark:focus:ring-[#93B4CC] transition-all duration-200 text-sm"
                required
              />

              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email"
                className="w-full border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 bg-[#FAF9F6] dark:bg-[#0F1319] outline-none focus:ring-1 focus:ring-[#4A6B82] dark:focus:ring-[#93B4CC] transition-all duration-200 text-sm"
                required
              />

              <textarea
                name="message"
                autoComplete="off"
                placeholder="Your message"
                rows="5"
                className="w-full border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 bg-[#FAF9F6] dark:bg-[#0F1319] outline-none focus:ring-1 focus:ring-[#4A6B82] dark:focus:ring-[#93B4CC] transition-all duration-200 text-sm resize-none"
                required
              />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-[#1A1A1A] dark:bg-[#E6E8EA] text-white dark:text-[#0F1319] px-6 py-3 font-bold hover:opacity-90 transition-opacity shadow-sm text-sm"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Guestbook Section */}
        <div id="guestbook" className="py-24 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 font-sans border-t border-slate-200/40 dark:border-slate-800/40"> 
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-serif-heading">guestbook</h2>
            <div className="h-0.5 w-12 bg-[#4A6B82] dark:bg-[#93B4CC] opacity-60 rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Comments theme={theme}/>
          </div>
        </div>
      </div>
     
      {/* Footer */}
      <footer className="w-full border-t border-slate-200/40 dark:border-slate-800/40 bg-[#FAF9F6]/60 dark:bg-[#0F1319] font-sans mt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" className="hover:opacity-70 transition-all duration-200 bg-[#FAF9F6] dark:bg-[#1B232E] p-2 rounded-xl border border-slate-200/40 dark:border-slate-800/40 shadow-sm flex items-center justify-center">
              <img src={whatsappLogo} alt="WhatsApp" className="h-6 w-6 object-contain opacity-80" />
            </a>
            <a href="https://www.instagram.com/lee.lin_w/" className="hover:opacity-70 transition-all duration-200 bg-[#FAF9F6] dark:bg-[#1B232E] p-2 rounded-xl border border-slate-200/40 dark:border-slate-800/40 shadow-sm flex items-center justify-center">
              <img src={instagramLogo} alt="Instagram" className="h-6 w-6 object-contain opacity-80" />
            </a>
            <a href="https://www.reddit.com/user/random-kiddo-1/" className="hover:opacity-70 transition-all duration-200 bg-[#FAF9F6] dark:bg-[#1B232E] p-2 rounded-xl border border-slate-200/40 dark:border-slate-800/40 shadow-sm flex items-center justify-center">
              <img src={redditLogo} alt="Reddit" className="h-8 w-8 object-contain opacity-80" />
            </a>
          </div>

          {/* Copyright & Info */}
          <div className="text-center sm:text-right flex flex-col gap-1">
            <div className="font-bold text-sm text-slate-800 dark:text-slate-200 font-serif-heading">© 2069 Sigma Tripple T, Inc. No Rights Reserved.</div>
            <div className="text-xs text-slate-400 dark:text-slate-500">
              no really, use whatever you want from my website... it's half broken anyways
            </div>
            <div className="text-[10px] tracking-wider font-semibold text-slate-400 dark:text-slate-600 uppercase mt-1">
              find the easter egg! Bedwars Final Kills: {finalKills}
            </div>
          </div>
        </div>
      </footer>

      <Analytics />
    </main>
  );
}

export default App;
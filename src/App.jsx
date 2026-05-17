import { useState } from "react";

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-900 dark:fill-white transition-colors duration-300">
    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-slate-900 dark:fill-white transition-colors duration-300">
    <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
  </svg>
);

function App() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <main>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">

        {/* Navbar */}
        <div id="about" className="relative">
        <div className="flex text-2xl justify-between items-center p-10 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <div className="font-bold transition-opacity duration-300 hover:opacity-70">lee.dev</div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-6">
            <a href="#about" className="hover:opacity-70 transition-opacity duration-200">about me</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">projects</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">contact</a>
            <button onClick={toggleTheme} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          {/* Mobile theme and menu*/}
          <div className="flex items-center justify-end gap-3 sm:hidden">
            <button onClick={toggleTheme} className="cursor-pointer hover:opacity-70 transition-opacity duration-200">
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="cursor-pointer hover:opacity-70 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className={`fill-slate-900 dark:fill-white transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 z-50 bg-white dark:bg-slate-900 flex flex-col items-end gap-5 px-6 sm:hidden border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-60 py-6 border-b opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">about me</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">projects</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">contact</a>
        </div>
      </div>

        {/* Hero */}
        <div className="flex items-center justify-center px-6 min-h-[calc(100vh-200px)]">
          <div className="flex max-w-full flex-col items-start gap-2 text-left">
            <div className="font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl my-4">Hey there, I'm Lee!</div>
            <div className="text-2xl sm:text-5xl mt-2">I like playing minecraft</div>
            <div className="">Oh yeah, I also program in Python, C++ and do web dev stuff</div>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-lg bg-slate-900 px-6 py-3 font-bold text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-slate-900"
            >
              contact me
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="py-20 px-6">
          <h2 id="projects" className="text-3xl font-bold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-[1vh] sm:px-[10vh]">
              
              <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">work in progress</h3>
                <p className="text-slate-500 dark:text-slate-400">fun fact: im good at bedwars</p>
              </div>

              <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">not done yet...</h3>
                <p className="text-slate-500 dark:text-slate-400">67 67 67 67 67 67 67 67</p>
              </div>

              <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">who dosn't love lorem ipsum</h3>
                <p className="text-slate-500 dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum eu dui a eleifend. Vestibulum feugiat tellus vitae suscipit lacinia. Sed sit amet tincidunt tortor, eu lacinia diam.</p>
              </div>

              <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2">tbc</h3>
                <p className="text-slate-500 dark:text-slate-400">what do you call an american bee?<br /> A USB <br /> AHAHHAHAHA GET IT GET IT</p>
              </div>

          </div>
        
        {/* Contact Me */}

          <div id="contact" className="py-20 px-6 sm:px-[10vh]">
            <h2 className="text-3xl font-bold text-center mb-10">contact me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="mr-4">  
                <div className="text-4xl font-bold">Yes, I do take donations,</div>
                <div className="text-xl font-bold">
                  Feel free to hit me up any time of the day (except for when I'm taking a 😴)
                </div>
                <div>Use the form to the right (or bottom if you're on mobile) or add me on other social medias (IF you can find me)</div>
                <div>
                  I'm very very very bored, and I promise I won't bite as long as you're nice =)
                </div>
            </div>
           
            
            <form className="flex w-full flex-col gap-4 mt-10 sm:mt-0"
                  method="POST"
                  action="https://formspree.io/f/mykvgdoy">
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
                required
              />

              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email"
                className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
                required
              />

              <textarea
                name="message"
                autoComplete="off"
                placeholder="Your message"
                rows="5"
                className="w-full border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-slate-400 resize-none"
                required
              />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 font-bold hover:opacity-80 transition-opacity"
              >
                Send message
              </button>
            </form>
          </div>
          </div>

        </div>
      </div>
      </main>
  );
}

export default App;

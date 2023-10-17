import AboutMe from "./components/AboutMe";
import Avatar from "./components/Avatar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
    return (
        <>
            <div className="bg-gray-100 px-36 py-8">
                <div className="grid gap-5 lg:grid-cols-3">
                    {/* Left Side */}
                    <div className="space-y-5">
                        <Avatar />
                        <Information />
                        <Skills />
                    </div>
                    {/* Right Side */}
                    <div className="space-y-5 lg:col-span-2">
                        <AboutMe />
                        <Projects />
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        </>
    );
}

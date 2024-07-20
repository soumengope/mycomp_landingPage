import Navbar from "./components/Navbar";
import Card from "./components/Card";
import LogoLists from "./components/LogoLists";
import DevCycle from "./components/DevCycle";
import DevProjects from "./components/DevProjects";
import DisProject from "./components/DisProject";
import AppDevelopment from "./components/AppDevelopment";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container min-w-full"> 
        <Card />
      </section>

    {/* Logo Bar section */}
    <section className="container mx-auto p-4 mt-8 hidden md:block">
      <LogoLists />
    </section>

    {/* Development Cycle section */}
    <section>
      <DevCycle />
    </section>

    {/* Developer Projects Section */}
    <section>
      <DevProjects />
    </section>

    {/*Discuss Project section */}
    <section>
      <DisProject />
    </section>

    {/* App Development section */}
    <section>
      <AppDevelopment />
    </section>
    </main>
    
    </>
    
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import OurServices from "./components/OurServices";
import RecentPosts from "./components/RecentPosts";
import Footer from "./components/Footer";

function App(){
    return (
      <div>
        <Header />
        <Hero />
        <div className="h-36"></div>
        <Statistics />
        <div className="h-36"></div>
        <OurServices />
        <div className="h-36"></div>
        <RecentPosts/>
        <div className="h-36"></div>
        <Footer/>
      </div>
    );
}
export default App;
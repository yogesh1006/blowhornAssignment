import "./App.css";
import Info from "./components/Info/Info";
import  Navbar  from "./components/Navbar/Navbar";
import  Head  from "./components/Heading/Head";
import Footer from "./components/Footer/Footer";
import  Team  from "./components/Team/Team";
import  Brands  from "./components/Brands/Brands";
import Blog  from "./components/Blog/Blog";
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Head />
        <Brands />
        <Info />
        <Features/>
        <Team />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;

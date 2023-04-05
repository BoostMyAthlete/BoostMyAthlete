import "./App.css";
import ContentPage from "@pages/ContentPage/ContentPage";
import NavMenu from "@components/NavMenu/NavMenu";
import Footer from "@components/Footer/Footer";




function App() {
  return ( 
    <div className="App">
      <NavMenu />
      <ContentPage />
      <Footer />

    </div>
  );
}

export default App;

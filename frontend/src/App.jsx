import "./App.css";
import ContentPage from "@pages/ContentPage/ContentPage";
import NavMenu from "@components/NavMenu/NavMenu";
import Footer from "@assets/Footer/Footer";

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

import "./App.css";
import ContentPage from "@pages/ContentPage/ContentPage";
import NavMenu  from '@components/NavMenu/NavMenu';
import Footer from '@components/Footer/Footer';
import NavMenu from '@components/NavMenu/NavMenu';



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

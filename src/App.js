import phoneImage from "./assets/HoldingPhone.webp";
import okLaggom from "./assets/OkLaggom.png";
import Lagom from "./assets/Lagggom.png";
import { HeaderContent } from "./components/Header/HeaderContent";
import { SocialContent } from "./components/Social/SocialContent";

function App() {
  return (
    <>
      <div className="grid-content animation-fade-in">
       <HeaderContent/>
        <img src={phoneImage} alt="phone user" className="header__content__img animation-fade-in" />
      </div>
      <main>
        <div className="grid-content">
         <SocialContent/>
          <div className="images__content">
            <img src={okLaggom} alt="Laggom Logo" className="animation-fade-in" />
            <img src={Lagom} alt="Lagom office" className="animation-fade-in" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

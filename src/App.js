import { Header } from "./components/Header/Header";
import phoneImage from "./assets/HoldingPhone.webp";
import okLaggom from "./assets/OkLaggom.png";
import Lagom from "./assets/Lagggom.png";
import { Links } from "./components/Links";

function App() {
  return (
    <>
      <div className="grid-content animation-fade-in">
        <div className="space-content header__content">
          <Header />
          <div className="header__title__container">
            <h1 className="header__content__title animation-fade-up">Digital products lovingly made with a human touch.</h1>
          </div>
        </div>
        <img src={phoneImage} alt="phone user" className="header__content__img animation-fade-in" />
      </div>
      <main>
        <div className="grid-content">
          <div className="space-social-content-X socials__content">
            <Links url="https://dribbble.com" />
            <div className="spacer"></div>
            <Links titleName="Twitter" hasTitleColor url="https://twitter.com" />
          </div>
          <div className="images__content">
            <img src={okLaggom} alt="Laggom Logo" loading="lazy" className="animation-fade-in" />
            <img src={Lagom} alt="Lagom office" loading="lazy" className="animation-fade-in" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import * as React from "react";
import { ReactComponent as MenuIcon } from "../../assets/Menu.svg";
import { ReactComponent as LogoG } from "../../assets/ggg.svg";
import { ReactComponent as LogoLagom } from "../../assets/Lagom.svg";
import { HeaderOverlay } from "./HeaderOverlay";
import useKeyPress from "../../hook/KeyPress";
export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const close = useKeyPress("Escape");
  React.useEffect(() => {
    if (close && menuState) {
      setMenuState(false);
    }
  }, [close, menuState]);
  return (
    <>
      <div
        onClick={() => setMenuState(!menuState)}
        className="header__overlay__close"
        style={{ position: `fixed`, display: menuState ? "block" : "none" }}
      />
      <HeaderOverlay headerWasClicked={menuState} setMenu={setMenuState} />
      <header className="header__container">
        <div className="logo__container">
          <LogoG className="gg__logo" />
          <LogoLagom className="lagom__logo" />
        </div>
        <MenuIcon
          onClick={() => setMenuState(!menuState)}
          className="icon__open"
        />
      </header>
    </>
  );
};

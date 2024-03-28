import { useEffect, useState } from "react";
import "./Nav.scss";
import Navlinks from "../../atoms/navlinks/Navlinks";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const hashFragment = window.location.hash;
    const cleanedFragment = hashFragment.replace('#', '');

    setActive(cleanedFragment)
  }, []);

  return (
    <nav className={showMenu ? 'nav-active' : ''}>
      <div className={`menu-xs ${showMenu ? 'active' : ''}`}>
          <div className="btn-menu" onClick={() => setShowMenu(!showMenu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {
            showMenu ? (
              <Navlinks
                active={active}
                setActive={setActive}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                mobile={true}
              />
            ) : null
          }
      </div>
        <Navlinks
          active={active}
          setActive={setActive}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="menu-xl"
          mobile={false}
        />
    </nav>
  );
};

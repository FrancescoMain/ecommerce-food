import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { RiShoppingBasketLine, RiUserLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
import { RefObject, useRef } from "react";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

interface NavigationProps {
  menuRef: React.RefObject<HTMLDivElement>;
}

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(
    null
  ) as RefObject<HTMLDivElement>;
  const toggleMenu = () => menuRef.current?.classList.toggle("show__menu");
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon">
              <RiShoppingBasketLine />
              <span className="cart__badge"></span>
            </span>

            <span className="user">
              <Link to="/login">
                <RiUserLine />
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user-selector";

import "./navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGem } from "@fortawesome/free-regular-svg-icons";
import { signOutUser } from "../../utils/firebase/firebase";

import { ReactComponent as Logo } from "../../assets/skyatlas.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { selectCartHasItems } from "../../store/cart/cart-selector";
import { setCartHasItems, setCartItems } from "../../store/cart/cart-action";

const Navigation = () => {
  /**
   * whenever the value inside this context updates, re-render any components using useContext()
   * However, this is where React virtual DOM come to save us
   * <=> If nothing changes on the DOM, re-render still won't happen.
   * But, all the code will be executed again.
   */
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const cartHasItems = useSelector(selectCartHasItems);

  const toggleCartDropdown = () => dispatch(setCartHasItems(!cartHasItems));

  const clearData = () => {
    signOutUser();
    dispatch(setCartItems([]));
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <FontAwesomeIcon icon={faGem} size="lg" /> SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={clearData}>
              <FontAwesomeIcon icon={faUser} size="lg" />
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              <FontAwesomeIcon icon={faUser} size="lg" />
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartHasItems && (
          <div className="cart-dropdown-bg" onClick={toggleCartDropdown}>
            <CartDropdown />
          </div>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

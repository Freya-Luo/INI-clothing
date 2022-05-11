import { Routes, Route } from "react-router-dom";
import { onAuthStateChangedListener, createUserFile } from "./utils/firebase/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "./store/user/user-action";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout";

const App = () => {
  const dispatch = useDispatch(); // only 1 reference returned for the whole redux store

  // first mounted, listener will check the authentication state automatically
  // when the listener is initialized (cb is executed first time);
  // furture cb runs depends on the "auth" state changes
  useEffect(() => {
    // unsubscribe is the return value of onAuthStateChanged() given by firebase
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFile(user); // will check is user exists
      }
      dispatch(setCurrentUser(user));
    });
    // run whatever returned when the component is unmounted
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

import React, { useContext, useState } from "react";
import { ApiContext } from "../../store";
import LoadingIcon from "../LoadingIcon";
import Navigation from "./Navigation";
import Symbols from "./Symbols";
import MobileNav from "./MobileNav";
import "./Sidebar.css";

const Sidebar = () => {
  const [hidden, setHidden] = useState(false);
  const { loading } = useContext(ApiContext);

  const hide = () => setHidden(true);
  const set = (visible: boolean) => setHidden(!visible);

  return (
    <>
      <MobileNav hidden={hidden} set={set} />
      <aside id="sidebar" className={hidden ? "hidden" : ""}>
        <section id="title">
          <h1>Wearhouse</h1>
        </section>
        <section id="category">
          <div>
            <h2>Category</h2>
            {loading && <LoadingIcon />}
          </div>
          <Navigation hide={hide} />
        </section>
        <section>
          <h2>Symbols</h2>
          <Symbols />
        </section>
      </aside>
    </>
  );
};
export default Sidebar;

import { useContext } from "react";
import { ApiContext } from "../../../store";
import LoadingIcon from "../../icons/LoadingIcon";
import MobileButton from "./MobileButton";
import "./MobileNav.css";

const MobileMenu = ({ set, hidden }: MobileMenuOptions) => {
  const { loading } = useContext(ApiContext);

  return (
    <div id="mobile-nav">
      <MobileButton onClick={() => set(hidden)} active={!hidden} />
      <span id="mobile-spinner">{loading && <LoadingIcon />}</span>
    </div>
  );
};
export default MobileMenu;

type MobileMenuOptions = {
  set: (visible: boolean) => any;
  hidden: boolean;
};

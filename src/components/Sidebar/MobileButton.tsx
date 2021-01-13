import { ReactComponent as HamburgerIcon } from "../icons/Menu.svg";
import "./MobileButton.css";

const MobileButton = ({ onClick }: { onClick: () => any }) => {
  return (
    <a className="mobile-button" href="/#/" onClick={onClick}>
      <HamburgerIcon />
    </a>
  );
};

export default MobileButton;

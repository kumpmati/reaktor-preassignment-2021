import { ReactComponent as HamburgerIcon } from "../icons/Menu.svg";
import { ReactComponent as LeftArrow } from "../icons/LeftArrow.svg";
import "./MobileButton.css";

const MobileButton = ({
  onClick,
  active,
}: {
  onClick: () => any;
  active: boolean;
}) => {
  return (
    <a className="mobile-button" href="/#/" onClick={onClick}>
      {active ? <LeftArrow /> : <HamburgerIcon />}
    </a>
  );
};

export default MobileButton;

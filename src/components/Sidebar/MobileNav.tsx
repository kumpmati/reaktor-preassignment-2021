import MobileButton from "./MobileButton";

const MobileMenu = ({
  set,
  hidden,
}: {
  set: (visible: boolean) => any;
  hidden: boolean;
}) => {
  return (
    <div>
      <MobileButton onClick={() => set(hidden)} active={!hidden} />
    </div>
  );
};
export default MobileMenu;

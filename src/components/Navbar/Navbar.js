import '../../sass/components/navbar.scss'
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className="header">
      <div className="header__logo">msh.Bank</div>
      <div className="header__tabs">
        <div>Bank</div>
        <div>Card</div>
        <div>Company</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <Button label="Get Started" withoutPadding />
    </div>
  );
}
export default Navbar;

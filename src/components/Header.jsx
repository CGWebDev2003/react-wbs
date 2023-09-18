import logo from "../WBS_Logo_white_web.png";
import Button from "./button";

function Logo() {
  return (
    <>
      <img src={logo} className="logo" alt="WBS Logo" />
    </>
  );
}

export default function Header() {
  return (
    <>
      <div className="header">
        <Logo />
        <Button />
      </div>
    </>
  );
}

// import Button from "./button";

function Button() {
  return (
    <>
      <button className="myButton">My Button</button>
    </>
  );
}

export default function ButtonGroup() {
  return (
    <>
      <div className="buttonGroup">
        <Button />
        <Button />
        <Button />
      </div>
    </>
  );
}

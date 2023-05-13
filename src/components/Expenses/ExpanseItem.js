import React from "react";
import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";
import "./ExpanseItem.css";

function ExpanseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // let changeBoolean = true;
  // const titleHandler = () => {
  //   if (changeBoolean) {
  //     setTitle("Hidden!!!");
  //     changeBoolean = false;
  //   } else {
  //     setTitle(props.title);
  //     changeBoolean = true;
  //   }

  // propsTitle = "Hello world";

  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={titleHandler}>Click</button> */}
    </Card>
  );
}
export default ExpanseItem;

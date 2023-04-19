import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // props.children = davam proto abych mohla do Card vkladat dalsi veci
  return <div className={classes}>{props.children}</div>;
};

export default Card;

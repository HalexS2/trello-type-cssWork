function Card({ descr, ...rest }) {
  return (
    <div {...rest} className="card">
      <div>{descr}</div>
    </div>
  );
}
export default Card;

function Pizza({ pizza }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  return (
    <>
      <li className={`pizza ${soldOut && "sold-out"}`}>
        <img src={photoName} alt="pizza" />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{price}</span>
          <p>{soldOut ? "Not in stock" : "in Stock"}</p>
        </div>
      </li>
    </>
  );
}
export default Pizza;

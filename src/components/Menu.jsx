import Pizza from "./Pizza"
import data from '../data'
function Menu() {
  return (
    <>
      <main className="menu">

        <h2>Our Menu</h2>
        <ul className="pizzas">

        {data.map((val)=>(<Pizza pizza={val} key={val.name}/>))}
        </ul>
      </main>
    </>
  )
}

export default Menu
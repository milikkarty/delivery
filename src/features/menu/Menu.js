import { menuData } from "../../data";

const Menu = () => {
    return (
        <div>
            <ul>
                {
                    menuData.map(item => (
                        <li>
                            <img src={item.img} alt={item.name} />
                            <h1>{item.name}</h1>
                            <h3>{item.price}</h3>
                            <button>Add to cart</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Menu;
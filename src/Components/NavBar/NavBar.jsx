import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">
            ShoppingWorld
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

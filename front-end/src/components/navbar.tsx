import { Link, Outlet } from "@tanstack/react-router";
const Navbar = () => {
  return (
    <nav className="bg-black">
      <div>
        <ul>
          <li>
            <Link to='/' className='text-black'>Mua sắm hoàn tiền</Link>
          </li>
        </ul>
        <hr/>
        <Outlet/>
      </div>
    </nav>
  );
};

export default Navbar;

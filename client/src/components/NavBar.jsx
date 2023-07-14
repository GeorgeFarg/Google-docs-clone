import Logo from "./logo"

const isLoggedIn = false;

const NavBar = () => {
  return (
    <nav className="h-20 bg-white flex items-center px-20 justify-between shadow-md">
        <Logo />
        {
          isLoggedIn ? 
          <></> : 
          <button className="bg-blue-500 rounded-lg text-white px-5 py-2 ">Login</button>
        }
    </nav>
  )
}

export default NavBar
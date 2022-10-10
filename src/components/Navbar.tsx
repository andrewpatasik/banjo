const Navbar = () => {
  return (
    <div>
      {/* Topbar */}
      <nav className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-rose-500">Banjoo</h1>
        </div>
        <ul className="flex">
          <li>item #1</li>
          <li>item #2</li>
          <li>item #3</li>
        </ul>
      </nav>

      {/* Bottombar */}
    </div>
  );
};

export default Navbar;

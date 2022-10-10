const Navbar = () => {
  return (
    <div>
      {/* Topbar */}
      <nav className="fixed top-0 w-full flex items-center justify-between p-3">
        <div>
          <h1 className="text-3xl">Banjoo</h1>
        </div>
        <ul className="flex space-x-2">
          <li>item#1</li>
          <li>item#2</li>
          <li>item#3</li>
        </ul>
      </nav>

      {/* Bottombar */}
      <nav className="fixed bottom-0 w-full h-16">
        <ul className="flex space-x-2 flex items-center justify-evenly">
          <li>item#1</li>
          <li>item#2</li>
          <li>item#3</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

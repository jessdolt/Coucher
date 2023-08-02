const Header = () => {
  return (
    <header className="border-b border-b-neutral-600 ">
      <nav className="flex items-center py-4">
        <div className="flex-1 max-w-[290px]">
          <h2 className="text-white font-black text-4xl leading-none">
            <span className="text-teal-400">C</span>
            oucher
          </h2>
        </div>
        <ul className="flex gap-12 ml-4">
          <li>Services</li>
          <li>About us</li>
          <li>Cases</li>
        </ul>

        <button className="uppercase ml-auto">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;

function Header() {
  return (
    <>
      <nav className="flex justify-between py-[20px] px-[40px]">
        <div className="text-4xl font-semibold">New App</div>
        <div>
          <button className="border-2 rounded-xl py-[6px] px-[18px] mx-[10px] text-lg font-medium">
            Log in
          </button>
          <button className="border-2 rounded-xl py-[6px] px-[18px] mx-[10px] text-lg font-medium">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;

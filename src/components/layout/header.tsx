import { useState, ChangeEvent } from 'react';
import '../../App.css';

const Header = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex justify-between items-center p-8 h-14 w-full z-2 bg-[#FFFFFF] rounded-bl-md rounded-br-md">
      <div className="flex rounded-full bg-[#F5F7FA] p-1 pl-2">
        <img
          src={'/assets/searchIcon.svg'}
          alt="search"
          className="w-5 h-5 text-gray-500 mr-2"
          height="20px"
          width="20px"
        />
        <input
          className="border-none text-sm"
          placeholder="Search for something"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex justify-between items-center gap-5">
      {/* <div>
          <img src={'/assets/cartIcon.svg'} alt="cart icon" height="40px" width="40px" />
        </div> 
         <div>
          <img src={'/assets/cubeIcon.svg'} alt="cube icon" height="40px" width="40px" />
        </div> */}
        <div>
          <img src={'/assets/tick.svg'} alt="tick icon" height="26px" width="26px" />
        </div>
        <div>
          <img src={'/assets/bell.svg'} alt="notification icon" height="26px" width="26px" />
        </div>
         {/* <div>
          <img src={'/assets/dotsIcon.svg'} alt="dots icon" height="19px" width="4px" />
        </div>  */}
        <div>
          <img src={'/assets/avatar.svg'} alt="avatar" height="38px" width="38px" />
        </div>
      </div>
    </div>
  );
};

export default Header;

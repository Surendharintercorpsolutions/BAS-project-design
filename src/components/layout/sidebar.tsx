import React, { useState } from 'react';
import sidebarMenu from './sidebarMenu';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';

// Define the type of each sidebar menu item
interface SidebarMenuItem {
  icon: string;
  screenName: string;
  path: string;
}

const Sidebar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  // Handle switching tabs
  const handleSwitchTab = (item: string, index: number) => {
    setCurrentIndex(index);
    navigate(item)
  };

  // Toggle sidebar expansion
  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  const closeDrawer = (): void => {
    setOpen(false);
  };

  const handleDialogOpen = (): void => {
    setOpen(true);
  };

  return (
    <div className={`flex flex-col bg-white p-3 transition-all duration-500 ease-in-out ${isExpand ? 'w-22' : 'w-60'} min-h-full`}>
      <div className='flex justify-center'>
        <img src={'/assets/bas.svg'} width={isExpand ? "50px" : "120px"} height={isExpand ? "40px" : "55px"} />
        <button
          className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${isExpand ? 'top-4' : 'top-9'} ${isExpand ? 'left-18' : 'left-56'}`}
          onClick={handleExpand}
        >
          <img
            src={isExpand ? '/assets/arrowLeft.svg' : '/assets/expandIcon.svg'}
            width="24"
            height="24"
            alt="toggle sidebar"
          />
        </button>
      </div>
      <div className="my-3 border-t border-gray-300"></div>
      {sidebarMenu.sidebarMenu.map((item: SidebarMenuItem, index: number) => (
        <div key={index.toString()} className='p-1'>
          <button
            className={`flex flex-row items-center ${currentIndex === index ? 'bg-[#EEF2FF]' : 'bg-none'} w-full hover:bg-[#EEF2FF]`}
            onClick={() => handleSwitchTab(item.path, index)}
          >
            <div className={`${isExpand ? 'flex justify-center' : 'grid grid-cols-6 gap-3'} p-2 w-full`}>
              <div>
                <img
                  className="w-[20px] h-[20px]"
                  src={item.icon}
                  alt={item.screenName}
                />
              </div>

              {!isExpand && (
                <>
                  <div className="text-left col-span-4">
                    <div
                      className={`text-sm font-medium ${currentIndex === index ? 'text-[#0264DB]' : 'text-[#64748B]'} transition-transform duration-300 hover:translate-x-2 hover:text-black w-full`}
                    >
                      {item.screenName}
                    </div>
                  </div>
                  <div>
                    <img
                      src={'/assets/arrowIcon.svg'}
                      height={'16px'}
                      width={'16px'}
                      alt="arrow"
                    />
                  </div>
                </>
              )}
            </div>
          </button>
        </div>
      ))}
      <div className="my-3 border-t border-gray-300"></div>
      <div>
        <div className=' p-2 text-sm font-medium text-[#0264DB]'>SETUP</div>
        {sidebarMenu.setUp.map((item, index) =>
          <div key={index.toString()} className='p-1'>
            <button
              className={`flex flex-row items-center 'bg-none' w-full `}
              onClick={() => handleDialogOpen()}
            >
              <div className={`${isExpand ? 'flex justify-center' : 'grid grid-cols-6 gap-3'} p-2 w-full hover:bg-[#EEF2FF]`}>
                <div>
                  <img
                    className="w-[20px] h-[20px]"
                    src={item.icon}
                    alt={item.screenName}
                  />
                </div>

                {!isExpand && (
                  <>
                    {/*<div className="text-left font-medium col-span-4 transition-transform duration-300 hover:translate-x-2 hover:text-black">
                    <div
                      className={`text-sm text-[#64748B]`}
                    >
                      {item.screenName}
                    </div>
                  </div>*/}

                    <div className="text-left col-span-4">
                      <div
                        className={`text-sm font-medium text-[#64748B] transition-transform duration-300 hover:translate-x-2 hover:text-black`}
                      >
                        {item.screenName}
                      </div>
                    </div>


                  </>
                )}
              </div>
            </button>
          </div>
        )}
      </div>
      <div>
        <Drawer
          title="Promotion"
          placement="bottom"
          height={520}
          onClose={closeDrawer}
          open={open}
        >
          {/* Drawer Content */}
          <p>Here goes your content...</p>
          <p>You can put forms, trees, or anything here.</p>
        </Drawer>


      </div>
    </div>
  );
};

export default Sidebar;

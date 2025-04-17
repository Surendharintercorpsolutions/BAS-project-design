import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface DashboardMenuItem {
  title: string;
  count: number;
  imgPath: string;
}

interface TableRow {
  month: string;
  total: number;
}

type StepIndicatorProps = {
  activeStep: number;
  totalSteps?: number;
};


function ClientDashboard() {
  const [selectedBar, setSelectedBar] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + images.length) % images.length);
  // };


  const series: number[] = [0];

  const dashboardMenu: DashboardMenuItem[] = [
    { title: 'Current Present', count: 2711, imgPath: '/assets/newArrow.svg' },
    { title: 'Attendance', count: 2240, imgPath: '/assets/notesIcon.svg' },
    { title: 'Total Profile', count: 0, imgPath: '/assets/profileIcon.svg' },
    { title: 'Health Status', count: 2711, imgPath: '/assets/healthIcon.svg' },
    { title: 'Document Expiry', count: 128, imgPath: '/assets/newArrow.svg' },
    { title: 'Certificate Expiry', count: 692, imgPath: '/assets/notesIcon.svg' },
    { title: 'Total Profile', count: 0, imgPath: '/assets/profileIcon.svg' },
    { title: 'Health Status', count: 2711, imgPath: '/assets/healthIcon.svg' },
  ];

  const tableData: TableRow[] = [
    { month: 'Jan-25', total: 0 },
    { month: 'ICS', total: 0 },
  ];

  const barOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      events: {
        dataPointSelection: (_event, _chartContext, config) => {
          setSelectedBar(config.dataPointIndex ?? null);
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: false,
        borderRadiusApplication: 'end',
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    colors: [
      ({ dataPointIndex }: { dataPointIndex: number }) =>
        dataPointIndex === selectedBar ? '#FFB31F' : '#EEEEEE',
    ],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: { type: 'none' },
      },
    },
  };

  const barSeries = [
    {
      name: 'Workforce',
      data: [5, 10, 15, 20, 25, 30, 35, 40, 45],
    },
  ];

  const sliderData = [
    {
      permission: 'Leave Approval',
      id: "A_1606202",
      category: 'CL~Casual Leave',
      fromDate: '10-10-2025',
      toDate: '12-10-2025'
    },
    {
      permission: 'Claim Approval',
      id: "A_1606202",
      category: 'FOOD',
      amount: 73
    },
    {
      permission: 'Leave Approval',
      id: "A_1606202",
      category: 'CL~Casual Leave',
      fromDate: '10-10-2025',
      toDate: '12-10-2025'
    },
  ]

  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center gap-3 border-b-1 border-[#E2E8F0] pl-5 pr-5 pt-2">
        <div className="text-[#0264DB] font-medium text-base">Dashboard</div>
        <div className="flex justify-center items-center gap-3">
          <button><img src="/assets/filterIcon.svg" alt="Filter" /></button>
          <button><img src="/assets/dasboardMenu.svg" alt="Menu" /></button>
          <button><img src="/assets/bookmark.svg" alt="Bookmark" /></button>
        </div>
      </div>
      <div className='flex justify-center gap-3 items-center' >
        {sliderData.map((item) =>
          <div className='flex justify-center gap-3 items-center h-[90px] w-[279px] border-1 rounded-tr-3xl rounded-bl-3xl bg-[#EEF2FF] border-[#0264DB57]'>
            <div >
              <img src={"/assets/avatar.svg"} width={39} height={45} />
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-row gap-1 '>
                <div>
                  <div className='text-[sm] font-normal'>{item.permission}</div>
                </div>
                {/* <div className="h-2 w-[0] border-1 bg-gray-400"></div> */}
                <div>
                  <div className='text-[xs] font-light'>{item.id}</div>
                </div>
              </div>
              <div>
                <div className=" inline-block text-[#0264DB] border-b border-[#0264DB] text-[10px] font-semibold">
                  {item.category}
                </div>
              </div>
              {item.permission === 'Leave Approval' ?
                <div>
                  <div className='flex gap-1'>
                    <div>
                      <div className='text-xs font-normal'>From: <span className='text-xs font-medium'>{item.fromDate}</span></div>
                    </div>
                    <div>
                      <div className='text-xs font-normal'>To: <span className='text-xs font-medium'>{item.toDate}</span></div>
                    </div>

                  </div>
                  <div>
                    <div className='text-xs font-normal'>Days: <span className='text-xs font-medium'>2</span></div>
                  </div>
                </div>
                :
                <div className='flex flex-col justify-end'>
                  <div>
                    <div className='text-sm font-light'>Total Claim Amount : <span className='text-xs font-semibold'>73</span></div>
                  </div>
                  <div className='flex justify-end gap-2'>
                    <div>
                      <button><img src={'/assets/approvalIcon.svg'} /></button>
                    </div>
                    <div>
                      <button><img src={'/assets/closeIcon.svg'} /></button>
                    </div>

                  </div>
                </div>
              }


            </div>
          </div>
        )}
     
      </div>

      <div className="flex justify-center pt-2 pb-10">
        <StepIndicator activeStep={0} />
      </div>


      {/* Dashboard Cards */}
      <div className="grid grid-cols-4 gap-4">
        {dashboardMenu.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-between justify-center w-[235px] h-[140px] border border-[#E2E8F0] rounded-xl p-4 gap-4"
          >
            <div className='flex items-between justify-between'>
              <div>
                <div className="text-sm font-medium">{item.title}</div>
              </div>
              <div>
                <img className='w-[17px] h-[20px]' src={item.imgPath} />
              </div>
            </div>
            <div>
              <div className='text-4xl font-bold'>{item.count}</div>
            </div>
            <div className='flex items-center gap-2'>
              <div>
                <img src={'/assets/trendIcon.svg'} />
              </div>
              <div>
                <div className='text-[##252C58] font-light text-xs'>out of 3989</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart & Table */}
      <div className="grid grid-cols-2 w-full h-[240px] gap-3 bg-white">
        {/* Bar Chart */}
        <div className="w-full border border-gray-300 rounded-lg">
          <div className="flex justify-between p-4">
            <div className="text-base font-semibold">Current Work Force</div>
            <div className="flex gap-2 items-center">
              <div className="text-base font-semibold">Type</div>
              <select className="border border-gray-300 rounded-md w-20 p-1">
                <option className="font-normal text-sm">Chart</option>
              </select>
            </div>
          </div>
          <ReactApexChart options={barOptions} series={barSeries} type="bar" height={180} />
        </div>

        {/* Mini Table */}
        <div className="w-full border border-gray-300 rounded-lg">
          <div className="flex justify-between p-2">
            <div className="text-base font-semibold">Workforce Monthly Statistics</div>
            <div className="flex gap-2 items-center">
              <div className="text-base font-semibold">Type</div>
              <select className="border border-gray-300 rounded-md w-20 p-1">
                <option className="font-normal text-sm">Chart</option>
              </select>
            </div>
          </div>


          <div>
            <ReactApexChart options={barOptions} series={barSeries} type="bar" height={180} />
          </div>
        </div>
      </div>

      {/* Breakdown Table */}
      <div className="border border-[#E4E4E4] rounded-lg mt-5">
        <div className="border-b border-[#E4E4E4] p-2">
          <div className="text-base font-semibold">Manpower Breakdown</div>
        </div>
        <div className="pl-3 pr-3 pt-3">
          <div className="overflow-hidden rounded-lg border border-gray-300">
            <table className="min-w-full w-full">
              <thead>
                <tr>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-center">S.No</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Current Present</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Total Attendance</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Total Absent</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Total Profiles</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">% Total Profiles</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((_, index) => (
                  <tr key={index} className="border-[#E4E4E4] border-1">
                    <td className="p-2 text-sm text-[#534D59] text-center">{index + 1}</td>
                    <td className="p-2 text-sm text-[#534D59]">1</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination />
      </div>

      <div className="border border-[#E4E4E4] rounded-lg mt-5">
        <div className="border-b border-[#E4E4E4] p-2">
          <div className="text-base font-semibold">Nationality Breakdown</div>
        </div>
        <div className="pl-3 pr-3 pt-3">
          <div className="overflow-hidden rounded-lg border border-gray-300">
            <table className="min-w-full w-full">
              <thead>
                <tr>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-center">S.No</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Current Present</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Total Attendance</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Total Absent</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">Total Profiles</th>
                  <th className="p-2 text-sm font-medium text-[#534D59] text-left">% Total Profiles</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((_, index) => (
                  <tr key={index} className="border-[#E4E4E4] border-1">
                    <td className="p-2 text-sm text-[#534D59] text-center">{index + 1}</td>
                    <td className="p-2 text-sm text-[#534D59]">1</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                    <td className="p-2 text-sm text-[#534D59]">0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

const Pagination = () => (
  <div className="flex items-center justify-center gap-2 p-2 text-sm text-[#474747]">
    <div>Page</div>
    <div>
      <select className="px-5 py-1 border border-gray rounded-md text-center">
        {[1, 2, 3, 4, 5, 6, 7].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
    </div>
    <div>of 20</div>
    <div className="flex justify-center ml-auto">
      <nav>
        <ul className="flex items-center space-x-2">
          {['<', '1', '2', '3', '...', '10', '>'].map((item, idx) => (
            <li key={idx}>
              <button className={`px-3 py-1 text-[13px] border border-[#E2E8F0] ${item === '1' ? 'text-white bg-[#0264DB]' : ''}`}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

const StepIndicator: React.FC<StepIndicatorProps> = ({ activeStep, totalSteps = 3 }) => {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => {
        const isActive = index === activeStep;
        return (
          <div
            key={index}
            className={`transition-all duration-300 ${isActive
                ? "w-8 h-3 rounded-full bg-blue-600"
                : "w-3 h-3 rounded-full bg-gray-300"
              }`}
          />
        );
      })}
    </div>
  );
};

export default ClientDashboard;

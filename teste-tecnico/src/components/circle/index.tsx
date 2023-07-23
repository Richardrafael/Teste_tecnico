import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import LegendaCircle from './legenda';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [62, 13, 23],
      backgroundColor: [
        "#497AF9", 
        "#789DFB",
        "#E5E5E5"
      ],
      borderColor: [
        "#497AF9", 
        "#789DFB",
        "#E5E5E5"
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display : false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

export function GraficoCircle() {
  return (
    <>
    <div className='flex flex-col'>
    <span className="text-lg font-Poppins text-quadros tracking-widest leading-[2rem] font-semibold ">
    Users
    </span>
    <span className="text-sm font-Poppins text-[#222B45] tracking-widest font-medium ">
    4,209
    </span>
    </div>
    <div className='h-[10rem]  flex   '>
    
    <div className='flex flex-row justify-between w-full'>
     <div className='flex flex-col gap-4 w-32 mt-10'>
     <LegendaCircle titulo='62% New' style="w-[1rem] bg-[#497AF9] h-[0.78rem] rounded-[0.16rem]"/>
      <LegendaCircle titulo='13% Returning' style="w-[1rem] bg-[#789DFB] h-[0.78rem] rounded-[0.16rem]"/>
      <LegendaCircle titulo='23% Inactive' style="w-[1rem] bg-[#E5E5E5] h-[0.78rem] rounded-[0.16rem]"/>
    </div> 
    <div className=''>
      <Doughnut options={options} data={data} />
    </div>
    </div>
    </div>
    </>

  )
}

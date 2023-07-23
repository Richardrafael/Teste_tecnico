import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import lastMonth  from "../../assets/lastMonth.svg"
import thisMonth  from "../../assets/thisMonth.svg"
import LegendaLine from './legendaline';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];const dados = [10 , 9 , 9.5 , 8.9 , 9.5 , 8 , 11]
const dados1 = [7 , 7.5 , 6.5  , 6.2 , 6.8 , 7 , 8]


export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dados,
      borderColor: '#00E096',
      backgroundColor: '#00E096',
    },
    {
      label: 'Dataset 2',
      data: dados1,
      borderColor: '#007DD6',
      backgroundColor: '#007DD6',
    },
  ],
};

export function LineGrafico() {
  return (
    <>
    <span className="text-lg font-Poppins text-quadros tracking-widest leading-[2rem] font-semibold ">
    Customer Satisfaction
    </span>
    <div className='h-[10rem] flex justify-center'>
     <Line options={options} data={data} />
    </div>
    <div className='w-full justify-center flex my-2'>
        <div className='bg-[#EDF2F6] h-[0.120rem]  w-4/5 items-center flex justify-center'/>
    </div>
    <div className='w-full justify-center flex'>
    <div className='w-3/4 justify-center gap-3  items-center flex flex-row'>
    <LegendaLine icone={lastMonth} titulo='Last Month' numero={3.004}/>
    <div className='bg-[#BDC9D3] h-6 w-[0.0625rem]'/>
    <LegendaLine icone={thisMonth} titulo='This Month' numero={4.504}/>
   </div>
    </div>
   
    </>

  )
}

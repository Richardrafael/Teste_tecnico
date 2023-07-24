import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import bilhete  from "../../assets/bilhete.svg"
  import bolsa  from "../../assets/bolsa.svg"
  import { Bar } from 'react-chartjs-2';
  import Legenda from './legenda';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    scales: {
    x: {
    //   display: false, 
    },
    y: {
      display: false, 
    //   beginAtZero: true,
    },
  },
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
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
  const dados1  = [ 8 , 7.5 , 9 , 7 , 10 , 10 , 10]
  const dados  = [ 7.5 , 6.5 , 5 , 6.5 , 8 , 8 , 8]
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Reality Sales',
        data: dados,
        backgroundColor: '#4AB58E',
        borderRadius: 5,
      },
      {
        label: 'Target Sales',
        data: dados1,
        backgroundColor: '#FFCF00',
        borderRadius: 5,
      },
    ],
  };
  console.log(data)
  export function GraficoBarra() {
    return(
    <>
    <span className="text-lg font-Poppins text-quadros tracking-widest leading-[2rem] font-semibold ">
    Target vs Reality
    </span>
    <div className='h-[8rem] sm:h-[10rem] xl:w-[30rem] flex justify-center'>
    <Bar options={options} data={data} />
    </div>
    <div className='flex gap-2 mt-2 flex-col '>
     <Legenda 
     icone={bolsa} 
     titulo='Reality Sales'
     subtitulo='Global'
     numero={8.823}
     />
      <Legenda 
     icone={bilhete} 
     titulo='Target Sales'
     subtitulo='Commercial'
     numero={12.122}
     />
    </div> 
    </>
    ) 
  }
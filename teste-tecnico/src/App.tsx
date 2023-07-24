import { GraficoBarra } from './components/Bar'
import { LineGrafico } from './components/Line'
import Tabela from './components/Tabela'
import Titulo from './components/Titulo'
import Today from './components/Today'
import { GraficoCircle } from './components/circle'
import Menu from './components/menu'

function App() {


  return (
    <>
     <Menu></Menu>
     <section className='bg-body overflow-x-hidden w-full h-full'>
     <Titulo nome="Dashbord"/>
     <div className="grid m-5 xl:grid-cols-7 grid-cols-1  xl:pl-[18rem] gap-4">
      <div className="col-start-auto col-span-1 rounded-[1.25rem] xl:h-[17rem] mt-[5rem] xl:mt-0 flex-col shadow-3xl xl:col-span-4  bg-Titulo p-4">
        <Today/>
      </div>
      <div className="bg-Titulo col-span-1 rounded-[1.25rem] shadow-3xl min-h-[17rem] sm:h-[17rem] xl:col-span-3 p-4">
      <GraficoCircle/>
      </div>
      <div className="xl:col-start-auto col-span-1 flex flex-col rounded-[1.25rem] h-[19rem] shadow-3xl xl:col-span-4  bg-Titulo p-4">
        <GraficoBarra/>
      </div>
      <div className="xl:col-start-auto bg-Titulo col-span-1 rounded-[1.25rem] flex flex-col shadow-3xl h-[19rem] xl:col-span-3 p-4">
      <LineGrafico/>
      </div>
      <div className='bg-Titulo rounded-[1.25rem] shadow-3xl overflow-auto col-span-1 h-[17rem] xl:col-span-7 p-3'>
        <Tabela/>
      </div>
      </div>
     </section>
    </>
  )
}

export default App

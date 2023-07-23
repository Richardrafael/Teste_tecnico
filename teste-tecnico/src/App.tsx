import Tabela from './components/Tabela'
import Titulo from './components/Titulo'
import Today from './components/Today'
import Menu from './components/menu'

function App() {


  return (
    <>
     <Menu></Menu>
     <section className='bg-body w-full h-full'>
     <Titulo nome="Dashbord"/>
     <div className="grid m-5 grid-cols-7 pl-[18rem] gap-4">
      <div className="col-start-auto rounded-[1.25rem] h-[17rem] flex-col shadow-3xl col-span-4  bg-Titulo p-4">
        <Today></Today>
      </div>
      <div className="bg-Titulo  rounded-[1.25rem] shadow-3xl h-[17rem] col-span-3 p-2">
      
      </div>
      <div className="col-start-auto rounded-[1.25rem] h-[17rem] shadow-3xl col-span-4 box bg-Titulo p-4">
        
      </div>
      <div className="bg-Titulo rounded-[1.25rem] shadow-3xl h-[17rem] col-span-3 p-2">
      
      </div>
      <div className='bg-Titulo rounded-[1.25rem] shadow-3xl h-[17rem] col-span-7 p-3'>
        <Tabela/>
      </div>
      </div>
     </section>
    </>
  )
}

export default App

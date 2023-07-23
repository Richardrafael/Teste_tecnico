
interface PropsCampos {
    nome : string , 
    icone : string, 

 }

function Campos({nome , icone} : PropsCampos) {
  return (
    <>
  { 
  nome == "Dashbord" ?  
  <>
  <div className="flex bg-secondary cursor-pointer p-2 pl-6 w-[12rem] rounded-xl h-[3rem] items-center justify-start  flex-row gap-5">
    <img src={icone} alt="" />
     <span className="text-secondary font-Poppins font-semibold text-lg leading-3 ">
        {nome}
     </span>
    </div>
     </> 
     :
    <div className="flex p-2 pl-6 cursor-pointer w-[12rem] rounded-xl h-[3rem] items-center justify-start  bg-blue-900 flex-row gap-5">
    <img src={icone} alt="" />
     <span className="text-primary font-Poppins font-normal text-lg leading-3 ">
        {nome}
     </span>
    </div>
    }
    
    </>
  )
}

export default Campos
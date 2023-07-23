import bolinha  from "../../assets/bolinha.svg"
import setinha  from "../../assets/setinha.svg"
import notifica  from "../../assets/notifica.svg"


interface PropsTitulo {
 nome : string
}
export default function Titulo({nome } : PropsTitulo) {
  return (
    <>
    <div className="pl-[18rem] bg-Titulo  flex justify-between items-center flex-row w-full h-20 "  >
    <span className="font-Poppins pl-5 text-4xl text-Titulo font-semibold leading-[140%]">    
        {nome}
    </span> 
    <div className="pr-5 flex gap-5 flex-row">
     <div className="p-2 rounded-xl bg-notifica">
        <img src={bolinha}/>
        <img src={notifica} alt="" />
     </div>
     <div className="flex flex-col">
        <div>
        <div className="flex text-Titulo text-base font-Poppins flex-row font-medium w-20 items-center justify-between">
        <span >
            User
        </span>
     <img src={setinha}/>
     </div>
        </div>
        
        <span className="text-primary font-Poppins font-normal text-sm">
            Admin
        </span>
     </div>
    </div>
    </div>
    </>
  )
}

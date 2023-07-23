import Dowload  from "../../assets/dowload.svg"
import Total from "./total"
import icone1quadro  from "../../assets/icone1quadro.svg"
import icone2quadro  from "../../assets/icone2quadro.svg"
import icone3quadro  from "../../assets/icone3quadro.svg"


export default function Today() {
  return (
    <>
    <div className="w-full items-center justify-between flex font-Poppins  flex-row "> 
     <div className=" flex flex-col items-center">
     <span className="text-lg text-quadros tracking-widest leading-[2rem] font-semibold ">
     Today’s Sales
     </span>   
     <span className=" text-primary text-base leading-[1.87rem] font-normal ">
      Sales Summery   
     </span> 
    </div>
    <div className="px-4 py-1  cursor-pointer hover:bg-[#d9dfe57b] flex border border-[#C3D3E2] rounded-lg flex-row justify-center gap-2" >
        <img src={Dowload} alt="" /> 
         <span className="font-Poppins text-sm leading-[2rem] font-medium text-[#0F3659]">
            Export
         </span>
    </div>
    </div>
    <div className="w-full mt-4 flex justify-center items-center ">
    <div className="w-full  gap-3    grid grid-cols-6">
        <Total 
        icone={icone1quadro}
        titulo="$1K"
        subTitulo="Total Sales"
        information="+8% from yesterday"
        backgroud="w-44 p-4 gap-2 flex flex-col  rounded-2xl bg-quadro1 h-[10.2rem] col-span-2"/>
        <Total 
        icone={icone2quadro}
        titulo="300"
        subTitulo="Total Order"
        information="+5% from yesterday"
        backgroud="w-44 p-4 gap-2 flex flex-col  rounded-2xl bg-quadro2 h-[10.2rem] col-span-2"/>
        <Total 
        icone={icone3quadro}
        titulo="5"
        subTitulo="Product Sold"
        information="+1.2% from yesterday"
        backgroud="w-44 p-4 gap-2 flex flex-col  rounded-2xl bg-quadro3 h-[10.2rem] col-span-2"/>
    </div>
    </div>
   
    </>
  )
}

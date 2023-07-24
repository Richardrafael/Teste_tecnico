import bolinha  from "../../assets/bolinha.svg"
import setinha  from "../../assets/setinha.svg"
import notifica  from "../../assets/notifica.svg"
import menu  from "../../assets/menu.svg"
import Dashbord  from "../../assets/dashbord.svg"
import LeaderBoard  from "../../assets/LeaderBoard.svg"
import Message  from "../../assets/messages.svg"
import order  from "../../assets/order.svg"
import SalesReport  from "../../assets/SalesReport.svg"
import Setting  from "../../assets/Setting.svg"
import Products  from "../../assets/Products.svg"
import SignOut  from "../../assets/SignOut.svg"
import x  from "../../assets/x.svg"
import { useState } from "react"
import Campos from "../menu/campos"


interface PropsTitulo {
 nome : string
}
export default function Titulo({nome } : PropsTitulo) {

  const [isOpen , setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className="xl:pl-[18rem] bg-Titulo fixed  xl:sticky  flex justify-between items-center flex-row w-screen xl:w-full h-20 "  >
    <span className="font-Poppins pl-5 hidden xl:flex  xl:text-4xl text-Titulo font-semibold leading-[140%]">    
        {nome}
    </span> 
    <div className="xl:hidden" >
      <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            
              {isOpen ? (
                <img className="pl-4" src={x} alt="" />
              ) : (
                <img className="pl-4" src={menu} alt="" />
              )}
          </button>
      </div>
    <div className="pr-5 flex gap-5  flex-row">
     <div className="p-2 rounded-xl cursor-pointer bg-notifica">
        <img src={bolinha}/>
        <img src={notifica} alt="" />
     </div>
     <div className="flex flex-col cursor-pointer">
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

    { isOpen &&
     <div className="bg-primary  flex xl:hidden mt-[5rem]   w-screen gap-3 h-full fixed  flex-col items-center justify-start pt-8 ">
     <Campos icone={Dashbord} nome="Dashbord"/>
     <Campos icone={LeaderBoard} nome="LearderBoard"/>
     <Campos icone={order} nome="order"/>
     <Campos icone={Products} nome="Products"/>
     <Campos icone={SalesReport} nome="Sales Report"/>
     <Campos icone={Message} nome="Message"/>
     <Campos icone={Setting} nome="Setting"/>
     <div className="flex absolute bottom-0 hover:bg-[#ff0000b6]  p-2 pl-6 mb-[6rem] cursor-pointer w-[12rem] rounded-xl h-[3rem] items-center justify-start  bg-blue-900 flex-row gap-5">
    <img src={SignOut} alt="" />
     <span className="text-sign  font-Poppins font-normal text-lg leading-3 ">
        Sign Out
     </span>
    </div>
      </div>}
    </>
  )
}

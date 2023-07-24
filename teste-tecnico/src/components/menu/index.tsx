import Dashbord  from "../../assets/dashbord.svg"
import icone  from "../../assets/icone.svg"
import LeaderBoard  from "../../assets/LeaderBoard.svg"
import Message  from "../../assets/messages.svg"
import order  from "../../assets/order.svg"
import SalesReport  from "../../assets/SalesReport.svg"
import Setting  from "../../assets/Setting.svg"
import Products  from "../../assets/Products.svg"

import SignOut  from "../../assets/SignOut.svg"
import Campos from "./campos"



function Menu() {
  

  return (
    <>
  
 
      <div className="bg-primary  hidden xl:flex z-10   w-[18rem] gap-3 h-full fixed  flex-col items-center justify-start pt-8 ">
    <div className="hidden xl:flex my-1 p-2 pl-6 w-[12rem] rounded-xl h-[3rem] items-center justify-start  flex-row gap-5">
    <img src={icone} alt="" />
     <span className="text-Titulo leading-[150%] text-3xl  font-Poppins font-semibold  ">
      Site
     </span>
    </div>
     <Campos icone={Dashbord} nome="Dashbord"/>
     <Campos icone={LeaderBoard} nome="LearderBoard"/>
     <Campos icone={order} nome="order"/>
     <Campos icone={Products} nome="Products"/>
     <Campos icone={SalesReport} nome="Sales Report"/>
     <Campos icone={Message} nome="Message"/>
     <Campos icone={Setting} nome="Setting"/>
     <div className="flex absolute bottom-0 hover:bg-[#ff0000b6]  p-2 pl-6 mb-[0.7rem] cursor-pointer w-[12rem] rounded-xl h-[3rem] items-center justify-start  bg-blue-900 flex-row gap-5">
    <img src={SignOut} alt="" />
     <span className="text-sign  font-Poppins font-normal text-lg leading-3 ">
        Sign Out
     </span>
    </div>
      </div>
    </>
  )
}

export default Menu

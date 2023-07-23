import { useState } from "react"


export default function Tabela() {
  const [dados] =  useState ([
    {
      "id" : "01" , 
      "name" : "Home Decor Range", 
      "popularity" : 80,
      "sales" : 45
    },
    {
      "id" : "02" , 
      "name" : "Disney Princess Pink Bag 18'", 
      "popularity" : 60,
      "sales" : 29
    }, 
    {
      "id" : "03" , 
      "name" : "Bathroom Essentials", 
      "popularity" : 40,
      "sales" : 18
    } , 
    {
      "id" : "04" , 
      "name" : "Apple Smartwatches", 
      "popularity" : 20,
      "sales" : 25
    }
  ])


  return (
    <>
      <span className="text-lg p-4 font-Poppins text-quadros tracking-widest leading-[2rem] font-semibold ">
          Top Products
      </span>
      <table className="w-full gap-4 font-Poppins md:table-fixed table-fixed "> 
      <thead>
                <tr className="text-left border-b border-[#EDF2F6] text-gray-50  text-xl">
                  <th className="text-table leading-[1rem] text-[0.8125rem] font-normal ">#</th>
                  <th className="text-table leading-[1rem] text-[0.8125rem] font-normal ">Name</th>
                  <th className="text-table leading-[1rem] text-[0.8125rem] font-normal ">Popularity</th>
                  <th className="text-table leading-[1rem] text-[0.8125rem] font-normal ">Sales</th>
                </tr>
        </thead>
       { dados &&
       dados.map(( i ) =>(
        <tbody  className="border-b text-linhas border-[#EDF2F6]">
        <td className="font-normal text-sm p-2 ">{i.id} </td>
        <td className="font-normal text-sm p-2">{i.name}</td>
        <td className="font-normal text-sm p-2"> 
        { i.popularity >= 80 ?
         <div className="w-full h-[0.5rem] bg-[#CDE7FF;] rounded">
         <div className="w-4/5 h-full bg-[#0095FF] rounded"></div>
        </div> :
         i.popularity >= 60 ? 
          <div className="w-full h-[0.5rem] bg-[#8CFAC7;] rounded">
         <div className="w-[60%] h-full bg-[#00E096;] rounded"></div>
        </div> : 
        i.popularity >= 40 ?  
        <div className="w-full h-[0.5rem] bg-[#C5A8FF;] rounded">
          <div className="w-[40%] h-full bg-[#884DFF;] rounded"></div>
         </div> :
           <div className="w-full h-[0.5rem] bg-[#FFD5A4;] rounded">
          <div className="w-[20%] h-full bg-[#FF8F0D;] rounded"></div>
         </div> 
         }
        </td>
        <td className="font-normal text-sm p-2">
          <div >
          <span className={ 
          i.sales == 45 ? "p-1 text-[#0095FF] bg-variacao1 px-10 text-[0.8125] rounded-lg leading-[1rem] border border-[#0095FF] "
          :
          i.sales == 29 ? " border-[#00E58F] text-[#00E58F] bg-variacao2 px-10 p-1 text-[0.8125] rounded-lg leading-[1rem] border " 
          : 
          i.sales == 18 ? " border-[#884DFF] text-[#884DFF] bg-variacao3 px-10 p-1 text-[0.8125] rounded-lg leading-[1rem] border " : 
          " border-[#FF8900] text-[#FF8900] bg-variacao4 px-10 p-1 text-[0.8125] rounded-lg leading-[1rem] border"}>
          {i.sales}%
          </span>
          </div>
         </td>
        </tbody>
       ))
       
        }

      </table>   
    </>
  )
}

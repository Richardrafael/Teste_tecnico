

interface PropsLegenda  {
    icone : string,
    titulo : string,
    subtitulo : string,
    numero : number
}


export default function Legenda({icone , titulo , subtitulo , numero} : PropsLegenda) {
  return (
    <div>
      <div className='flex flex-row w-full justify-between  items-center '>
       <div className="flex flex-row">
       { icone == "/src/assets/bolsa.svg" ? 
        <div>
            <img src={icone} alt="" />
        </div> : 
        <div  className="pr-7">
        <img src={icone} alt="" />
        </div>}
        <div className="flex flex-col">
            <span className="font-Poppins text-Titulo font-semibold text-xs">
               {titulo}
            </span>
            <span className="font-Poppins text-primary leading-[1rem] font-semibold text-[0.625rem]">
                {subtitulo}
            </span>
        </div>
      </div> 
        { icone == "/src/assets/bolsa.svg" ? 
        <div>
           <span className="text-[#27AE60] font-Poppins text-[0.875rem] font-medium leading-5 ">
              {numero}
           </span>
        </div> : 
        <div >
       <span className="text-[#FFA412] font-Poppins text-[0.875rem] font-medium leading-5">
            {numero}
       </span>
        </div>}
    </div>
    </div>
  )
}


interface Propslegenda {
    icone : string,
    titulo : string ,
    numero : number
}
export default function LegendaLine({icone , titulo , numero } : Propslegenda) {
  return (
    <>
      <div className='flex flex-row items-start'>
          
        <div className='flex gap-2 flex-col'>
          <span className="text-[#96A5B8] items-center gap-3  flex text-base font-Poppins font-medium">
          <div>
          <img src={icone} alt="" /> 
          </div>
           {titulo}
          </span>
          <span className="text-[#222B45] text-center text-sm font-Poppins font-medium">
                {numero}
          </span>
        </div>
    </div>
    </>
  )
}

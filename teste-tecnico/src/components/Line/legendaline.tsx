
interface Propslegenda {
    icone : string,
    titulo : string ,
    numero : number
}
export default function LegendaLine({icone , titulo , numero } : Propslegenda) {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex gap-2 flex-row'>
          <img src={icone} alt="" />
          <span className="text-[#96A5B8] text-base font-Poppins font-medium">
            {titulo}
          </span>
        </div>
        <div>
            <span className="text-[#222B45] pl-8 text-sm font-Poppins font-medium">
                {numero}
            </span>
        </div>
    </div>
    </>
  )
}

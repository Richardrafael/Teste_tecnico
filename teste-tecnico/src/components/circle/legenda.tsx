
interface Propscircle {
    titulo : string , 
    style : string
}

export default function LegendaCircle({titulo , style} : Propscircle) {
  return (
    <>
    <div className="flex flex-row gap-4">
    <div className={style}>
      </div>
      <span className="text-primary font-Poppins font-medium leading-[1rem] text-[0.625rem]"> 
        {titulo}
      </span> 
    </div>
     
    </>
  )
}

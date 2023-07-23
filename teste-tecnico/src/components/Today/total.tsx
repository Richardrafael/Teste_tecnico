


interface PropsTotal {
    backgroud : string , 
    icone : string
    titulo : string
    subTitulo : string
    information : string
}

export default function Total({backgroud , icone , subTitulo , titulo , information} : PropsTotal) {
  return (
    <>
    <div className={backgroud}>
    <div>
    <img src={icone} alt="" />
    </div>
    <div>
        <span className="text-[1.4rem] font-medium text-quadros">
           {titulo}
        </span>
        <div className="flex flex-col">
        <span className="font-Poppins text-base font-bold text-primary">
            {subTitulo}
        </span>
        <span className="font-Poppins text-xs text-information font-medium">
            {information}
        </span>
    </div>
    </div>
    
    </div>
    </>
  )
}

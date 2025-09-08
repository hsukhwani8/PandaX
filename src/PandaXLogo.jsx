import PandaXLogo from "./assets/PandaXLogo.png"
export default function Logo(){
    return(
        <div className="flex">
            <img src={PandaXLogo} alt="PandaXLogo" className="h-48 w-48 object-contain" />
        </div>
    )
}
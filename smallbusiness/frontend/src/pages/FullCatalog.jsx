import Catalog from "./components/Catalog"
import { Image } from "react-bootstrap"

function FullCatalog(){
    return(
        <>
        <div className="back">

        <Image src="./src/assets/Catalog.svg" className="cattitle"></Image>

        <Catalog></Catalog>
        <Catalog></Catalog>

        </div>
        
        </>
    )
}

export default FullCatalog
import { Button, Carousel, Image} from "react-bootstrap";
import Catalog from './components/Catalog'


function homePage(){
    return(
        <>
        <div className="back">
        <Carousel className="car">
      <Carousel.Item >
      <Image src="./src/assets/goth1.jpg" className="pic"/>
      </Carousel.Item>

      <Carousel.Item >
      <Image src="./src/assets/goth2.jpg" className="pic"/>
      </Carousel.Item>

      <Carousel.Item >
      <Image src="./src/assets/goth3.jpg" className="pic"/>
      </Carousel.Item>
    </Carousel>

    <Catalog></Catalog>

    <Button href="/catalog">Full Catalog</Button>
    </div>
        </>
    );
}

export default homePage;
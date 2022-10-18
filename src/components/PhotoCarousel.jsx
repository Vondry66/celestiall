import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';
function PhotoCarousel() {
    return (
        <Container className='carou-cont' >

            <Carousel className="" >
                <Carousel.Item className='item' interval={1000}>
                    <img

                        src="https://assets2.cbsnewsstatic.com/hub/i/r/2021/08/02/caba2633-9c02-4df7-8375-525bb9186afa/thumbnail/1240x824/e90733390c433132d07e82a2698e4af5/atlantisinspace.jpg"
                        class="img-responsive"
                        alt="Rocket Floating over the Bahamas"
                    />
                    <Carousel.Caption>
                        <h3>Floating over the Bahamas</h3>
                        <p>NASA</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item' interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://assets2.cbsnewsstatic.com/hub/i/r/2021/08/02/22239e13-7216-46fd-a1f2-489e44a1a0fe/thumbnail/1240x1388/c75c4e51ac3f11d533fa13351e45361d/jupitersouthernhemisphere.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Kaleidoscopic gasses</h3>
                        <p>NASA</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item'>
                    <img
                        className="d-block w-100"
                        src="https://assets2.cbsnewsstatic.com/hub/i/r/2021/08/02/ad96efb4-2405-4b26-a093-41993790fc6c/thumbnail/1240x1234/60bb50f14f40a4160cbf042ba732ded0/eaglenebula.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Pillars of Creation</h3>
                        <p>NASA </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
}

export default PhotoCarousel;
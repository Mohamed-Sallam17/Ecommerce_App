import logoOne from '../assets/brands-logos/adidas.png'
import logoTwo from '../assets/brands-logos/townteam.png'
import logoThree from '../assets/brands-logos/lcwaikiki.png'
import logoFour from '../assets/brands-logos/nike.png'

function Brands(){
    return(
        <>
        <h2 className='text-center my-5'> Brands </h2>        
        <div className="brands d-flex align-items-center justify-content-center">
            <img src={logoOne} width={"100px"} alt='Adidas'></img>
            <img src={logoTwo} width={"100px"} alt='Town-Team'></img>
            <img src={logoThree} width={"100px"} alt='LC-Waikiki'></img>
            <img src={logoFour} width={"100px"} alt='Nike'></img>
        </div>
        </>
    )
}

export default Brands;
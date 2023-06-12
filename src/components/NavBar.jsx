import logo from "../assets/Logo TyF (1).png"
import carro from "../assets/Carro.png"

export const NavBar = () =>{
    return(
        <div className="barra">
            <div className="logo">
                 <img src={logo}  alt="Logo" />
            </div>
            <div className="lista">
                <ul>
                    <li><a href="*">Fleca A</a></li>
                    <li><a href="*">Fleca B</a></li>
                    <li><a href="*">Madera</a></li>
                </ul>

            </div>
            
            <div className="carro">
                <img src={carro} alt="" />
                <p>3</p>
            </div>
        </div>
    );
}
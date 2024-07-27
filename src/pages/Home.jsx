import Home from "../components/organisms/ForminAlumn"
import Style from  "./Home.module.css"
import ShowInformation from "../components/organisms/ShowInformation"
function Pages() {

    return(
        <div id={Style.register_home}>
            <section id={Style.register}>
             <Home></Home>
            </section>
            <section id={Style.show}>
             <ShowInformation></ShowInformation>
            </section>  
        </div>
    )
}

export default Pages; 
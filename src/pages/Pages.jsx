import Home from "../components/organisms/Questionarie"
import Style from  "./Pages.module.css"
import ShowInformation from "../components/organisms/ShowInformation"
function Pages() {

    return(
        <div id={Style.login_home}>
            <Home></Home>
            <ShowInformation></ShowInformation>
        </div>
    )
}

export default Pages; 
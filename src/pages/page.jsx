import Home from "../components/organisms/Questionarie"
import Style from  "./page.module.css"
import ShowInformation from "../components/organisms/ShowInformation"
function Page() {

    return(
        <div id={Style.login_home}>
            <Home></Home>
            <ShowInformation></ShowInformation>
        </div>
    )
}

export default Page; 
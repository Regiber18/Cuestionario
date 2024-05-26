import Field from "../molecules/Field"
import Button from "../atoms/Button"
import New_button from "../atoms/New_button";
import Style from "./Questionarie.module.css"
import Footer from "../atoms/footer/Footer"

function Questionarie() {
   
   
    return(
        <div id={Style.login_section}>
            
            <div id={Style.cal_field}>
                <Field type="text" placeholder="name" text="Set your name"/>
                <Field type="text" placeholder="Password" text="set your grade"/> 
                <Field type="number" placeholder="Matricule "text="set your matricule" /> 
            </div>
            <div id={Style.cal_button}>
                <Button text="add"/>
                <New_button/>
            </div> 
            <div id={Style.cal_footer}>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Questionarie; 

import React,{Component} from "react";
import {UseConsumerThree} from './MainComponent'
class ComponentThree extends Component {
    render(){
        return(
        <>
        <h1>Hello This is Component Three </h1>
        <UseConsumerThree>
            {(ele)=>{
                return (
                    <h2>Component Three :{ele}</h2>
                )
            }}
        </UseConsumerThree>
        </>
        );
    }
}
export default ComponentThree ;
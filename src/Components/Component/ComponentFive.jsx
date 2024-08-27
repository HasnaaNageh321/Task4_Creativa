import React,{Component} from "react";
import {UseConsumerFive} from './MainComponent'
class ComponentFive extends Component {
    render(){
        return(
        <>
        <h1>Hello This is Component Five </h1>
        <UseConsumerFive>
            {(ele)=>{
                return (
                    <h2>Component Five :{ele}</h2>
                )
            }}
        </UseConsumerFive>
        </>
        );
    }
}
export default ComponentFive ;
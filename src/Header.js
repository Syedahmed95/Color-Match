import React,{Component} from "react";
import {Container} from "react-bootstrap";


export default class head extends Component{


    componentDidMount(){
        this.tag();
    }
    tag=()=>{
        let display=document.getElementById("Tryagain");
        //console.log(display);
        this.props.parent(display);
    }
   
    render(){
      //this.tag()
        return(
            <div>
                <Container fluid style={{ background: this.props.dis()}}>
                <h1 style={{textAlign: "center"}}> Color Matching
                <br></br>
                <span> {this.props.dis()}</span>
                <br></br>
                Game!
                
                
                </h1>
                <h2 style={{textAlign: "center"}} id="Tryagain"></h2>
                </Container>
                
            </div>
        )
    }
}



// const head = (props)=>{
//     var dis=props;
    
//     return(
//         <div>
//             <Container fluid>
//                <h1>{this.props}</h1>
           
//             </Container>
//         </div>
//     )
// }
//export default head;
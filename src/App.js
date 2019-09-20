import React, {Component} from "react";
import Head from "./Header";
import { Container, Button, Row, Col } from "react-bootstrap";
class color extends Component{

    constructor(props){
        super(props)
        this.state={
            RGB:"",
            rand:"",
            id:"",
                       
        }
        
        this.change1=this.change1.bind(this);
        
    }
    componentDidMount(){
        this.generateRandomColors(6);
        this.Mouse();
        this.pickColor();
        
    }
    componentDidUpdate(){
        this.First();
        this.display();
        
    }

    First(){
        var square=document.querySelectorAll(".square")
        for(var i=0; i<square.length; i++){
            square[i].style.background=this.state.RGB[i];
            
        }
    }

    Mouse(){
        
       let that=this;
        var square=document.querySelectorAll(".square");
        
        for(var i=0; i<square.length; i++){
                    
            square[i].addEventListener("click", function(){
                                 
                var color=this.style.background;
                
                var save=that.state.id;
                if(color===that.state.RGB[that.state.rand]){
                   for(var j=0; j<square.length; j++){
                       square[j].style.background=that.state.RGB[that.state.rand]
                   }
                    save.textContent="Yayy! You Won"
                }
                    else{
                        this.style.background="white";
                        save.textContent="Tryagain!";
                        
                    }
            })
        }
    }
    parentcall=(child)=>{
        
        this.setState({id: child},function(){
            console.log(this.state.id);
        })
       
    }
    
    randomColor(){
        //pick a "red" from 0 - 255
        var r = Math.floor(Math.random() * 256);
        //pick a "green" from  0 -255
        var g = Math.floor(Math.random() * 256);
        //pick a "blue" from  0 -255
        var b = Math.floor(Math.random() * 256);
       
        return "rgb(" + r + ", " + g + ", " + b + ")";
        }

    generateRandomColors(num){
        //make an array
        var arr = []
        //repeat num times
        for(var i = 0; i < num; i++){
            //get random color and push into arr
            arr.push(this.randomColor())
            this.setState({RGB: arr}, ()=>{
                //console.log(this.state.RGB);
            })
        }
        //return that array
        return arr;
    }
    pickColor(){
        var random = Math.floor(Math.random() * this.state.RGB.length);
        console.log(random);
        this.setState({rand: random});
        
    }
    display=()=>{
        var dis=this.state.rand;
        var color=this.state.RGB[dis];
        console.log(color);
        return color;
    }
    
    change1(event){
        this.generateRandomColors(6);
        this.pickColor();
        let save=this.state.id;
        save.textContent="";        
    }
    render(){
        
        
        return(
            <div>
            <Head dis={this.display} parent={this.parentcall} />

            <Container>
               
                <Row>
                    <Col>
                    <div className="square"></div>
                    </Col>
                    <Col>
                    <div className="square"></div>
                    </Col>
                    <Col>
                    <div className="square"></div>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <div className="square"></div>
                    </Col>
                    <Col>
                    <div className="square"></div>
                    </Col>
                    <Col>
                    <div className="square"></div>
                    </Col>
                    </Row>
                    <div className="text-center">
                    
                    <Button className="but" varient="danger" size="lg" onClick={this.change1}>Play Again!</Button>

                    </div>
            </Container>
            </div>
        )
    }
}
export default color;
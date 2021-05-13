import React from 'react'
import './index.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

class Dropdown extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            elements: this.props.list,
            label: this.props.label,
            headerTitle: "",
            dropValue: "",
            toggle: false,
        }
        
        this.toggleHandler = this.toggleHandler.bind(this)
        this.selectElement = this.selectElement.bind(this)
    }

    resetDropdown(){
        if(this.props.resetFlag){
            this.setState({headerTitle: ""})
            this.setState({toggle: false})
            this.props.handler("")
        }
    }


    toggleHandler(event){
        event.preventDefault();
        if(this.state.toggle == false){
            this.setState({toggle: true})
        }else{
            this.setState({toggle: false})
        }
    }

    selectElement(e){
        this.setState({headerTitle: e.currentTarget.dataset.id})
        this.setState({toggle: false})
        this.props.handler(e.currentTarget.dataset.id)
        e.preventDefault();
        
        
        // ======== TO DO ============================
        // PASS THE VALUE TO THE PARENT NODE DEAL WITH
        //============================================
    }

    render(){
        {this.resetDropdown()}
        return(
            <div>
                <label className="label-form" for={this.state.label} >{this.state.label}</label>
                <span type="button" onClick={this.toggleHandler} className="input-form dropdown-btn">
                    {this.state.headerTitle}
                    <div className="dropIcon">
                        {this.state.toggle == true? <ExpandLessIcon/> :<ExpandMoreIcon/>}
                    </div>
                </span>
                <div id="myDropdown" className={`dropdown-content ${this.state.toggle == true ? "show" : ""}`}>
                    <span className="default-drop" onClick={this.selectElement}  data-id="">- Selecionar -</span>
                    {this.state.elements.map(value=>{
                        return <span className="dropElement"onClick={this.selectElement} data-id={value}>{value}</span>
                    })}
                </div>
            </div>
        );
    }


}

export default Dropdown;
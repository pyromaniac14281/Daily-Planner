import React, { Component } from 'react';
import submitIcon from './assets/submit.png';
import './index.css';

// The AddTodoScreen
class AddTodoScreen extends Component {
    state = {
        todo: {
            id: "",
            todo: "",
            memo: "",
            dueTime: "1",
            dueMeridiem: "AM"
        },
        currentId: "4",
        inputValid: false
    }

    // Controlls inputs and selects values

    handleTodoInputChange = (e) => {
        let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + e.target.value;
        // Creates a new object to prevent mutation of the state.
        let newTodoValue = Object.assign({}, this.state.todo, {
            id: id,
            todo: e.target.value
        });
        this.setState({
            todo: newTodoValue
        })   
    }

    handleMemoInputChange = (e) => {
        let newMemoValue = Object.assign({}, this.state.todo, {
            memo: e.target.value
        });
        this.setState({
            todo: newMemoValue
        })   
    }

    handleSelectTimeChange = (e) => {
        let newDueTimeValue = Object.assign({}, this.state.todo, {
            dueTime: e.target.value
        });
        this.setState({
            todo: newDueTimeValue
        })  
    }

    handleSelectMeridiemChange = (e) => {
        let newDueMeridiemValue = Object.assign({}, this.state.todo, {
            dueMeridiem: e.target.value
        });
        this.setState({
            todo: newDueMeridiemValue
        })  
    }

    handleSubmit = () => {
        if(this.state.todo.todo) {
            this.props.onSubmit(this.state.todo);
            let emptyInputs = Object.assign({}, this.state.todo, {
                id: "",
                todo: "",
                memo: "",
                dueTime: "1",
                dueMeridiem: "AM"
            })
            this.setState({
                inputValid: true,
                todo: emptyInputs
            })
            
        } else {
            this.setState({inputValid: false});
        }
    }


    render() {
        // If the todo input is empty, give the input a red border
        const inputEntered = {
            border: "1px solid rgba(0,0,0,0.2)"
        }

        if(this.state.inputValid === false) {
            inputEntered.border = "1px solid red";
        }

        // If the show prop is true, show the AddTodoScreen
        const showAddTodoScreen = {
            // display: "block",
            animationName: "slideUp",
            animationDuration: "0.6s",
        };
        if(this.props.show === false){
            // showAddTodoScreen.display = "none";
            showAddTodoScreen.animationName = "slideDown"
            showAddTodoScreen.animationDuration = "1s"
        }
        
        // Array of the hours instead of typing each hour directly in the select
        let hours = [];

        for(let i=1; i<=12; i++) {
            hours.push(i);
        }
        return (
            <div className="AddTodoScreen" style={showAddTodoScreen}>
                <div className="AddTodoScreen-container">
                    <div className="AddTodoScreen-input">
                        <input 
                        onChange={this.handleTodoInputChange} 
                        value={this.state.todo.todo} 
                        className="AddTodoScreen-input__field" 
                        placeholder="What do you need to do today?" 
                        type="text"
                        style={inputEntered}
                         />
                    </div>
                    <div className="AddTodoScreen-input">
                        <input
                        onChange={this.handleMemoInputChange} 
                        value={this.state.todo.memo}  
                        className="AddTodoScreen-input__field" 
                        placeholder="Optional memo" 
                        type="text" />
                    </div>
                    <div className="AddTodoScreen-input--inline">
                        <div className="AddTodoScreen-input">
                            <select
                            onChange={this.handleSelectTimeChange} 
                            value={this.state.todo.dueTime} 
                            className="AddTodoScreen-input__select" >
                                {
                                    hours.map(hour => (
                                        <option key={hour} value={hour}>{hour}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="AddTodoScreen-input">
                            <select
                            onChange={this.handleSelectMeridiemChange} 
                            value={this.state.todo.dueMeridiem} 
                            className="AddTodoScreen-input__select" >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                    <div onClick={this.handleSubmit} className="AddTodoScreen-submitButton">
                        <button className="AddTodoScreen-submitButton__button">
                            <img className="AddTodoScreen-submitButton__icon" src={submitIcon} alt="Submit" />
                        </button>
                    </div>
                </div>
                <div className="AddTodoScreen-closeButton">
                    <button onClick={this.props.hide} className="AddTodoScreen-closeButton__button">Close</button>
                </div>
            </div>
         )
    }
}
 
export default AddTodoScreen;
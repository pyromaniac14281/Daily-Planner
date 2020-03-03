import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import Header from '../../components/Header';
import TodoItemList from '../../components/TodoItemList';
import AddTodoButton from '../../components/AddTodoButton';
import AddTodoScreen from '../../components/AddTodoScreen';

class Main extends Component {
    state = {
        showAddTodoScreen: false
    }

    // Dispatch ADD_TODO action to add the todo to the list
    addTodo = (todo) => {
        this.props.addTodo(todo);
        // Closes the AddTodoScreen
        this.setState({showAddTodoScreen: false});      
    }

    deleteTodo = (todoId) => {
        this.props.deleteTodo(todoId);
    }

    // Open the AddTodoScreen when the AddTodoButton is clicked
    openAddTodo = () => {
        this.setState({
            showAddTodoScreen: !this.state.showAddTodoScreen
        })
    }

    
    render() { 
        return ( 
            <div className="Main">
                <Header />
                <TodoItemList 
                todos={this.props.todos}
                onDeleteTodo={this.deleteTodo} 
                />
                <AddTodoButton 
                handleOpenAddTodo={this.openAddTodo} 
                />
                <AddTodoScreen 
                show={this.state.showAddTodoScreen} 
                hide={this.openAddTodo}
                onSubmit={this.addTodo} 
                />
            </div>
         )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTodo(todo) {
            dispatch({type:'ADD_TODO', payload: todo})
        },
        deleteTodo(todoId) {
            dispatch({type:'DELETE_TODO', payload: todoId})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
const initialState = [
    {
        id: "1",
        dueTime: "8",
        dueMeridiem: "AM",
        todo: "Finish Home Screen",
        memo: "Web App"
    },
    {
        id: "2",
        dueTime: "11",
        dueMeridiem: "AM",
        todo: "Lunch Break",
        memo: ""
    },
    {
        id: "3",
        dueTime: "2",
        dueMeridiem: "PM",
        todo: "Design Stand Up",
        memo: "Hangouts"
    },
];

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload)
        
        default:
            return state
    }
}

export default todosReducer;
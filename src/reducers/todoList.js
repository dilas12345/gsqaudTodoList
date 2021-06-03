const todoList = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          title: action.title,
          createdAt: new Date(),
          completedAt: null,
          completed: false
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
  
        return Object.assign({}, state, {
          completed: !state.completed,
          completedAt: !state.completed ? new Date() : null
        });
      default:
        return state;
    }
  };
  
  const defaultTodos = [
    {id: 1, title: 'Create React Native App', createdAt: new Date(), completed: false},
    {id: 2, title: 'Install Dependencies', createdAt: new Date(), completed: false},
    {id: 3, title: 'Set Code Structure', createdAt: new Date(), completed: false},
    {id: 4, title: 'Create Entry point', createdAt: new Date(), completed: false},
    {id: 5, title: 'Implementing Redux', createdAt: new Date(), completed: false},
  ];
  
  const todoLists = (state = defaultTodos, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          todoList(undefined, action)
        ];
      case 'TOGGLE_TODO':
        return state.map(t =>
          todoList(t, action)
        );
      default:
        return state;
    }
  };
  
  export default todoLists;
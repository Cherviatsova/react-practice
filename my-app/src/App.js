// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ Недели">
//         <PaintingList items={paintings} />
//       </Section>

//       <Section title="Лучшее"></Section>
//     </div>
//   );
// }

import React, { Component } from 'react';
// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
import TodoList from './components/TodoList/TodoList';
import initialTodos from './components/TodoList/todos.json';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/Filter';
import { ProductReviewForm } from './components/ProductReviewForm';

// import Form from './components/Form';
// const colorPickerOptions = [
// //   { label: 'red', color: '#F44336' },
// //   { label: 'green', color: '#4CAF50' },
// //   { label: 'blue', color: '#2196F3' },
// //   { label: 'grey', color: '#607D8B' },
// //   { label: 'pink', color: '#E91E63' },
// //   { label: 'indigo', color: '#3F51B5' },
// // ];

class App extends Component {
  state = {
    todos: initialTodos,
    // inputValue: '',
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: 'id - 1',
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
    // this.setState(({ todos }) => ({
    //   todos: [todo, ...todos]
    // }))
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли тот туду кот нужно!');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    }));
  };
  // handleNameChange = event => {
  //   // console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  // };
  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    // console.log(completedTodos);
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <ProductReviewForm />
        {/* <p>Total:{todos.length}</p>
        <p>Done:{completedTodos}</p>
        <TodoEditor onSubmit={this.addTodo} /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        {/* <h1>Состояние компонентов</h1> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker
          options={[
            { label: 'red', color: '#F44336' },
            { label: 'green', color: '#4CAF50' },
            { label: 'blue', color: '#2196F3' },
            { label: 'grey', color: '#607D8B' },
            { label: 'pink', color: '#E91E63' },
            { label: 'indigo', color: '#3F51B5' },
          ]}
        /> */}

        {/* <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
      </>
    );
  }
}

export default App;

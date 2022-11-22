import {
  Component, Host, h, State, EventEmitter, Event,
} from '@stencil/core';

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

@Component({
  tag: 'my-todo-list',
  // shadow: true,
})
export class MyTodoList {
  @State() todos: Todo[] = [
    { id: 1, text: 'Learn Stencil', isComplete: true },
    { id: 2, text: 'Build something awesome', isComplete: false },
  ];

  @Event() todoCompleted: EventEmitter<Todo>;

  todoCompletedHandler(todo: Todo) {
    this.todoCompleted.emit(todo);
  }

  render() {
    return (
      <Host>
        <ul>
          {this.todos.map((todo) => (
            <li>
              <input
                onChange={() => this.todoCompletedHandler(todo)}
                type="checkbox"
                checked={todo.isComplete}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}

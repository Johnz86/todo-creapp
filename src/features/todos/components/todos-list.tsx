import { RootState } from 'typesafe-actions';
import * as React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';
import TodoListItem from './todos-list-item';
import { ListItem } from '@material-ui/core';

const mapStateToProps = (state: ReturnType<RootState>) => ({
    isLoading: state.todos.isLoadingTodos,
    todos: selectors.getTodos(state.todos),
});
const dispatchProps = {
    removeTodo: actions.removeTodo,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

function TodoList({ isLoading, todos = [], removeTodo }: Props) {
    if (isLoading) {
        return <ListItem>Loading...</ListItem>;
    }

    return (
        <div>
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    title={todo.title}
                    onRemoveClick={() => removeTodo(todo.id)}
                />
            ))}
        </div>
    );
}

export default connect(
    mapStateToProps,
    dispatchProps
)(TodoList);

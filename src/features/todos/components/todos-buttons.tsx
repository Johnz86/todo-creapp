import { RootState } from 'typesafe-actions';
import * as React from 'react';
import { connect } from 'react-redux';

import { loadTodosAsync, saveTodosAsync } from '../actions';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import LoadIcon from '@material-ui/icons/RestorePage';

const mapStateToProps = (state: ReturnType<RootState>) => ({
  isLoading: state.todos.isLoadingTodos,
});
const dispatchProps = {
  loadTodos: loadTodosAsync.request,
  saveTodos: saveTodosAsync.request,
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

type State = {};

class TodosButtons extends React.Component<Props, State> {
  render() {
    const { isLoading, loadTodos, saveTodos } = this.props;
    return (
      <section>
        <Button startIcon={<LoadIcon />} onClick={() => loadTodos()} disabled={isLoading}>
          Load snapshot
        </Button>
        <Button startIcon={<SaveIcon />} onClick={() => saveTodos()} disabled={isLoading}>
          Save snapshot
        </Button>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchProps
)(TodosButtons);

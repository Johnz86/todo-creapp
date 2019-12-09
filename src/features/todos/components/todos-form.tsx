import * as React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/PlaylistAdd';

const dispatchProps = {
    addItem: addTodo,
};

type Props = {
    addItem: (title: string) => void;
};

type State = {
    title: string;
};

class TodosForm extends React.Component<Props, State> {
    readonly state = { title: '' };

    handleTitleChange: React.ReactEventHandler<HTMLTextAreaElement | HTMLInputElement> = ev => {
        this.setState({ title: ev.currentTarget.value });
    };

    handleAdd = (event?: React.SyntheticEvent<HTMLElement | HTMLFormElement>) => {
        if (event) { event.preventDefault(); }
        if (this.state.title) {
            this.props.addItem(this.state.title);
        }
        this.setState({ title: '' });
    };

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.handleAdd}>
                <TextField
                    id="todo-form"
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    type="text"
                    label="Your ToDo Task"
                    value={title}
                    onChange={this.handleTitleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={this.handleAdd}>
                                    <AddIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        );
    }
}

export default connect(
    null,
    dispatchProps
)(TodosForm);

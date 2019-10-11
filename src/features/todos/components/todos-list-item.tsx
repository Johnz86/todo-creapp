import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import Clear from '@material-ui/icons/Clear';

interface Props {
    title: string;
    onRemoveClick: () => void;
}

function TodoListItem({ title, onRemoveClick }: Props) {
    return (
        <ListItem dense divider>
            <ListItemText>{title}</ListItemText>
            <ListItemSecondaryAction onClick={onRemoveClick}>
                <IconButton edge="end" aria-label="delete">
                    <Clear />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default TodoListItem;

import * as React from 'react';

import Grid from '@material-ui/core/Grid/Grid';
import TodosButtons from "./todos-buttons";
import TodosList from "./todos-list";
import TodosForm from "./todos-form";
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions } from '@material-ui/core';

export default () => (
    <Grid container spacing={8}>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <TodosForm />
                    <List>
                        <TodosList />
                    </List>
                </CardContent>
                <CardActions>
                    <TodosButtons />
                </CardActions>
            </Card>
        </Grid>
    </Grid>
);

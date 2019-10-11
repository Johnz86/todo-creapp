import * as todosActions from '../features/todos/actions';
import { go, goBack, goForward, push, replace } from 'connected-react-router';

const routerActions = {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward,
};

export default {
  router: routerActions,
  todos: todosActions,
};

// app imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// store imports
import {
  createStore,
  applyMiddleware
} from 'redux';
import { combineForms } from 'react-redux-form';

// form imports
import { Control, Form, actions } from 'react-redux-form';



// store
const initialUserState = {
  firstName: '',
  lastName: ''
};

const store = createStore(combineForms({
  user: initialUserState,
}));

// just debug
window._s = store;


// form
class UserForm extends React.Component {
  handleSubmit(user) {
		console.log('handleSubmit')
  }

  render() {
    return (
      <Form
        model="user"
        onSubmit={(user) => this.handleSubmit(user)}
      >
        <label htmlFor="user.firstName">First name:</label>
        <Control.text model="user.firstName" id="user.firstName" />

        <label htmlFor="user.lastName">Last name:</label>
        <Control.text model="user.lastName" id="user.lastName" />

        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

// app
class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <UserForm />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));


// class HelloWorlder {

// 	constructor() {
// 		console.log('HelloWorlder construcor')
// 		this.state = {a: 1}
// 	}

// 	method() {
// 		console.log(this.state)
// 	}
// }

// let h = new HelloWorlder()
// h.method()

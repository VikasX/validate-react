import React from 'react';
import { render } from 'react-dom';
import { Form } from './components/Form';
import Message from './components/Message';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false
    };
  }

  handleFormValidityChange(isFormValid) {
    this.setState({isFormValid});
  }

  render() {
    let formValid = this.state.isFormValid;
    return (
      <div>
        <Form onFormValidChange={this.handleFormValidityChange.bind(this)} />
        <Message formValid={formValid} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

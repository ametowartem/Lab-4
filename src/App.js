import React, {Component} from 'react';
import Header from "./header";
import BookList from "./BookList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BookList />
      </div>
    );
  }
}

export default App;
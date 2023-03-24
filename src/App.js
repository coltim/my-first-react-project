import React from 'react';
import TerminatorList from './components/terminator-list/terminator-list.component';
import { models } from './models';
import SearchBox from './components/searchbox/searchbox.coponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      models: models,
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredModels = this.state.models.filter((model) => {
      return model.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Terminator modellek</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <TerminatorList models={filteredModels} />
      </div>
    );
  }
}
export default App;

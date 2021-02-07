import React, { Component } from "react";
import store from './redux/store';
import {
  getActionChangeInputValue,
  getActionAddTodoItem,
  getActionDeleteTodoItem,
  getActionInitListAsync
} from './redux/actionCreators';
import AppUi from './AppUi';

class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.handleStoreChange);
  }
  state = store.getState();
  componentDidMount() {
    // 获取初始列表数据
    store.dispatch(getActionInitListAsync());
  }

  handleInputChange = (e) => {
    const action = getActionChangeInputValue(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
  handleBtnClick = () => {
    const action = getActionAddTodoItem();
    store.dispatch(action);
  }
  handleItemDelete = (index) => {
    const action = getActionDeleteTodoItem(index);
    store.dispatch(action);
  }

  render() {
    return (
      <AppUi
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        list={this.state.list}
      />
    )
  }
}

export default App;

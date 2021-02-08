import React from 'react';
import { connect } from 'react-redux';


const App = (props) => {
  const { inputValue, changeInputValue, handleClick, handleDeleteItem } = props;
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          props.list.map((item, index) => (
            <li
              key={`${item}-${index}`}
              onClick={() => {
                handleDeleteItem(index)
              }}
            >{item}</li>
          ))
        }
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


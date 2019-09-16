class Store {
  state = {
    dashBoard: [{ id: 1, value: 1 }, { id: 2, value: 5 }, { id: 2, value: 9 }]
  };

  getState() {
    return { ...this.state };
  }
  setState(value) {
    this.state = value;
  }
  getDashBoard() {
    return { ...this.state.dashBoard };
  }
  setDashBoard(value) {
    this.state.dashBoard = value;
  }
  updateDashBoard({ id, value }) {
    this.state.dashBoard = this.state.dashBoard.map(item => {
      if (item.id == id) return { ...item, value: value };
      return item;
    });
  }
 
}
const store = new Store();

export default store;

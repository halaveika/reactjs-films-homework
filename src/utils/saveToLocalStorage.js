const saveToLocalStorage = (state) =>{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }

  export default saveToLocalStorage

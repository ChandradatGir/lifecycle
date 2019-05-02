import React, {Component} from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
      return res.json();
    })
    .then(data => {
      console.log(data);
      this.setState({
        items: data,
        isLoaded: true,
      })
    })

  }

  render(){
  var {items, isLoaded} = this.state;
  return (
    <div className="App">
      <div className="Names">
        <ul>
        {items.map(el => {
          return(
            <li key={el.id}>
            Name: {el.name} | UserName: {el.username} | {''}
            <a href={'https://${el.website}'}>website</a>
            </li>
          );
        })}
        </ul>
      </div>

    </div>
  )
};
}

export default App;

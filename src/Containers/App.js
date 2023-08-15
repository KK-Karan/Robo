import React,{Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll.js';



class App extends Component {
    constructor(){
           super()
           this.state = {  // this are the things that describes our app and can change.
            robots: [],// lives in the parent component
            searchChange: "",
           }                  //    here we can declare the state
    }
   
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    } 



    onSearchChange = (event) =>{
        this.setState({searchChange:event.target.value}); // gives the value of the search field

    }
    render() {
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchChange.toLowerCase());
          
            })
            if(this.state.robots.length ===0){
               return <h1 className='tc'>Loading</h1>
            }
                else {

                    return (
                        <div className = 'tc'>
                        <h1>Robofriends</h1>
                        <Searchbox searchChange = {this.onSearchChange}/>
                        <Scroll>
                        <Cardlist robots = {filterRobots}/>
                        </Scroll>
                        </div>
                          );

                }
            
   
    }
}
export default App;
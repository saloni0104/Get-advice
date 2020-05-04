import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {

    state = {advice: ''};

    componentDidMount() {
       this.fetchAdvice();

    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const {advice } = response.data.slip;
                console.log(advice);
                //instead of
                //console.log(response.data.slip.advice);         //fetching just the quote from whole lot of data
                
                this.setState({ advice});       //setting the value advice from line 18 to state advice from line 8
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {advice} = this.state;

        return(
            <h1>{advice}</h1>
            //instead of
            //<h1>{this.state.advice}</h1>
        );
    }
}

export default App;



//Using advice slip jason api
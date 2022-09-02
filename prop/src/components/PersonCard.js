import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        const {age} = this.props;
        this.state = {
            count: age,
            counter: [],
        }
    }
    addOne = () => {
        const {count, counter} = this.state;
        this.setState({
            count: count + 1,
            counter: [... counter, new Date()],
        });
    };

    render(){
        const {props, addOne, state} = this;
        const {age} = props;
        const {count, counters} = state;
        return (
            <div>
                <h1>
                    {this.props.lastName}, 
                    {this.props.firstName}
                </h1>
                <p>Age: {count}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={addOne}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
export default PersonCard; 
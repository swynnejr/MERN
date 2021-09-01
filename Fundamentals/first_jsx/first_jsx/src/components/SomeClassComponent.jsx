import React, { Component } from 'react';

    
// class SomeClassComponent extends Component {
//     render() {
//         return <div>This is our first class component.</div>;
//     }
// }
    
// export default SomeClassComponent;

// class Header extends React.Component {
//         render() {
//             const { firstName, lastName } = this.props;
//             return (
//                 <div>
//                   // Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar.
//                     <h1>My name is { firstName}  { lastName }</h1>
//                 </div>
//             );
//         }
//     }

// export default Header;

class PeopleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAge: this.props.person.age
        };
    }

    render() {
        const clickLastName = ()=>{
            console.log(`You clicked on ${this.props.person.firstName} ${this.props.person.lastName}`);
            alert(`You clicked on someone that is ${this.state.currentAge} years old.`);
        }
        const clickBirthdayButton = ()=>{
            this.setState({currentAge: this.state.currentAge+1})
        }
        return (
            <div>
                <h1>
                    {this.props.person.lastName}, {this.props.person.firstName}
                </h1>
                <p>Age: {this.state.currentAge}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
                <p><button onClick = {()=> clickLastName()}>Click {this.props.person.lastName}!</button></p>
                <p><button onClick = {()=> clickBirthdayButton()}>Birthday Button for {this.props.person.firstName} {this.props.person.lastName}</button></p>
            </div>
        );
    }

}
export default PeopleComponent;

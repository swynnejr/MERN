import React, { Component } from 'react';

    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;

class Header extends React.Component {
        render() {
            const { firstName, lastName } = this.props;
            return (
                <div>
                  // Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar.
                    <h1>My name is { firstName}  { lastName }</h1>
                </div>
            );
        }
    }

export default Header;

class PeopleComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.person.lastName},{this.props.person.firstName}
                </h1>
                <p>age: {this.props.person.age}</p>
                <p>hair color: {this.props.person.hairColor}</p>
            </div>
        );
    }
}
export default PeopleComponent;

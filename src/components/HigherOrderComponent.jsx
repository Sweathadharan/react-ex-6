
import React from 'react';
import  { Component } from 'react';
import './HigherOrderComponent.css';

class HigherOrderFunctions extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <h2>Display all items</h2>
                <div className="container">
                    <div className="user-data">
                        {this.state.userData.map(user => (
                            <React.Fragment key={user.id}>
                                <ul>   
                                <li className="single-line"><span>id : </span>{user.id}</li>
                                <li className="single-line"><span>Name : </span>{user.name}</li>
                                <li className="single-line"><span>User Type : </span>{user.user_type}</li>
                               
                        
                    </ul>

                            </React.Fragment>
                        ))}
                        </div>
                </div>
                    <h2>Display based on user type</h2>
                <div className="fiterByUSerType">
                    {this.state.userData
                        .filter(user => user.user_type === 'Designer') 
                        .map(user => (
                            <ul key={user.id}>
                                <li><span>id: </span>{user.id}</li>
                                <li><span>Name: </span>{user.name}</li>
                                <li><span>User Type: </span>{user.user_type}</li>
                                
                            </ul>
                        ))}

                </div>
                    <h3>Filter all data starting with J</h3>
                <div className="filterWithj">
                {this.state.userData
                        .filter(user => user.name.startsWith('J')) 
                        .map(user => (
                            <ul key={user.id}>
                                <li><span>id: </span>{user.id}</li>
                                <li><span>Name: </span>{user.name}</li>
                                <li><span>User Type: </span>{user.user_type}</li>
                                
                            </ul>
                        ))}

                </div>
                    <h3>Filter all data based on age greater than 28 and age less than or equal to 50</h3>
                <div className="basedOnAge">
                {this.state.userData
                    .filter(user => user.age > 28 && user.age <= 50) 
                    .map(user => (
                        <ul key={user.id}>
                            <li><span>id: </span>{user.id}</li>
                            <li><span>Name: </span>{user.name}</li>
                            <li><span>User Type: </span>{user.user_type}</li>
                        </ul>
                    ))}
            </div>

                <h3>Find the total years of the designers</h3>
                <div className="reduce">
                    {this.state.userData
                    .filter(user => user.user_type === 'Designer')
                    .reduce((totalYears, user) => totalYears + user.years, 0)}
                </div>

                </React.Fragment>
        );
    }
}

export default HigherOrderFunctions;

import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import image from '../images/Side-banner.png';

export default class Tasks extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <main>
                        <NavBar />
                        <div className="mainContent">
                            <h2>Tasks</h2>
                            <p>Below are some of the core functions that I would like to include to reach MVP</p>
                            <ul>
                                <li>Users are able search for words with data being supplied from the owlbot api</li>
                                <li>Users can create an account or log in to an existing account utilizing firebase authentication</li>
                                <li>Users can save word definitions to their personal collection (Data is persistant preferably using firebase firestore, local storage is also an option)</li>
                                <li>Users can view words saved to their collection</li>
                                <li>Users can remove words from their word collections</li>
                                <li>Website utilizes react-router-dom to show multiple pages</li>
                            </ul>
                            <p>Here are some stretch goals which I will focus on reaching once MVP goals are met and the core application is polished and working</p>
                            <ul>
                                <li>Users can view their word collections as a stack of flashcards. They can move forwards and backwards through the stack, then click on an individual card to reveal the definition on the back. I prepared a codepen example of this <a href="https://codepen.io/wandrew8/pen/jObqLzv?editors=0100" target="_blank">here</a></li>
                                <li>Create vacabulary tests capability in which words from a users collection are randomly selected and used to dynamically generate a test</li>
                                <li>Users can edit vocabulary words to create their own example sentences</li>
                            </ul>
                            <p>I'm sure many more ideas will come as I begin working on the application</p>
                        </div>
                    </main>
                    <div className="sidebanner">
                        <div className="overlay"></div>
                        <img src={image} alt="" />
                    </div>   
                </div>
            </div>
        )
    }
}

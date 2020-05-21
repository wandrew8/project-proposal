import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import image from '../images/Side-banner.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <main>
                        <NavBar />
                        <div className="mainContent">
                            <h2>Proposal - "Elevator Pitch"</h2>
                            <p>For the final project, I would like to create a dictionary word search and word memorization application - This application allows users to search words from the owlbot dictionary api, then add select words to their collection to review later. Words in the users collection can be reviewed as flashcards or as dynamically generated tests. This a handy application for individuals to both look up the meanings of words and then review those words later to improve their vocabulary.</p>
                            <p>The main inspiration for this application comes from existing websites like dictionary.com and quizlet.com. Quizlet.com is application that allows you to create your own flashcards and quizzes. I'm hoping to make a simplified version of this by using pre-existing data from the owlbot api and focusing specifically on words rather than other types of media which is allowd on quizlet.com</p>
                            <p>While brainstorming I was focused on finding a project that would allow me to integrate all of the topics we have discussed including react-router, fetch api, firebase authentication, and firebase firestore.</p>
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

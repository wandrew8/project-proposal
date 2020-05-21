import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import image from '../images/Side-banner.png';

export default class Dependencies extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <main>
                        <NavBar />
                        <div className="mainContent">
                            <h2>Dependencies</h2>
                            <ul>
                                <li>React! Of course this application will be built using the React front-end library</li>
                                <li>Styled Components for CSS styling - Have only used through tutorials, but I'm hoping to gain some familiarity using it here</li>
                                <li><a href="https://products.ls.graphics/paaatterns/" target="_blank">Paaaterns</a> for front-end illustrations / themeing (I used it here for the sidebanner)</li>
                                <li>React-Router-Dom for routing</li>
                                <li>Firebase Authentication for signup and login</li>
                                <li>FIrebase firestore for data storage</li>
                                <li>Owlbot api for dictionary data</li>
                            </ul>
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

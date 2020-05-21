import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import image from '../images/Side-banner.png';

export default class Plans extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <main>
                        <NavBar />
                        <div className="mainContent">
                            <h2>Plan of Action</h2>
                            <table>
                                <tr>
                                    <th>Data</th>
                                    <th>Tasks to Complete</th>
                                </tr>
                                <tr>
                                    <td className="center" >Week One</td>
                                    <td>
                                        <ul>
                                            <li>Initialize Project and install Dependencies</li>
                                            <li>Set up routing and basic navigation</li>
                                            <li>Create firebase application and sync with app</li>
                                            <li>Set up authentication and authorization on firebase</li>
                                            <li>Make sure api is working and get request is successful otherwise find other api to use</li>
                                        </ul>
                                        <p className="center">By the end of week one the basic scaffolding of the project should be there with firebase and routing set up and ready</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="center">Week Two</td>
                                    <td>
                                        <ul>
                                            <li>Build out main componenets including navbar, searchbar, vocab cards, flashcard</li>
                                            <li>Make sure main layout is displaying correctly</li>
                                            <li>Search capability should be achieved</li>
                                            <li>Users should be able to save words and remove words from collection</li>
                                            <li>Begin integrating paaatern images and component styling</li>
                                        </ul>
                                        <p className="center">By the end of week two I hope to reach MVP with a somewhat polished frontend</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="center">Week Three</td>
                                    <td>
                                        <ul>
                                            <li>Begin working on integrating flashcard functionality</li>
                                            <li>Work on integrating test page to dynamically create vocabulary tests</li>
                                            <li>Get website deployed on github pages or other source</li>
                                        </ul>
                                        <p className="center">By the end of this week the application should be essentially finished with the app deployed and working</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="center">Week Four</td>
                                    <td>
                                        <ul>
                                            <li>Continue to polish the frontend with styling and UI updates</li>
                                            <li>Work on achieving stretch goals and adding any last minute final touches</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
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

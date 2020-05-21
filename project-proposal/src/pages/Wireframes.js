    import React, { Component } from 'react';
    import NavBar from '../components/NavBar';
    import Header from '../components/Header';
    import image from '../images/Side-banner.png';
    import Color from '../components/Color';
    import imageTheme from '../images/Inn.png';

    export default class Wireframes extends Component {
        render() {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <main>
                            <NavBar />
                            <div className="mainContent">
                                <h2>Wireframes</h2>
                                <p>For the frontend design I'm hoping to achieve a quite minimalist design with the following illustration and color scheme as my inspiration</p>
                                <div className="image">
                                    <img className="theme" src={imageTheme} alt="" />
                                </div>
                                <div className="colorScheme">
                                    <Color color="#F45B0F" />
                                    <Color color="#FFD726" />
                                    <Color color="#94C0D4" />
                                    <Color color="#048ECB" />
                                    <Color color="#161616" />
                                    <Color color="#E6E6E6" />
                                </div>
                                <p>Here are a few wireframe mockups of the layout and design of my project</p>

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

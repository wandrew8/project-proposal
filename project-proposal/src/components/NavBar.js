import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navigation">
            <nav>
                <h3>Navigation</h3>
                <ul>
                    <Link to="/"><li>Proposal</li></Link>
                    <Link to="/wireframes"><li>Wireframes</li></Link>
                    <Link to="/dependencies"><li>Dependencies</li></Link>
                    <Link to="/tasks"><li>Tasks</li></Link>
                    <Link to="/plans"><li>Plan</li></Link>
                </ul>
            </nav>
        </div>
    )
}

import  React from 'react';

const Nav = () => {
    return (
        <div className="Nav">
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    );
};

export default Nav;

/*
ul.horizontal {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
*/
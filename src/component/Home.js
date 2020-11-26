import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
            <div>
                <h4>Resources</h4>
                <h5>JSONPlaceholder comes with a set of 6 common resources:</h5>
                    <p>
                    <a href="/Posts">
                        /posts
                    </a>
                    100 posts
                    </p>
                    <p>
                    <a href="/Comments">
                        /comments
                    </a>
                    500 comments
                    </p>                                       
                    <p>
                    <a href="/Users">
                        /users
                    </a>
                    10 users
                    </p>
                    <p>
                    <a href="/Albums">
                        /albums
                    </a>
                    10 users
                    </p>                    
                    <p>
                    <a href="/Photos">
                        /photos
                    </a>
                    10 users
                    </p>                    
                    <p>
                    <a href="/Categories">
                        /Categories
                    </a>
                    10 users
                    </p>                    
                    <p>
                    <a href="/Brands">
                        /Brands
                    </a>
                    10 users
                    </p>                    
                    <p>
                    <a href="/Items">
                        /Items
                    </a>
                    10 users
                    </p>
                    <h5>Note: resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</h5>
            </div>
        )
    }
}

export default Home;
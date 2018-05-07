import React, { Component } from 'react'
import { Paper, Menu } from 'material-ui'
import PostInput from '../common/PostInput'
import './Newsfeed.css'

class Newsfeed extends Component {
    render() {

        return (
            <section className="newsfeed">
                <div className="newsfeed-container">
                    <PostInput />
                </div>
            </section>
        )
    }
}

export default Newsfeed;

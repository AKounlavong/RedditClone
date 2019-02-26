import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CREATE} from './../constants/index';
let newId = Math.floor(Math.random() * 1000) + 1
class CreatePost extends Component {
    state = { 
        id: newId,
        title: '',
        subreddit: '',
        poster: '',
        time: '',
        imgurl: '',
        downvotes: 0,
        upvotes: 0,
     }

    post = () => {
        this.props.onCreate(this.state);
        this.setState({
            id: newId,
            title: '',
            subreddit: '',
            poster: '',
            time: '',
            imgurl: '',
            downvotes: 0,
            upvotes: 0,
        })
    }

    render() { 
        return ( 
            <div>
                <h1>Create Post Page</h1>
                <form>
                    <div>
                        <input type="text" 
                               placeholder="Title"
                               value={this.state.title}
                               onChange={(e) => this.setState({title: e.target.value})}/>
                    </div>
                    <div>
                    <input type="text" 
                           placeholder="Sub Reddit"
                           value={this.state.subreddit}
                           onChange={(e) => this.setState({subreddit: e.target.value})}/>
                    </div>
                    <div>
                        <input type="text" 
                               placeholder="User Name"
                               value={this.state.poster}
                               onChange={(e) => this.setState({poster: e.target.value})}/>
                    </div>
                    <div>
                        <input type="datetime-local" 
                               placeholder="Current Time"
                               value={this.state.time}
                               onChange={(e) => this.setState({time: e.target.value})}/>
                    </div>
                    <div>
                        <input type="url" 
                               placeholder="Link"
                               value={this.state.imgurl}
                               onChange={(e) => this.setState({imgurl: e.target.value})}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" onClick={this.post}>Submit</button>
                    </div>
                </form>
            </div>
         );
    }
}
 


export default (CreatePost);
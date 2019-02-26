import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvotePost , downvotePost } from './../actions/index';

class FrontPage extends Component {
    state= {}
    getHoursFromNow = time => new Date(new Date() - new Date(time)).getHours();

    componentDidMount(){
        console.log(this.props.post.post)
    }

    render() { 
        return ( 
            <div>
                <h1>Front Page</h1>
                {this.props.post.map((post, index) => {
                    return(
                    <div key={index} post={post}>
                        <h3>{post.title}</h3>
                        <h3>r/{post.subreddit}</h3>
                        <h3>u/{post.poster}</h3>
                        <h3>Posted {this.getHoursFromNow(post.time)} hours ago</h3>
                        <a src={post.link} />
                        <img src={post.imgUrl} />
                        <video src={post.src} autoPlay loop/>
                        <h4>Votes: {post.upvotes - post.downvotes}</h4>
                        <button onClick={() => { this.props.upvote(post.id) }}><span> ⬆️ </span></button>
                        <button onClick={() => { this.props.downvote(post.id) }}><span> ⬇️ </span></button>
                    </div>
                    )
                })}
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    post: state
  });

const mapPropsToDispatch = dispatch => ({
    upvote: id => { dispatch(upvotePost(id)) },
    downvote: id => { dispatch(downvotePost(id)) }
  })

export default connect(mapStateToProps, mapPropsToDispatch)(FrontPage);
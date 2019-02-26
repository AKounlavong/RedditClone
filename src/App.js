import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import FrontPage from './components/frontPage';
import CommentsPage from './components/commentsPage';
import CreatePost from './components/createPost';
import Navbar from './navbar';
import { connect } from 'react-redux';
import { upvotePost , downvotePost } from './actions/index';
import { withRouter } from 'react-router-dom';

/**
 * These are sample imports if you are using Redux in 
 * a particular component
 * 
 * import { connect } from 'react-redux';
 * import {  } from './actions';
 */

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div>
          <Switch>  
            <Route exact path="/" render={(renderProps) => <FrontPage {...renderProps}/>} />
            <Route path="/front" render={(renderProps) => <FrontPage {...renderProps}/>} />
            <Route path="/create_post" render={(renderProps) => <CreatePost {...renderProps}/>} />
            <Route path="/comments" render={(renderProps) => <CommentsPage {...renderProps}/>} />
          </Switch>
        </div>
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

/**
 *    sample code for adding redux state and dispatch
 *    > const mapStateToProps = state => ({ });
 *    > const mapPropsToDispatch = dispatch => ({ })
 *    > export default connect(mapStateToProps, mapPropsToDispatch)(App);
 */

export default withRouter( connect(mapStateToProps, mapPropsToDispatch)(App)  );
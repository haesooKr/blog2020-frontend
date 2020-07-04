import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTLOG</title>
      </Helmet>
      <Route path={['/@:username', '/']} component={PostListPage} exact></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/write" component={WritePage}></Route>
      <Route path="/@:username/:postId" component={PostPage}></Route>
    </>
  );
};

export default App;

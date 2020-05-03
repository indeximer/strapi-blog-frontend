import React from "react";  
import PostsList from "../components/PostsList";  
import Query from "../components/query";  
import ARTICLES_QUERY from "../apollo/queries/article/articles";

const Home = () => {  
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { posts } }) => {
              return <PostsList articles={posts} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;  
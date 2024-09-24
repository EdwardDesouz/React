import { useContext, useEffect } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataConntext";


const Home = () => {
  const { searchResults, fetcherror, isLoading } = useContext(DataContext);

  return (
    <main className="Home">
      {isLoading && (
        <p className="statusMsg">Loading posts...</p>
      )}
      {!isLoading && fetcherror && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetcherror}
        </p>
      )}
      {!isLoading && !fetcherror && (
        searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        )
      )}
    </main>
  );
};

export default Home;

import { useContext, useEffect } from "react";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import NewsList from "./components/NewsList";
import Loading from "./components/Loading";
import { ArticlesContext } from "./context/ArticlesContext";

function App() {
  const { isLoading, news } = useContext(ArticlesContext);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
      <div className="grid-main">
        <Sidebar />
        <div className="container">
          <NewsList
            data={news}
            // toggleViewMode={toggleViewMode}
            // setToggleViewMode={setToggleViewMode}
          />
        </div>
      </div>
      <Footer data={news} />
    </div>
  );
}

export default App;

import { Link, Routes, Route, useNavigate } from "react-router-dom"
import About from "./About"
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Missing from "./Missing"
import Nav from "./Nav"
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import EditPost from "./EditPost"
import { DataProvider } from "./context/DataConntext"


function App() {
 


  return (
    <div className="App">
      <DataProvider>
        <Header title="Tutorial" />
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" element={<NewPost/>} />
          <Route path="post/:id" element={<PostPage/>}/>
          <Route path="/edit/:id" element={<EditPost/>}/>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;

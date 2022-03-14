import "./App.css";
import Users from "./Components/Users";
// import Footer from "./Components/Footer";
import AddUser from "./Components/AddUser";

function App() {
  return (
    <div className="App">
      <div>
        <Users />
      </div>
      {/* <div>
        <Footer />
      </div> */}
      <AddUser trigger={true} />
    </div>
  );
}

export default App;

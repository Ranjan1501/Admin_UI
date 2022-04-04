import "./App.css";
import UsersList from "./Components/UsersList";
import { ErrorBoundary } from "./ErrorHandling/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UsersList />
      </ErrorBoundary>
    </div>
  );
}

export default App;

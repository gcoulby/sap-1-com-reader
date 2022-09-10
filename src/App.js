import logo from "./logo.svg";
import "./App.css";
import "./styles/css-compiled/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ComReader from "./components/com-reader";

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Ben Eater SAP-1 Emulator
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
            <main className="container">
                {/* <div className="bg-light p-5 rounded">
                    <h1>Navbar example</h1>
                    <p className="lead">
                        This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with
                        the rest of the page.
                    </p>
                    <a className="btn btn-lg btn-primary" href="/docs/5.2/components/navbar/" role="button">
                        View navbar docs »
                    </a>
                </div> */}
                <ComReader />
            </main>
        </div>
    );
}

export default App;

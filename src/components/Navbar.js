import {Link} from "react-router-dom";

const Navbar =()=>{
        return(
            <>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsMonkey</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
</>
        )
    
}

export default Navbar;
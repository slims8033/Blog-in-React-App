import NavBarz from './components/Nav';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css files/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewBlog from './components/NewBlog';
import DisplayBlog from './components/DisplayBlog';
import Footer from './components/Footer';
function App() {
	return (
		<Router>
			<div className="App">
				<NavBarz />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/create">
							<NewBlog />
						</Route>
						<Route path="/:type/:id">
							<DisplayBlog />
						</Route>
					</Switch>
				</div>
			</div>
			<Footer />
		</Router>
	);
}

export default App;

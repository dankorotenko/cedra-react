import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import CookiePolicy from "./pages/CookiePolicy";
import Projects from "./pages/Projects";
import { Layout } from "./pages/Layout";
import SingleProject from "./pages/SingleProject";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:slug" element={<SingleProject />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:slug" element={<BlogPost />} />
				</Route>
				<Route path="/cookie-policy" element={<CookiePolicy />} />
			</Routes>
		</Router>
	);
}

export default App;

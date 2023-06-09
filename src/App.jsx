import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Preloader from './components/Common/Preloader';
// import Home from './components/Pages/Home';
// import HomeTwo from './components/Pages/HomeTwo';
// import HomeThree from './components/Pages/HomeThree';
// import HomeFour from './components/Pages/HomeFour';
import HomeFive from './components/Pages/HomeFive';
// import HomeSix from './components/Pages/HomeSix';
// import HomeSeven from './components/Pages/HomeSeven';
// import About from './components/Pages/About';
// import Services from './components/Pages/Services';
// import ServicesTwo from './components/Pages/ServicesTwo';
// import ServiceDetails from './components/Pages/ServiceDetails';
// import Project from './components/Pages/Project';
// import ProjectDetails from './components/Pages/ProjectDetails';
// import BlogDetails from './components/Pages/BlogDetails';
// import Testimonials from './components/Pages/Testimonials';
// import Team from './components/Pages/Team';
// import Blog from './components/Pages/Blog';
// import Contact from './components/Pages/Contact';

class App extends React.Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    {/* {this.state.loading ? <Preloader /> : ''} */}
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" exact component={HomeTwo} /> */}
                    {/* <Route path="/" exact component={HomeThree} /> */}
                    {/* <Route path="/" exact component={HomeFour} />  */}
                    <Route path="/" exact component={HomeFive} />
                      {/* <Route path="/" exact component={HomeSix} /> */}
                     {/* <Route path="/" exact component={HomeSeven} />  */}
                    {/* <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/services-two" exact component={ServicesTwo} />
                    <Route path="/service-details" exact component={ServiceDetails} />
                    <Route path="/projects" exact component={Project} />
                    <Route path="/project-details" exact component={ProjectDetails} />
                    <Route path="/blog-details" exact component={BlogDetails} />
                    <Route path="/testimonials" exact component={Testimonials} />
                    <Route path="/team" exact component={Team} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/contact" exact component={Contact} /> */}
                </React.Fragment>
            </Router>
        );
    }
}

export default App;

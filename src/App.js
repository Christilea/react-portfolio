import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import NoMatch from './pages/NoMatch'
import NavBar from './components/NavBar'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'

// export default function App() {
//   return (
//     <main className="text-gray-400 bg-gray-900 body-font">
//       <Navbar />
//       <Home/>
//       <Projects />
//       <Footer/>
//       <Portfolio />
//       <Contact />
//     </main>
//   );
// }


function App() {
  return (
  <BrowserRouter>
  <NavBar />
  <Switch>
    <Route exact path='/contact' >
      <Contact />

    </Route>
    <Route exact path='/portfolio' >
      <Portfolio />

    </Route>
    <Route exact path='/' >
      <Home />

    </Route>
    <Route path='*' >
      <NoMatch />

    </Route>
  </Switch>
<Footer />
  </BrowserRouter>
  );
}

export default App;

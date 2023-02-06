import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NameForm from './components/NameForm';
import Summary from './components/Summary';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import CommunicationDetails from './components/CommunicationDetails';
import Header from './components/Header';
import ProjectDetails from './components/ProjectDetails';
import Skills from './components/Skills';
import Reference from './components/Reference'
import Resume from './components/Resume'
import { createStore } from 'redux';
import rootReducer from './store/reducer'
import { Provider } from 'react-redux';
const reduxStore = createStore(
  rootReducer,
)
function App() {
  return (

    <Provider store={reduxStore}>
    <div className="App">
      <div className='header'><Header /></div>

      <Router>
        <Routes>
          <Route path="/" element={<NameForm />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/education" element={<Education />} />
          <Route path='/workexperience' element={<WorkExperience />} />
          <Route path='/communication' element={<CommunicationDetails />} />
          <Route path='/projectdetails' element={<ProjectDetails />} />
          <Route path='/skill' element={<Skills />} />
          <Route path='/reference' element={<Reference />} />
          <Route path='/resume' element={< Resume />} />
        </Routes>
      </Router>

    </div>
    </Provider>

  );
}

export default App;

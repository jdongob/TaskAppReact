import './App.css';
import CodeLogo from './images/code-logo.png'
import TaskList from './components/TaskList';


function App() {
  return (
    <div className='application-tasks'>
      
      <div className='container-logo'>
        <img 
          src={CodeLogo}
          className='code-logo' 
        />
      </div>

       <div className='tasks-main-list'>
          <h1>My Tasks</h1>
            <TaskList />
       </div>
 
    </div>
  );
}

export default App;

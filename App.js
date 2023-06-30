import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      <h1>EMPLOYEE CRUD OPERATIONS</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeForm/>}></Route>
        <Route path='/employeetable' element={<EmployeeTable/>}></Route>
        <Route path='/update' element={<UpdateForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import {NavBarComponent, ItemListContainer} from './components';
import { MainLayout } from './layouts/MainLayout';


function App() {
  return (
    <div className="App">
      <NavBarComponent/>
      <MainLayout>
      <ItemListContainer  greetings='Hello! Welcome to ' subtitle='Just Buy It!'/>
      </MainLayout>
    </div>
  );
}

export default App;
 
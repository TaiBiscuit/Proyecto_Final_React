import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { MainRoutes } from './routes/MainRoutes';


function App() {

  return (
    <div className="App">
      <MainLayout>
      <MainRoutes />
      </MainLayout>
    </div>
  );
}

export default App;
 
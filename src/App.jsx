import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { MainRoutes } from './routes/MainRoutes';
import { CartProvider } from './context';


function App() {

  return (
    <div className="App">
      <MainLayout>
        <CartProvider>
        <MainRoutes />
        </CartProvider>
      </MainLayout>
    </div>
  );
}

export default App;
 
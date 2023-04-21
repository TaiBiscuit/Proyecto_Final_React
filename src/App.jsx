import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { MainRoutes } from './routes/MainRoutes';
import { CartProvider, SavedProvider } from './context';


function App() {

  return (
    <div className="App">
      <MainLayout>
        <CartProvider>
          <SavedProvider>
          <MainRoutes />
          </SavedProvider>
        </CartProvider>
      </MainLayout>
    </div>
  );
}

export default App;
 
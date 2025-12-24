import './App.css'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">📚 Biblioteca de Productos IT</h1>
        <p className="app-subtitle">
          Explora nuestra colección de productos de informática
        </p>
      </header>
      
      <main className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      
      <footer className="app-footer">
        <p>© 2025 Biblioteca IT - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

export default App

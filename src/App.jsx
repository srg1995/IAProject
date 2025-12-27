import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import LoginPopup from "./components/LoginPopup";
import { products } from "./data/products";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <div className="app">
            <header className="app-header">
                <div className="header-content">
                    <div className="header-text">
                        <h1 className="app-title">
                            📚 Biblioteca de Productos IT
                        </h1>
                        <p className="app-subtitle">
                            Explora nuestra colección de productos de
                            informática
                        </p>
                    </div>
                    <button
                        className="login-button"
                        onClick={() => setIsLoginOpen(true)}
                    >
                        👤 Iniciar Sesión
                    </button>
                </div>
            </header>

            <LoginPopup
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />

            <main className="products-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </main>

            <footer className="app-footer">
                <p>© 2025 Biblioteca IT - Todos los derechos reservados</p>
            </footer>
        </div>
    );
}

export default App;

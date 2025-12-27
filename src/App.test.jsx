import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

vi.mock("./components/ProductCard", () => ({
    default: ({ product }) => (
        <div data-testid={`product-${product.id}`}>{product.name}</div>
    ),
}));

vi.mock("./components/LoginPopup", () => ({
    default: ({ isOpen, onClose }) =>
        isOpen ? (
            <div data-testid="login-popup" onClick={onClose}>
                Login Popup
            </div>
        ) : null,
}));

vi.mock("./data/products", () => ({
    products: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
    ],
}));

describe("App", () => {
    it("renders app title and subtitle", () => {
        render(<App />);
        expect(
            screen.getByText("📚 Biblioteca de Productos IT")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Explora nuestra colección de productos de informática"
            )
        ).toBeInTheDocument();
    });

    it("renders login button", () => {
        render(<App />);
        expect(screen.getByText("👤 Iniciar Sesión")).toBeInTheDocument();
    });

    it("opens login popup when login button is clicked", () => {
        render(<App />);
        const loginButton = screen.getByText("👤 Iniciar Sesión");
        fireEvent.click(loginButton);
        expect(screen.getByTestId("login-popup")).toBeInTheDocument();
    });

    it("closes login popup when onClose is called", () => {
        render(<App />);
        const loginButton = screen.getByText("👤 Iniciar Sesión");
        fireEvent.click(loginButton);
        const popup = screen.getByTestId("login-popup");
        fireEvent.click(popup);
        expect(screen.queryByTestId("login-popup")).not.toBeInTheDocument();
    });

    it("renders all products", () => {
        render(<App />);
        expect(screen.getByTestId("product-1")).toBeInTheDocument();
        expect(screen.getByTestId("product-2")).toBeInTheDocument();
    });

    it("renders footer", () => {
        render(<App />);
        expect(
            screen.getByText(
                "© 2025 Biblioteca IT - Todos los derechos reservados"
            )
        ).toBeInTheDocument();
    });
});

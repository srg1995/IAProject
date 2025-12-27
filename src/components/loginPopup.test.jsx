import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import LoginPopup from "./LoginPopup";

describe("LoginPopup", () => {
    const mockOnClose = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("does not render when isOpen is false", () => {
        render(<LoginPopup isOpen={false} onClose={mockOnClose} />);
        expect(screen.queryByText("Iniciar Sesión")).not.toBeInTheDocument();
    });

    it("renders login form when isOpen is true", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        expect(
            screen.getByRole("heading", { name: "Iniciar Sesión" })
        ).toBeInTheDocument();
        expect(
            screen.getByText("Accede a tu cuenta para continuar")
        ).toBeInTheDocument();
    });

    it("closes popup when close button is clicked", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("✕"));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("closes popup when overlay is clicked", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        const overlay = screen
            .getByRole("heading", { name: "Iniciar Sesión" })
            .closest(".popup-overlay");
        fireEvent.click(overlay);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("does not close popup when clicking inside container", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        const container = screen
            .getByRole("heading", { name: "Iniciar Sesión" })
            .closest(".popup-container");
        fireEvent.click(container);
        expect(mockOnClose).not.toHaveBeenCalled();
    });

    it("switches to register mode when button is clicked", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        expect(screen.getByText("Crear Cuenta")).toBeInTheDocument();
        expect(screen.getByText("Regístrate para empezar")).toBeInTheDocument();
    });

    it("switches back to login mode from register mode", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        fireEvent.click(screen.getByText("¿Ya tienes cuenta? Inicia sesión"));
        expect(
            screen.getByRole("heading", { name: "Iniciar Sesión" })
        ).toBeInTheDocument();
    });

    it("shows validation errors for empty login form", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));
        expect(screen.getByText("El usuario es requerido")).toBeInTheDocument();
        expect(
            screen.getByText("La contraseña es requerida")
        ).toBeInTheDocument();
    });

    it("shows validation errors for empty register form", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        fireEvent.click(screen.getByText("Registrarse"));
        expect(screen.getByText("El email es requerido")).toBeInTheDocument();
        expect(screen.getByText("El usuario es requerido")).toBeInTheDocument();
        expect(
            screen.getByText("El nombre completo es requerido")
        ).toBeInTheDocument();
        expect(
            screen.getByText("La contraseña es requerida")
        ).toBeInTheDocument();
    });

    it("validates email format", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));

        const emailInput = screen.getByPlaceholderText("tu@email.com");
        // Trigger change event with invalid email (has double dots which is invalid)
        fireEvent.change(emailInput, {
            target: { value: "test..invalid@email.com" },
        });

        // Fill other required fields to isolate email validation
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByPlaceholderText("Juan Pérez"), {
            target: { value: "Test User" },
        });
        fireEvent.change(screen.getByLabelText("Contraseña *"), {
            target: { value: "Password123" },
        });
        fireEvent.change(screen.getByLabelText("Confirmar Contraseña *"), {
            target: { value: "Password123" },
        });
        fireEvent.click(screen.getByText("Registrarse"));
        expect(
            screen.getByText("El formato del email no es válido")
        ).toBeInTheDocument();
    });
    it("validates password strength", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        fireEvent.change(screen.getByLabelText("Contraseña *"), {
            target: { value: "weak" },
        });
        fireEvent.click(screen.getByText("Registrarse"));
        expect(
            screen.getByText(
                "La contraseña debe tener al menos 8 caracteres, una letra y un número"
            )
        ).toBeInTheDocument();
    });

    it("validates password confirmation match", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        fireEvent.change(screen.getByLabelText("Contraseña *"), {
            target: { value: "Password123" },
        });
        fireEvent.change(screen.getByLabelText("Confirmar Contraseña *"), {
            target: { value: "Different123" },
        });
        fireEvent.click(screen.getByText("Registrarse"));
        expect(
            screen.getByText("Las contraseñas no coinciden")
        ).toBeInTheDocument();
    });

    it("clears error when user types in field", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));
        expect(screen.getByText("El usuario es requerido")).toBeInTheDocument();
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "user" },
        });
        expect(
            screen.queryByText("El usuario es requerido")
        ).not.toBeInTheDocument();
    });

    it("handles successful login", async () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByPlaceholderText("••••••••"), {
            target: { value: "password123" },
        });
        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));

        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        expect(
            screen.getByText("¡Inicio de sesión exitoso!")
        ).toBeInTheDocument();

        await act(async () => {
            vi.advanceTimersByTime(1500);
        });

        expect(mockOnClose).toHaveBeenCalled();
    });

    it("handles successful registration", async () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByPlaceholderText("Juan Pérez"), {
            target: { value: "Test User" },
        });
        fireEvent.change(screen.getByLabelText("Contraseña *"), {
            target: { value: "Password123" },
        });
        fireEvent.change(screen.getByLabelText("Confirmar Contraseña *"), {
            target: { value: "Password123" },
        });
        fireEvent.click(screen.getByText("Registrarse"));

        await act(async () => {
            vi.advanceTimersByTime(1000);
        });

        expect(
            screen.getByText("¡Registro exitoso! Ahora puedes iniciar sesión.")
        ).toBeInTheDocument();

        await act(async () => {
            vi.advanceTimersByTime(1500);
        });

        expect(
            screen.getByRole("heading", { name: "Iniciar Sesión" })
        ).toBeInTheDocument();
    });

    it("shows loading state during submission", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByPlaceholderText("••••••••"), {
            target: { value: "password123" },
        });
        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));
        expect(screen.getByText("⏳")).toBeInTheDocument();
    });

    it("disables inputs during loading", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "testuser" },
        });
        fireEvent.change(screen.getByPlaceholderText("••••••••"), {
            target: { value: "password123" },
        });
        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));
        expect(screen.getByPlaceholderText("nombre_usuario")).toBeDisabled();
        expect(screen.getByPlaceholderText("••••••••")).toBeDisabled();
    });

    it("resets form when switching modes", () => {
        render(<LoginPopup isOpen={true} onClose={mockOnClose} />);
        fireEvent.change(screen.getByPlaceholderText("nombre_usuario"), {
            target: { value: "testuser" },
        });
        fireEvent.click(screen.getByText("¿No tienes cuenta? Regístrate"));
        expect(screen.getByPlaceholderText("nombre_usuario")).toHaveValue("");
    });
});

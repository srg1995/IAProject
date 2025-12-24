# AI Testing Project

Un proyecto completo para probar las capacidades de IA, MCP (Model Context Protocol) y agentes de Visual Studio Code.

## 🎯 Propósito

Este proyecto está diseñado específicamente para:

- ✅ **Revisiones de código con IA**: El código incluye bugs y problemas intencionales para que la IA los detecte
- ✅ **Generación de pull requests**: Estructura lista para crear PRs automáticos
- ✅ **Cobertura de tests**: Tests parciales con gaps intencionales para que la IA complete
- ✅ **Integración con MCP**: Listo para probar el Model Context Protocol
- ✅ **Agentes de VS Code**: Compatible con GitHub Copilot y otros agentes

## 📦 Estructura del Proyecto

```
IAProject/
├── src/
│   ├── calculator.ts       # Clase calculadora con operaciones matemáticas
│   ├── stringUtils.ts      # Utilidades para manipulación de strings
│   ├── arrayUtils.ts       # Utilidades para manipulación de arrays
│   ├── index.ts           # Punto de entrada de la aplicación
│   └── __tests__/         # Tests unitarios con Jest
│       ├── calculator.test.ts
│       ├── stringUtils.test.ts
│       └── arrayUtils.test.ts
├── .github/
│   └── workflows/
│       └── ci.yml         # Pipeline CI/CD con GitHub Actions
├── coverage/              # Reportes de cobertura (generado)
├── dist/                  # Código compilado (generado)
└── node_modules/          # Dependencias (generado)
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20 o superior
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Compilar TypeScript
npm run build

# Ejecutar la aplicación
npm start

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Ejecutar tests en modo watch
npm run test:watch

# Linting
npm run lint

# Corregir problemas de linting
npm run lint:fix
```

## 🧪 Testing y Cobertura

El proyecto incluye tests con **cobertura parcial intencional** (aproximadamente 70-75%) para demostrar las capacidades de los agentes de IA:

### Métodos NO Testeados (para que la IA complete):

**Calculator:**
- `factorial()` - Tiene un bug con números negativos
- `isPrime()` - Sin tests

**StringUtils:**
- `countVowels()` - Sin tests
- `truncate()` - Sin tests
- `removeWhitespace()` - Tiene un bug (solo elimina espacios, no tabs/newlines)

**ArrayUtils:**
- `removeDuplicates()` - Sin tests
- `chunk()` - Sin tests
- `flatten()` - Tiene un bug (solo aplana un nivel)

### Ejecutar Coverage Report

```bash
npm run test:coverage
```

Esto generará un reporte HTML en `coverage/index.html` que puedes abrir en tu navegador.

## 🐛 Bugs Intencionales para Detección de IA

El código incluye varios bugs intencionales para que los agentes de IA los detecten:

1. **Calculator.factorial()**: No maneja números negativos, causará desbordamiento de pila
2. **StringUtils.removeWhitespace()**: Solo elimina espacios regulares, no tabs ni newlines
3. **ArrayUtils.flatten()**: Solo aplana un nivel, no recursivamente

## 🤖 Probar con Agentes de IA

### 1. Code Review con IA

Usa GitHub Copilot o tu agente de IA preferido para:

```
"Revisa el código en src/ y detecta posibles bugs o mejoras"
```

La IA debería detectar:
- Bug en `factorial()` con números negativos
- Bug en `removeWhitespace()` con tabs/newlines
- Bug en `flatten()` que solo aplana un nivel
- Falta de validación de inputs en algunos métodos

### 2. Completar Cobertura de Tests

Pide a la IA:

```
"Analiza la cobertura de tests y genera tests para los métodos sin cobertura"
```

La IA debería generar tests para:
- `Calculator.factorial()` y `Calculator.isPrime()`
- `StringUtils.countVowels()`, `truncate()`, `removeWhitespace()`
- `ArrayUtils.removeDuplicates()`, `chunk()`, `flatten()`

### 3. Generar Pull Requests

Usa tu agente para:

```
"Crea un PR que corrija el bug en Calculator.factorial() y añada tests"
```

### 4. Refactoring y Mejoras

Pide mejoras al código:

```
"Refactoriza las clases para mejor mantenibilidad y añade validación de inputs"
```

## 📊 CI/CD Pipeline

El proyecto incluye un workflow de GitHub Actions que:

1. ✅ Ejecuta linting (ESLint)
2. ✅ Compila el código TypeScript
3. ✅ Ejecuta tests con reporte de cobertura
4. ✅ Genera summary de cobertura en GitHub
5. ✅ Ejecuta tests de integración

## 🔧 Configuración

### ESLint

Configurado con reglas de TypeScript para detectar:
- Variables no usadas
- Tipos explícitos en funciones
- Uso de `any`
- Console.log en producción

### Jest

Configurado con:
- Preset para TypeScript (`ts-jest`)
- Umbrales de cobertura al 70%
- Reportes en múltiples formatos (text, lcov, html, json)

### TypeScript

Configurado con:
- Modo strict activado
- Target ES2020
- Source maps habilitados
- Declaraciones de tipos generadas

## 🎓 Casos de Uso para Aprendizaje

### Escenario 1: Mejorar Cobertura
```bash
# Ver cobertura actual
npm run test:coverage

# Usar IA: "Genera tests para alcanzar 90% de cobertura"
```

### Escenario 2: Code Review
```bash
# Usar IA: "Revisa el código y sugiere mejoras de calidad"
```

### Escenario 3: Fix Bugs
```bash
# Usar IA: "Encuentra y corrige todos los bugs en el código"
```

### Escenario 4: Documentación
```bash
# Usar IA: "Mejora la documentación JSDoc de todas las clases"
```

## 📝 Próximos Pasos Sugeridos

Para expandir este proyecto de prueba:

1. ✨ Añadir más clases con diferentes tipos de bugs
2. 🔐 Añadir código con vulnerabilidades de seguridad para detectar
3. 📈 Integrar herramientas de análisis estático (SonarQube)
4. 🎨 Añadir ejemplos de refactoring de código legacy
5. 🌐 Añadir ejemplos de código asíncrono y manejo de errores
6. 🔄 Añadir ejemplos de patrones de diseño

## 🤝 Contribuir

Este es un proyecto de aprendizaje. Siéntete libre de:
- Añadir más ejemplos de código
- Crear más casos de prueba
- Documentar tus experimentos con IA
- Compartir resultados interesantes

## 📄 Licencia

MIT

---

**Nota**: Este proyecto es intencionalmente imperfecto para propósitos educativos y de testing de IA. Los bugs y gaps de cobertura son características, no errores reales! 😊
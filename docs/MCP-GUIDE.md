# MCP (Model Context Protocol) Testing Guide

Guía para probar el Model Context Protocol con este proyecto.

## 🔌 ¿Qué es MCP?

Model Context Protocol (MCP) es un protocolo que permite a los modelos de IA acceder a contexto externo de manera estructurada y segura.

## 🎯 Objetivos de Testing

Este proyecto está diseñado para probar MCP en los siguientes aspectos:

1. **Lectura de Código**: Acceso a archivos y estructura del proyecto
2. **Análisis de Cobertura**: Interpretación de reportes de cobertura
3. **Ejecución de Comandos**: Ejecutar tests, builds, linting
4. **Generación de Código**: Crear tests, corregir bugs
5. **Gestión de Git**: Commits, PRs, diffs

## 📁 Estructura para MCP

### Archivos Clave

```
IAProject/
├── src/                    # Código fuente para análisis
├── coverage/               # Reportes de cobertura (JSON, HTML)
├── package.json           # Metadatos y scripts
├── tsconfig.json          # Configuración TypeScript
├── jest.config.js         # Configuración de tests
└── .github/workflows/     # CI/CD configs
```

### Metadatos del Proyecto

El `package.json` expone:
- Scripts disponibles
- Dependencias
- Configuración de herramientas

## 🧪 Escenarios de Testing MCP

### Escenario 1: Lectura de Contexto

**Objetivo:** Verificar que MCP puede leer y entender el código

**Test:**
```json
{
  "context_request": {
    "type": "file_content",
    "path": "src/calculator.ts"
  }
}
```

**Validación:**
- ✅ MCP puede leer el archivo
- ✅ MCP entiende la estructura de la clase
- ✅ MCP identifica métodos y sus firmas

### Escenario 2: Análisis de Cobertura

**Objetivo:** MCP puede interpretar reportes de cobertura

**Pasos:**
1. Ejecutar `npm run test:coverage`
2. MCP lee `coverage/coverage-summary.json`
3. MCP identifica gaps de cobertura

**Test:**
```json
{
  "context_request": {
    "type": "coverage_analysis",
    "path": "coverage/coverage-summary.json"
  }
}
```

**Validación:**
- ✅ MCP identifica métodos sin tests
- ✅ MCP calcula porcentaje de cobertura
- ✅ MCP sugiere qué testear

### Escenario 3: Ejecución de Comandos

**Objetivo:** MCP puede ejecutar comandos npm

**Test:**
```json
{
  "command_request": {
    "command": "npm test",
    "working_directory": "/proyecto"
  }
}
```

**Validación:**
- ✅ MCP ejecuta el comando
- ✅ MCP captura stdout/stderr
- ✅ MCP interpreta el resultado

### Escenario 4: Generación de Código

**Objetivo:** MCP puede generar código basado en contexto

**Contexto requerido:**
- Archivo existente (`calculator.ts`)
- Tests existentes (`calculator.test.ts`)
- Gap de cobertura identificado

**Test:**
```json
{
  "generation_request": {
    "type": "test_generation",
    "target": "src/calculator.ts",
    "method": "isPrime",
    "context_files": [
      "src/calculator.ts",
      "src/__tests__/calculator.test.ts"
    ]
  }
}
```

**Validación:**
- ✅ Test generado es sintácticamente correcto
- ✅ Test sigue el estilo de tests existentes
- ✅ Test cubre casos edge

### Escenario 5: Code Review

**Objetivo:** MCP puede revisar código con contexto completo

**Test:**
```json
{
  "review_request": {
    "files": ["src/calculator.ts"],
    "context": {
      "tests": "src/__tests__/calculator.test.ts",
      "coverage": "coverage/coverage-summary.json",
      "style_guide": ".eslintrc.json"
    }
  }
}
```

**Validación:**
- ✅ MCP identifica bugs
- ✅ MCP sugiere mejoras
- ✅ MCP considera estilo del proyecto

## 🔧 Configuración de MCP

### Contexto Mínimo Requerido

```json
{
  "project_root": "/home/runner/work/IAProject/IAProject",
  "language": "typescript",
  "test_framework": "jest",
  "build_tool": "npm",
  "entry_point": "src/index.ts"
}
```

### Contexto Expandido

```json
{
  "project_root": "/home/runner/work/IAProject/IAProject",
  "language": "typescript",
  "test_framework": "jest",
  "build_tool": "npm",
  "entry_point": "src/index.ts",
  "source_directories": ["src"],
  "test_directories": ["src/__tests__"],
  "config_files": {
    "typescript": "tsconfig.json",
    "jest": "jest.config.js",
    "eslint": ".eslintrc.json"
  },
  "scripts": {
    "test": "npm test",
    "coverage": "npm run test:coverage",
    "lint": "npm run lint",
    "build": "npm run build"
  }
}
```

## 📊 Métricas de Testing MCP

### Métricas de Lectura

- **Precisión**: ¿MCP lee correctamente?
- **Completitud**: ¿MCP accede a todos los archivos necesarios?
- **Performance**: ¿Cuánto tiempo tarda en leer?

### Métricas de Análisis

- **Identificación de Bugs**: % de bugs encontrados
- **False Positives**: % de bugs reportados que no son bugs
- **Relevancia de Sugerencias**: Calidad de las mejoras sugeridas

### Métricas de Generación

- **Sintaxis Correcta**: % de código generado que compila
- **Tests que Pasan**: % de tests generados que pasan
- **Cobertura Añadida**: % de cobertura incrementada

## 🔐 Seguridad y Permisos

### Permisos Requeridos

```json
{
  "permissions": {
    "read": ["src/**", "package.json", "tsconfig.json", "coverage/**"],
    "write": ["src/__tests__/**"],
    "execute": ["npm test", "npm run build", "npm run lint"]
  }
}
```

### Restricciones

- ❌ No modificar archivos fuera de `src/__tests__/`
- ❌ No ejecutar comandos arbitrarios del sistema
- ❌ No acceder a archivos sensibles (.env, .git/config)

## 🎯 Casos de Uso Específicos

### Caso 1: Asistente de Testing

**Flujo:**
1. Usuario pide: "Mejora la cobertura al 90%"
2. MCP lee cobertura actual
3. MCP identifica métodos sin tests
4. MCP genera tests necesarios
5. MCP ejecuta tests para verificar

**Contexto MCP necesario:**
- `coverage/coverage-summary.json`
- `src/**/*.ts`
- `src/__tests__/**/*.test.ts`
- `jest.config.js`

### Caso 2: Code Reviewer

**Flujo:**
1. Usuario pide: "Revisa los cambios en calculator.ts"
2. MCP lee el archivo
3. MCP busca bugs y code smells
4. MCP compara con tests existentes
5. MCP proporciona feedback

**Contexto MCP necesario:**
- Archivo objetivo
- Tests relacionados
- Estándares de código (`.eslintrc.json`)
- Histórico de bugs similares

### Caso 3: Asistente de Refactoring

**Flujo:**
1. Usuario pide: "Refactoriza la clase Calculator"
2. MCP analiza la clase
3. MCP identifica oportunidades
4. MCP propone cambios
5. MCP verifica que tests sigan pasando

**Contexto MCP necesario:**
- Clase completa
- Todos los tests
- Usos de la clase en el proyecto

## 📝 Logs y Debugging

### Log de Contexto Accedido

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "context_accessed": [
    {
      "type": "file",
      "path": "src/calculator.ts",
      "size": 2405,
      "read_time_ms": 12
    },
    {
      "type": "file",
      "path": "coverage/coverage-summary.json",
      "size": 1024,
      "read_time_ms": 8
    }
  ]
}
```

### Log de Comandos Ejecutados

```json
{
  "timestamp": "2024-01-15T10:31:00Z",
  "command_executed": {
    "command": "npm test",
    "exit_code": 0,
    "execution_time_ms": 3450,
    "stdout_lines": 45,
    "stderr_lines": 0
  }
}
```

## 🧩 Integración con Herramientas

### GitHub Actions

MCP puede integrarse con GitHub Actions para:
- Análisis de PRs
- Generación automática de tests
- Code review automatizado

### VS Code

MCP puede proporcionar:
- IntelliSense mejorado
- Sugerencias contextuales
- Refactoring automático

### CLI Tools

```bash
# Ejecutar análisis MCP
mcp analyze --target src/calculator.ts

# Generar tests con MCP
mcp generate-tests --coverage-target 90

# Review con MCP
mcp review --files src/**/*.ts
```

## 📚 Referencias

- [MCP Specification](https://modelcontextprotocol.io/)
- [GitHub Copilot Context](https://github.com/features/copilot)
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling)

## 🎓 Ejercicios Prácticos

### Ejercicio 1: Context Loading
Implementa un script que cargue todo el contexto necesario para MCP

### Ejercicio 2: Coverage Analysis
Crea un parser de coverage reports compatible con MCP

### Ejercicio 3: Code Generation
Implementa generación de tests usando MCP context

### Ejercicio 4: Multi-file Refactoring
Usa MCP para refactorizar múltiples archivos manteniendo consistencia

---

**Nota:** Esta guía asume familiaridad con el Model Context Protocol. Consulta la especificación oficial para detalles de implementación. 🚀

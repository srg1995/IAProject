# Guía de Testing con Agentes de IA

Esta guía te ayudará a probar diferentes capacidades de los agentes de IA con este proyecto.

## 📋 Tabla de Contenidos

1. [Revisión de Código](#revisión-de-código)
2. [Generación de Tests](#generación-de-tests)
3. [Detección de Bugs](#detección-de-bugs)
4. [Mejora de Cobertura](#mejora-de-cobertura)
5. [Refactoring](#refactoring)
6. [Generación de PRs](#generación-de-prs)

## 🔍 Revisión de Código

### Prompt Básico
```
Por favor, revisa el código en src/calculator.ts y proporciona feedback sobre:
- Bugs potenciales
- Mejoras de rendimiento
- Mejores prácticas
- Problemas de seguridad
```

### Qué Esperar
La IA debería identificar:
- ✅ Bug en `factorial()` con números negativos
- ✅ Falta de validación en algunos métodos
- ✅ Oportunidades de optimización

### Prompt Avanzado
```
Analiza todo el código en src/ y proporciona un informe detallado con:
1. Bugs críticos
2. Código smell
3. Violaciones de principios SOLID
4. Sugerencias de refactoring
```

## 🧪 Generación de Tests

### Completar Cobertura Básica

**Prompt:**
```
El proyecto tiene aproximadamente 70% de cobertura. Analiza coverage/coverage-summary.json
y genera tests para los métodos no cubiertos.
```

**Archivos a generar:**
- Tests para `Calculator.factorial()` y `Calculator.isPrime()`
- Tests para `StringUtils.countVowels()`, `truncate()`, `removeWhitespace()`
- Tests para `ArrayUtils.removeDuplicates()`, `chunk()`, `flatten()`

### Tests de Edge Cases

**Prompt:**
```
Genera tests exhaustivos que cubran edge cases para:
- src/calculator.ts: números negativos, cero, números muy grandes
- src/stringUtils.ts: strings vacíos, caracteres especiales, Unicode
- src/arrayUtils.ts: arrays vacíos, arrays con un elemento, arrays grandes
```

### Tests de Integración

**Prompt:**
```
Crea tests de integración que verifiquen la interacción entre
Calculator, StringUtils y ArrayUtils
```

## 🐛 Detección de Bugs

### Bug 1: Calculator.factorial()

**Descripción:** No maneja números negativos

**Prompt para detectar:**
```
Analiza el método factorial() en src/calculator.ts y encuentra el bug
```

**Prompt para corregir:**
```
Corrige el bug en Calculator.factorial() añadiendo validación para números negativos
y genera un test que verifique el fix
```

### Bug 2: StringUtils.removeWhitespace()

**Descripción:** Solo elimina espacios, no tabs ni newlines

**Prompt para detectar:**
```
Revisa StringUtils.removeWhitespace() y encuentra el problema con diferentes
tipos de whitespace
```

**Prompt para corregir:**
```
Corrige removeWhitespace() para que maneje todos los tipos de whitespace
(\t, \n, \r, etc.) y añade tests apropiados
```

### Bug 3: ArrayUtils.flatten()

**Descripción:** Solo aplana un nivel

**Prompt para detectar:**
```
Analiza ArrayUtils.flatten() con arrays anidados profundamente
```

**Prompt para corregir:**
```
Implementa flatten() recursivamente para aplanar arrays de cualquier profundidad
```

## 📊 Mejora de Cobertura

### Ver Cobertura Actual

```bash
npm run test:coverage
```

Revisa: `coverage/index.html`

### Prompt para Alcanzar 90%

```
La cobertura actual es ~70%. Genera tests adicionales para alcanzar 90% de cobertura.
Prioriza:
1. Métodos completamente sin tests
2. Branches no cubiertos
3. Edge cases
```

### Prompt para 100% de Cobertura

```
Analiza el reporte de cobertura y genera tests para alcanzar 100% en:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage
```

## 🔨 Refactoring

### Mejora de Código

**Prompt:**
```
Refactoriza las clases en src/ siguiendo estas guías:
1. Principios SOLID
2. DRY (Don't Repeat Yourself)
3. KISS (Keep It Simple, Stupid)
4. Mejor manejo de errores
5. Añadir validación de inputs
```

### Añadir Type Safety

**Prompt:**
```
Mejora la type safety del código:
1. Elimina uso de 'any'
2. Añade tipos más específicos
3. Usa tipos genéricos donde sea apropiado
4. Añade type guards
```

### Mejorar Documentación

**Prompt:**
```
Mejora la documentación JSDoc de todas las funciones:
1. Añade ejemplos de uso
2. Documenta excepciones
3. Añade @see referencias
4. Incluye complejidad algorítmica donde sea relevante
```

## 🔄 Generación de PRs

### PR para Fix de Bug

**Prompt:**
```
Crea un pull request que:
1. Título: "Fix: Corregir bug en Calculator.factorial() con números negativos"
2. Descripción: Explica el bug, la solución y los tests añadidos
3. Cambios: Código corregido + tests
4. Labels: bug, enhancement
```

### PR para Mejora de Cobertura

**Prompt:**
```
Crea un PR que mejore la cobertura de tests de 70% a 90%:
1. Título: "Test: Aumentar cobertura a 90%"
2. Descripción: Lista de tests añadidos
3. Incluye screenshot del reporte de cobertura
```

### PR para Refactoring

**Prompt:**
```
Crea un PR de refactoring:
1. Título: "Refactor: Mejorar structure de clases utilities"
2. Descripción: Cambios realizados y razones
3. Asegura que todos los tests pasen
4. No cambiar comportamiento externo
```

## 🎯 Escenarios Avanzados

### Escenario 1: Code Smell Detection

**Prompt:**
```
Analiza el código buscando code smells:
- God objects
- Long methods
- Duplicate code
- Feature envy
- Data clumps

Proporciona un plan de refactoring para cada uno encontrado.
```

### Escenario 2: Performance Optimization

**Prompt:**
```
Identifica cuellos de botella de rendimiento en el código.
Sugiere optimizaciones y genera benchmarks para verificarlas.
```

### Escenario 3: Security Audit

**Prompt:**
```
Realiza un audit de seguridad del código:
- Input validation
- Error handling
- Resource management
- Potential vulnerabilities

Proporciona un reporte con prioridades.
```

### Escenario 4: Migration Plan

**Prompt:**
```
Crea un plan de migración para actualizar el proyecto a:
- Node.js 22
- TypeScript 5.4
- Jest 30

Incluye:
- Cambios necesarios
- Breaking changes
- Tests de regresión
```

## 📝 Template de Issue

Cuando encuentres problemas, usa este template:

```markdown
## 🐛 Bug Report / 💡 Feature Request

**Descripción:**
[Descripción clara del problema o mejora]

**Código Actual:**
```typescript
// código con problema
```

**Código Esperado:**
```typescript
// código corregido
```

**Tests:**
- [ ] Tests añadidos
- [ ] Tests pasan
- [ ] Cobertura mantenida/mejorada

**Checklist:**
- [ ] Código revisado
- [ ] Tests añadidos
- [ ] Documentación actualizada
- [ ] CHANGELOG actualizado
```

## 🚀 Quick Commands

Comandos rápidos para diferentes escenarios:

```bash
# Ejecutar tests y ver cobertura
npm run test:coverage && open coverage/index.html

# Ejecutar linting
npm run lint

# Fix automático de linting
npm run lint:fix

# Build y test completo
npm run build && npm test

# Ejecutar aplicación
npm start
```

## 📚 Recursos Adicionales

- [Jest Documentation](https://jestjs.io/)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Tip:** Experimenta con diferentes prompts y ve qué funciona mejor con tu agente de IA. Cada modelo puede responder de manera diferente! 🎨

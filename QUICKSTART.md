# Quick Start Guide for AI Agents

Esta guía rápida está diseñada para que agentes de IA puedan comenzar a trabajar inmediatamente con este proyecto.

## 🎯 Objetivo del Proyecto

Este es un proyecto de **prueba y aprendizaje** diseñado específicamente para probar capacidades de IA en:
- Code reviews
- Generación de tests
- Mejora de cobertura
- Detección de bugs
- Refactoring
- Generación de pull requests

## 📊 Estado Actual

### Cobertura de Tests
```
Current Coverage: ~29%
Target Coverage: 70-90%

File Coverage:
- calculator.ts: 44% statements (bugs en factorial y isPrime sin tests)
- stringUtils.ts: 41% statements (countVowels, truncate, removeWhitespace sin tests)
- arrayUtils.ts: 50% statements (removeDuplicates, chunk, flatten sin tests)
- index.ts: 0% statements (archivo de demostración)
```

### Bugs Conocidos (Intencionales)

1. **Calculator.factorial()** - Línea 80
   - No valida números negativos
   - Causará stack overflow con n < 0

2. **StringUtils.removeWhitespace()** - Línea 65
   - Solo elimina espacios (` `)
   - No elimina tabs (`\t`), newlines (`\n`), etc.

3. **ArrayUtils.flatten()** - Línea 68
   - Solo aplana un nivel
   - No funciona recursivamente

## 🚀 Comandos Rápidos

```bash
# Ver cobertura actual
npm run test:coverage

# Ejecutar tests
npm test

# Linting
npm run lint

# Build
npm run build

# Ejecutar aplicación
npm start
```

## 🎯 Tareas Sugeridas para AI

### Prioridad Alta: Tests Faltantes

Generar tests para métodos sin cobertura:

**Calculator:**
```typescript
// src/__tests__/calculator.test.ts
describe('factorial', () => {
  it('should calculate factorial of positive numbers', () => {
    // TODO: Test factorial(5) = 120
  });
  
  it('should handle negative numbers', () => {
    // TODO: Test factorial(-1) throws error
  });
});

describe('isPrime', () => {
  it('should identify prime numbers', () => {
    // TODO: Test isPrime(17) = true
  });
  
  it('should identify non-prime numbers', () => {
    // TODO: Test isPrime(4) = false
  });
});
```

**StringUtils:**
```typescript
// src/__tests__/stringUtils.test.ts
describe('countVowels', () => {
  // TODO: Test countVowels('beautiful') = 5
});

describe('truncate', () => {
  // TODO: Test truncate with short and long strings
});

describe('removeWhitespace', () => {
  // TODO: Test with spaces, tabs, newlines
});
```

**ArrayUtils:**
```typescript
// src/__tests__/arrayUtils.test.ts
describe('removeDuplicates', () => {
  // TODO: Test [1,2,2,3] -> [1,2,3]
});

describe('chunk', () => {
  // TODO: Test chunk([1,2,3,4], 2) -> [[1,2],[3,4]]
});

describe('flatten', () => {
  // TODO: Test nested arrays
});
```

### Prioridad Alta: Corrección de Bugs

**Bug 1: Calculator.factorial()**
```typescript
// Current (buggy):
factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * this.factorial(n - 1);
}

// Fix needed:
// 1. Add validation for negative numbers
// 2. Throw error if n < 0
// 3. Add test for negative input
```

**Bug 2: StringUtils.removeWhitespace()**
```typescript
// Current (buggy):
removeWhitespace(str: string): string {
  return str.replace(/ /g, '');
}

// Fix needed:
// Use /\s/g instead of / /g to handle all whitespace
```

**Bug 3: ArrayUtils.flatten()**
```typescript
// Current (buggy):
flatten<T>(arr: T[][]): T[] {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

// Fix needed:
// Implement recursive flattening for deeply nested arrays
```

### Prioridad Media: Mejoras

1. **Añadir validación de inputs**
   - Validar que arrays no sean null/undefined
   - Validar que strings no sean null/undefined
   - Añadir tipos más específicos

2. **Mejorar manejo de errores**
   - Errores más descriptivos
   - Error codes
   - Error types personalizados

3. **Optimizaciones**
   - Mejorar performance de isPrime
   - Caché para factorial
   - Algoritmos más eficientes

### Prioridad Baja: Refactoring

1. **Extraer constantes**
   - Magic numbers
   - Strings repetidos
   - Configuraciones

2. **Añadir patrones de diseño**
   - Factory para utilities
   - Strategy para diferentes implementaciones
   - Builder para configuración

## 📝 Formato de PR Sugerido

```markdown
## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Mejora de tests
- [ ] Refactoring
- [ ] Documentación

## Descripción
[Descripción clara de los cambios]

## Tests
- [ ] Tests añadidos/actualizados
- [ ] Todos los tests pasan
- [ ] Cobertura mejorada/mantenida

## Cobertura
Antes: X%
Después: Y%

## Checklist
- [ ] Código revisado
- [ ] Tests pasan
- [ ] Linting pasa
- [ ] Build exitoso
- [ ] Documentación actualizada
```

## 🔍 Análisis Rápido de Cobertura

Para identificar rápidamente qué necesita tests:

```bash
# Generar reporte HTML
npm run test:coverage

# Ver resumen JSON
cat coverage/coverage-summary.json | jq

# Líneas específicas sin cobertura
grep "Uncovered Line" coverage/*.html
```

## 💡 Tips para AI Agents

1. **Empezar con tests simples**: Tests básicos antes de edge cases
2. **Un método a la vez**: No intentar cubrir todo de una vez
3. **Verificar después de cada cambio**: `npm test` después de cada nuevo test
4. **Mantener el estilo**: Seguir el patrón de tests existentes
5. **Documentar decisiones**: Comentar por qué se hacen ciertos tests

## 🎓 Recursos del Proyecto

- **README.md**: Documentación general completa
- **docs/AI-TESTING-GUIDE.md**: Guía detallada de testing con IA
- **docs/MCP-GUIDE.md**: Guía de Model Context Protocol
- **coverage/index.html**: Reporte visual de cobertura

## 🚦 Métricas de Éxito

Para considerar la tarea completada:

✅ Cobertura total > 80%
✅ Todos los bugs conocidos corregidos
✅ Todos los tests pasan
✅ Linting sin errores
✅ Build exitoso
✅ Documentación actualizada

## 📞 Necesitas Ayuda?

Si como agente de IA encuentras algo confuso:
1. Revisa la documentación existente
2. Analiza los tests existentes como ejemplos
3. Ejecuta `npm test` para ver el estado actual
4. Verifica `coverage/index.html` para gaps específicos

---

**Recuerda**: Este proyecto fue diseñado con bugs y gaps intencionales. ¡Encontrarlos y corregirlos es parte del propósito! 🎯

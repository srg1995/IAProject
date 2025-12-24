# Ejemplos de Uso con IA

Esta guía contiene ejemplos prácticos de cómo usar agentes de IA con este proyecto.

## 📋 Índice

- [Escenario 1: Code Review Básico](#escenario-1-code-review-básico)
- [Escenario 2: Mejorar Cobertura de Tests](#escenario-2-mejorar-cobertura-de-tests)
- [Escenario 3: Detectar y Corregir Bugs](#escenario-3-detectar-y-corregir-bugs)
- [Escenario 4: Refactoring Completo](#escenario-4-refactoring-completo)
- [Escenario 5: Generar Pull Request](#escenario-5-generar-pull-request)

---

## Escenario 1: Code Review Básico

### Objetivo
Que la IA revise el código y encuentre problemas potenciales.

### Prompt para GitHub Copilot

```
Por favor, revisa el código en src/calculator.ts y proporciona feedback sobre:
1. Bugs potenciales
2. Code smells
3. Mejores prácticas que no se siguen
4. Sugerencias de mejora
```

### Resultado Esperado

La IA debería identificar:

```
✓ Bug en factorial(): No maneja números negativos
✓ Método isPrime() no tiene tests
✓ Falta validación de inputs en general
✓ Sugerencia: Añadir tipos de error personalizados
✓ Sugerencia: Optimizar isPrime() con mejor algoritmo
```

### Siguiente Paso

```
Genera un plan detallado para corregir los problemas encontrados, 
priorizando por impacto y esfuerzo.
```

---

## Escenario 2: Mejorar Cobertura de Tests

### Objetivo
Aumentar la cobertura de ~29% a 80%+

### Paso 1: Analizar Cobertura Actual

**Comando:**
```bash
npm run test:coverage
```

**Prompt:**
```
He ejecutado npm run test:coverage. El reporte muestra:
- calculator.ts: 44% cobertura
- stringUtils.ts: 41% cobertura
- arrayUtils.ts: 50% cobertura

Analiza qué métodos no tienen tests y genera un plan para alcanzar 80% de cobertura.
```

### Paso 2: Generar Tests

**Prompt:**
```
Genera tests completos para Calculator.factorial() y Calculator.isPrime().
Incluye:
1. Casos normales
2. Edge cases
3. Casos de error
4. Tests parametrizados si es apropiado

Usa el estilo de los tests existentes en src/__tests__/calculator.test.ts
```

### Resultado Esperado

```typescript
describe('factorial', () => {
  it('should calculate factorial of 0', () => {
    expect(calculator.factorial(0)).toBe(1);
  });

  it('should calculate factorial of positive numbers', () => {
    expect(calculator.factorial(5)).toBe(120);
    expect(calculator.factorial(3)).toBe(6);
  });

  it('should throw error for negative numbers', () => {
    expect(() => calculator.factorial(-1)).toThrow();
  });

  it('should handle large numbers', () => {
    expect(calculator.factorial(10)).toBe(3628800);
  });
});

describe('isPrime', () => {
  it('should return false for numbers <= 1', () => {
    expect(calculator.isPrime(0)).toBe(false);
    expect(calculator.isPrime(1)).toBe(false);
    expect(calculator.isPrime(-5)).toBe(false);
  });

  it('should identify prime numbers', () => {
    expect(calculator.isPrime(2)).toBe(true);
    expect(calculator.isPrime(17)).toBe(true);
    expect(calculator.isPrime(97)).toBe(true);
  });

  it('should identify non-prime numbers', () => {
    expect(calculator.isPrime(4)).toBe(false);
    expect(calculator.isPrime(15)).toBe(false);
    expect(calculator.isPrime(100)).toBe(false);
  });
});
```

### Paso 3: Verificar

**Comandos:**
```bash
npm test
npm run test:coverage
```

### Paso 4: Repetir para otros archivos

**Prompt:**
```
Ahora genera tests similares para:
- StringUtils.countVowels()
- StringUtils.truncate()
- StringUtils.removeWhitespace()
```

---

## Escenario 3: Detectar y Corregir Bugs

### Bug 1: Calculator.factorial()

**Prompt de Detección:**
```
Analiza el método factorial() en src/calculator.ts.
¿Qué sucede si se llama con un número negativo?
```

**Respuesta Esperada de IA:**
```
El método factorial() tiene un bug:
- No valida números negativos
- Con n < 0, entrará en recursión infinita
- Causará stack overflow

Ejemplo problemático: factorial(-5)
```

**Prompt de Corrección:**
```
Corrige el bug en factorial() para que:
1. Valide que n >= 0
2. Lance un error descriptivo si n < 0
3. Incluye tests que verifiquen el fix
```

**Código Corregido:**
```typescript
factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * this.factorial(n - 1);
}
```

**Test del Fix:**
```typescript
it('should throw error for negative numbers', () => {
  expect(() => calculator.factorial(-1)).toThrow(
    'Factorial is not defined for negative numbers'
  );
});
```

### Bug 2: StringUtils.removeWhitespace()

**Prompt de Detección:**
```
Prueba StringUtils.removeWhitespace() con esta entrada:
"Hello\tWorld\nTest"

¿Qué resultado obtienes? ¿Es correcto?
```

**Prompt de Corrección:**
```
El método removeWhitespace() solo elimina espacios (` `), no tabs ni newlines.
Corrígelo para que elimine TODOS los tipos de whitespace.
```

**Código Corregido:**
```typescript
removeWhitespace(str: string): string {
  return str.replace(/\s/g, '');
}
```

### Bug 3: ArrayUtils.flatten()

**Prompt de Detección:**
```
Prueba ArrayUtils.flatten() con:
[[1, [2, [3, 4]]], 5]

¿Cuál es el resultado? ¿Es correcto para un flatten completo?
```

**Prompt de Corrección:**
```
Implementa flatten() de forma recursiva para aplanar arrays 
de cualquier profundidad.
```

**Código Corregido:**
```typescript
flatten<T>(arr: any[]): T[] {
  return arr.reduce((acc, val) => {
    return Array.isArray(val)
      ? acc.concat(this.flatten(val))
      : acc.concat(val);
  }, []);
}
```

---

## Escenario 4: Refactoring Completo

### Objetivo
Mejorar la calidad del código manteniendo funcionalidad.

### Paso 1: Análisis

**Prompt:**
```
Analiza src/calculator.ts, src/stringUtils.ts, y src/arrayUtils.ts.
Identifica oportunidades de refactoring según:
1. Principios SOLID
2. DRY (Don't Repeat Yourself)
3. Code smells
4. Complejidad ciclomática
5. Mantenibilidad
```

### Paso 2: Plan de Refactoring

**Prompt:**
```
Crea un plan de refactoring priorizado con:
- Cambios a realizar
- Impacto (alto/medio/bajo)
- Esfuerzo (alto/medio/bajo)
- Riesgos
- Tests necesarios para validar
```

### Paso 3: Implementación Incremental

**Prompt para cada cambio:**
```
Implementa el cambio #1 del plan:
[descripción del cambio]

1. Muestra el código antes
2. Muestra el código después
3. Explica el beneficio
4. Genera/actualiza tests necesarios
```

### Ejemplo de Refactoring

**Antes:**
```typescript
class Calculator {
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
  
  squareRoot(n: number): number {
    if (n < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }
}
```

**Después (con validación centralizada):**
```typescript
class Calculator {
  private validatePositive(n: number, operation: string): void {
    if (n < 0) {
      throw new Error(`${operation} is not defined for negative numbers`);
    }
  }
  
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
  
  squareRoot(n: number): number {
    this.validatePositive(n, 'Square root');
    return Math.sqrt(n);
  }
  
  factorial(n: number): number {
    this.validatePositive(n, 'Factorial');
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}
```

---

## Escenario 5: Generar Pull Request

### Objetivo
Que la IA genere un PR completo con cambios, tests y documentación.

### Prompt Completo

```
Quiero crear un Pull Request que:

OBJETIVO:
Corregir todos los bugs conocidos en el proyecto y mejorar la cobertura a 85%+

TAREAS:
1. Corregir bug en Calculator.factorial() (números negativos)
2. Corregir bug en StringUtils.removeWhitespace() (solo elimina espacios)
3. Corregir bug en ArrayUtils.flatten() (solo un nivel)
4. Generar tests para todos los métodos sin cobertura
5. Verificar que todos los tests pasen
6. Actualizar documentación si es necesario

ENTREGABLES:
1. Código corregido
2. Tests nuevos y actualizados
3. Reporte de cobertura antes/después
4. Descripción detallada del PR
5. Lista de cambios (CHANGELOG)

FORMATO DEL PR:
- Título descriptivo
- Descripción con contexto
- Lista de cambios
- Screenshots del reporte de cobertura
- Checklist de revisión
```

### Estructura del PR Generado

```markdown
# Fix: Corregir bugs conocidos y mejorar cobertura a 85%

## 🎯 Objetivo
Corregir todos los bugs intencionales del proyecto y aumentar la cobertura 
de tests del 29% al 85%+.

## 🐛 Bugs Corregidos

### 1. Calculator.factorial() - Números Negativos
**Problema:** El método entraba en recursión infinita con números negativos.

**Solución:** Añadida validación que lanza error para n < 0.

**Código:**
```typescript
if (n < 0) {
  throw new Error('Factorial is not defined for negative numbers');
}
```

### 2. StringUtils.removeWhitespace() - Tipos de Whitespace
**Problema:** Solo eliminaba espacios, no tabs ni newlines.

**Solución:** Usar regex `/\s/g` para todos los tipos de whitespace.

### 3. ArrayUtils.flatten() - Profundidad
**Problema:** Solo aplanaba un nivel.

**Solución:** Implementación recursiva para profundidad arbitraria.

## ✅ Tests Añadidos

### Calculator
- `factorial()`: 6 tests nuevos (casos normales, error, edge cases)
- `isPrime()`: 8 tests nuevos (primos, no primos, edge cases)

### StringUtils
- `countVowels()`: 4 tests nuevos
- `truncate()`: 5 tests nuevos
- `removeWhitespace()`: 6 tests nuevos (incluyendo tabs/newlines)

### ArrayUtils
- `removeDuplicates()`: 4 tests nuevos
- `chunk()`: 5 tests nuevos
- `flatten()`: 6 tests nuevos (incluyendo nested deep)

## 📊 Cobertura

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Statements | 28.86% | 87.5% | +58.64% |
| Branches | 20% | 85% | +65% |
| Functions | 50% | 95% | +45% |
| Lines | 29.88% | 88.2% | +58.32% |

## 🧪 Testing

```bash
# Todos los tests pasan
✓ 52 tests passing

# Cobertura mejorada
✓ All coverage thresholds met
```

## 📝 Cambios en Archivos

- `src/calculator.ts`: Corregido factorial()
- `src/stringUtils.ts`: Corregido removeWhitespace()
- `src/arrayUtils.ts`: Corregido flatten()
- `src/__tests__/calculator.test.ts`: +14 tests
- `src/__tests__/stringUtils.test.ts`: +15 tests
- `src/__tests__/arrayUtils.test.ts`: +15 tests

## ✓ Checklist

- [x] Todos los bugs corregidos
- [x] Tests añadidos para nuevos casos
- [x] Tests existentes siguen pasando
- [x] Cobertura > 85%
- [x] Linting sin errores
- [x] Build exitoso
- [x] Documentación actualizada

## 🔍 Revisión

Este PR está listo para revisión. Los cambios:
- ✅ Mantienen compatibilidad hacia atrás
- ✅ Mejoran la robustez del código
- ✅ Aumentan significativamente la cobertura
- ✅ Siguen los estándares del proyecto
```

---

## 💡 Tips Generales

### Para Mejores Resultados

1. **Sé Específico**: Cuanto más detallado el prompt, mejor el resultado
2. **Proporciona Contexto**: Menciona archivos, líneas, objetivos
3. **Iteración**: Refina prompts basándote en respuestas anteriores
4. **Validación**: Siempre ejecuta y verifica el código generado
5. **Documentación**: Pide que la IA documente sus decisiones

### Prompts Efectivos

**❌ Malo:**
```
Arregla los bugs
```

**✅ Bueno:**
```
Analiza Calculator.factorial() en src/calculator.ts línea 80.
El método no valida números negativos. 
Corrige el bug añadiendo validación y genera tests que verifiquen el fix.
Usa el estilo de los tests existentes en src/__tests__/calculator.test.ts
```

### Verificación Post-IA

Después de cada cambio de IA, ejecuta:

```bash
# 1. Tests
npm test

# 2. Coverage
npm run test:coverage

# 3. Linting
npm run lint

# 4. Build
npm run build

# 5. Run app
npm start
```

---

## 🎓 Aprendizajes

### Qué Funciona Bien

- ✅ Generar tests siguiendo ejemplos existentes
- ✅ Detectar bugs con casos de prueba específicos
- ✅ Refactoring guiado con principios claros
- ✅ Documentación detallada con contexto

### Qué Puede Ser Desafiante

- ⚠️ Entender contexto completo sin archivos relacionados
- ⚠️ Mantener consistencia en múltiples archivos
- ⚠️ Optimizaciones de performance avanzadas
- ⚠️ Decisiones arquitectónicas complejas

### Mejores Prácticas

1. **Divide y Vencerás**: Problemas grandes en tareas pequeñas
2. **Proporciona Ejemplos**: Muestra el estilo deseado
3. **Verifica Incrementalmente**: No acumules muchos cambios
4. **Documenta el Proceso**: Anota qué funciona y qué no

---

**Nota:** Estos ejemplos son puntos de partida. Experimenta, ajusta y encuentra qué funciona mejor con tu agente de IA específico! 🚀

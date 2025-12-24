# Contributing Guide

¡Gracias por tu interés en contribuir a este proyecto de pruebas de IA!

## 🎯 Filosofía del Proyecto

Este proyecto es **intencionalmente imperfecto** para propósitos educativos. Los "bugs" y gaps de cobertura son características diseñadas para probar capacidades de IA.

## 🤝 Tipos de Contribuciones Bienvenidas

### ✅ Contribuciones Bienvenidas

1. **Nuevos Ejemplos de Código**
   - Clases adicionales con bugs intencionales
   - Diferentes patrones de código para revisar
   - Casos de uso más complejos

2. **Nuevos Escenarios de Testing**
   - Tests de integración más complejos
   - Nuevos tipos de bugs para detectar
   - Casos edge más interesantes

3. **Documentación Mejorada**
   - Nuevas guías de testing
   - Ejemplos de prompts efectivos
   - Resultados de experimentos con IA

4. **Herramientas Adicionales**
   - Scripts de análisis
   - Generadores de reportes
   - Integraciones con nuevas herramientas

### ❌ Contribuciones NO Recomendadas

1. **"Arreglar" todos los bugs**
   - Los bugs son intencionales para testing
   - Solo corrige bugs si estás documentando el proceso

2. **Completar 100% de cobertura**
   - Los gaps son para que la IA los complete
   - Documenta el proceso si añades tests

3. **Cambiar el propósito del proyecto**
   - Este es un proyecto de aprendizaje, no producción

## 📋 Proceso de Contribución

### 1. Fork y Clone

```bash
# Fork en GitHub
# Luego:
git clone https://github.com/TU_USUARIO/IAProject.git
cd IAProject
npm install
```

### 2. Crear una Rama

```bash
git checkout -b feature/mi-nueva-funcionalidad
# o
git checkout -b docs/mejorar-documentacion
# o
git checkout -b test/nuevos-escenarios
```

### 3. Hacer Cambios

Sigue estas guías:

**Para código nuevo:**
- Incluye bugs intencionales (y documéntalos)
- Deja algunos métodos sin tests
- Añade comentarios explicando el propósito

**Para tests:**
- NO completes toda la cobertura
- Deja gaps intencionales
- Documenta qué falta

**Para documentación:**
- Usa ejemplos claros
- Incluye prompts reales que funcionan
- Comparte resultados de experimentos

### 4. Verificar

```bash
# Tests
npm test

# Linting
npm run lint

# Build
npm run build
```

### 5. Commit

Usa conventional commits:

```bash
git commit -m "feat: añadir clase para manejo de fechas con bugs"
git commit -m "docs: agregar guía de testing con Claude"
git commit -m "test: añadir escenario de refactoring complejo"
```

Tipos de commit:
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug (solo bugs no intencionales)
- `docs:` - Documentación
- `test:` - Tests
- `refactor:` - Refactoring
- `chore:` - Tareas de mantenimiento

### 6. Push y PR

```bash
git push origin feature/mi-nueva-funcionalidad
```

Luego crea un Pull Request en GitHub.

## 📝 Template de Pull Request

```markdown
## Tipo de Contribución
- [ ] Nuevo código de ejemplo
- [ ] Nuevos escenarios de testing
- [ ] Documentación
- [ ] Herramientas
- [ ] Otro: _____

## Descripción
[Descripción clara de la contribución]

## Propósito Educativo
[Cómo ayuda esto a probar capacidades de IA?]

## Bugs/Gaps Intencionales
[Lista de imperfecciones intencionales incluidas]

## Testing
- [ ] Tests añadidos (si aplica)
- [ ] Coverage gaps documentados
- [ ] Builds pasan

## Checklist
- [ ] Código sigue el estilo del proyecto
- [ ] Documentación actualizada
- [ ] Bugs intencionales documentados
- [ ] Propósito educativo claro
```

## 🎨 Estándares de Código

### TypeScript

```typescript
// ✅ Bueno: Incluir tipos explícitos
function calculate(a: number, b: number): number {
  return a + b;
}

// ✅ Bueno: Documentación JSDoc
/**
 * Calcula el promedio de un array
 * Bug intencional: no valida array vacío
 * @param numbers Array de números
 * @returns Promedio
 */
function average(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}

// ❌ Malo: Falta documentación del bug intencional
function divide(a: number, b: number): number {
  return a / b; // Bug no documentado
}
```

### Tests

```typescript
// ✅ Bueno: Tests claros con gaps documentados
describe('MiClase', () => {
  it('should handle basic case', () => {
    expect(myClass.method(1)).toBe(2);
  });
  
  // Note: edge cases NOT tested intentionally
  // for AI to complete
});

// ❌ Malo: 100% coverage sin dejar gaps
describe('MiClase', () => {
  // Tests para todos los casos... (no dejar trabajo para IA)
});
```

### Documentación

```markdown
<!-- ✅ Bueno: Incluir propósito y contexto -->
# Nueva Funcionalidad

Esta clase demuestra X patrón con Y bug intencional.

## Bugs Intencionales
1. No valida input null
2. Método Z no tiene tests

## Uso con IA
Prompt sugerido: "Detecta y corrige bugs en..."

<!-- ❌ Malo: Solo código sin contexto -->
# Nueva Clase
[código]
```

## 🧪 Ideas para Nuevas Contribuciones

### Nuevas Clases Sugeridas

1. **DateUtils** - Manejo de fechas con bugs de timezone
2. **FileHandler** - I/O con errores de manejo de recursos
3. **APIClient** - Llamadas HTTP con falta de error handling
4. **Validator** - Validaciones con casos edge sin cubrir
5. **Parser** - Parsing de JSON/XML con bugs sutiles

### Nuevos Escenarios de Testing

1. **Async Operations** - Promesas y async/await
2. **Error Recovery** - Manejo robusto de errores
3. **Performance** - Código con cuellos de botella
4. **Security** - Vulnerabilidades comunes
5. **Concurrency** - Race conditions y deadlocks

### Nuevas Guías

1. **Testing con GPT-4** - Resultados y prompts efectivos
2. **Testing con Claude** - Comparativa de capacidades
3. **Testing con Copilot** - Integración en VS Code
4. **MCP en Producción** - Casos de uso reales
5. **Métricas de IA** - Cómo medir efectividad

## 🔍 Revisión de PRs

Los PRs serán revisados considerando:

1. **Valor Educativo**: ¿Enseña algo útil?
2. **Claridad**: ¿Es fácil de entender?
3. **Documentación**: ¿Está bien documentado?
4. **Bugs Intencionales**: ¿Están claramente marcados?
5. **Consistencia**: ¿Sigue el estilo del proyecto?

## 📚 Recursos

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Jest Documentation](https://jestjs.io/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Writing Good Prompts](https://platform.openai.com/docs/guides/prompt-engineering)

## 💬 Comunicación

- **Issues**: Para proponer nuevas ideas o reportar problemas
- **Discussions**: Para preguntas generales y discusiones
- **PRs**: Para contribuciones de código/documentación

## 🎓 Experimentación

Este proyecto es un sandbox para experimentar. Siéntete libre de:

- Probar nuevos patrones de código
- Experimentar con diferentes tipos de bugs
- Documentar qué funciona y qué no con IA
- Compartir hallazgos interesantes

## 📊 Compartir Resultados

Si experimentas con IA en este proyecto, considera compartir:

1. **Prompts Efectivos**: Qué funcionó bien
2. **Limitaciones Encontradas**: Qué no funcionó
3. **Comparativas**: Diferencias entre modelos
4. **Casos Sorprendentes**: Resultados inesperados

## 🙏 Reconocimientos

Las contribuciones serán reconocidas en:
- README.md
- Changelog (si implementamos uno)
- Commits (co-authored-by)

## ❓ Preguntas?

Si tienes preguntas sobre cómo contribuir:
1. Revisa la documentación existente
2. Busca en issues cerrados
3. Abre un nuevo issue con tu pregunta

---

**Recuerda**: Este proyecto es para aprender y experimentar. No hay contribuciones "malas" si están bien documentadas y tienen un propósito educativo claro. 🚀

¡Gracias por contribuir! 🎉

# Spec: Quick Todo App v1.0

## 1. Objetivo de Negocio
Una app simple de lista de tareas que funcione offline, para practicar frontend y Git workflow.

## 2. Alcance
- Sí: Agregar tarea, marcar como completada, borrar, editar, filtro (todas/completadas/pendientes), persistencia en localStorage.
- No: Login, backend, mobile responsive full, dark mode (por ahora).
## 3. Constraints
- Tech: HTML + CSS + Vanilla JS (sin frameworks para simplicidad).
- Estructura: index.html, style.css, script.js

## 4. User Stories + Acceptance Criteria

Feature: Agregar tarea
- Given el input está vacío → botón disabled
- When escribo texto y presiono Enter o botón → nueva tarea en lista
- Then input se limpia, tarea visible

Feature: Marcar completada
- When click en checkbox → tarea tachada + movida a completadas (o clase CSS)

Feature: Borrar tarea
- When click en botón borrar → tarea desaparece de la lista y de localStorage

Feature: Editar tarea
- When doble click en tarea → input editable, guardar al presionar Enter

Feature: Filtros
- Botones: Todas / Pendientes / Completadas → muestra solo las que corresponden

Feature: Editar tarea
- Given tarea existente → doble click en el texto
- When aparece input editable → escribo nuevo texto + Enter
- Then tarea actualizada y guardada en localStorage

Feature: Filtros
- Botones: Todas / Pendientes / Completadas
- When click en botón → muestra solo las tareas correspondientes

Feature: Contador
- Muestra siempre: "X pendientes de Y total"
- Se actualiza automáticamente

Feature: Limpiar completadas
- Botón "Limpiar completadas"
- When click → borra todas las tareas marcadas como completadas
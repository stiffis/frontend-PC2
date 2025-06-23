# 🚀 React + TypeScript Frontend Template

Plantilla base para frontend con React + TypeScript + autenticación por API Key

## 📋 Características

- ⚡ **Vite** para desarrollo rápido
- 🎨 **TailwindCSS** con tema Catppuccin Mocha
- 🔐 **Autenticación por API Key** guardada en localStorage
- 🛣️ **React Router** con rutas protegidas
- 📱 **Responsive Design**
- 🎯 **TypeScript** para type safety
- 🔧 **Axios** configurado para llamadas API

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── contexts/           # Contextos de React (AuthContext)
├── hooks/              # Custom hooks
├── interfaces/         # Tipos e interfaces de TypeScript
│   ├── auth/          # Interfaces de autenticación
│   └── [custom]/      # Tus interfaces personalizadas
├── pages/             # Páginas de la aplicación
├── router/            # Configuración de rutas
├── services/          # Servicios para llamadas API
│   ├── auth/         # Servicios de autenticación
│   └── [custom]/     # Tus servicios personalizados
└── styles/           # Estilos CSS
```

## 🚀 Inicio Rápido

### 1. Instalación

```bash
npm install
```

### 2. Configuración del Backend

Edita `src/services/api.ts` y actualiza la URL del backend:

```typescript
const basePath = `https://tu-backend-url.com/api`;
```

### 3. Configuración del Endpoint de Validación

Modifica `src/services/auth/validateApiKey.ts` para usar tu endpoint:

```typescript
const response = await api.get<void, ApiKeyValidationResponse>({
	url: "/tu-endpoint-de-validacion", // Cambia esto
});
```

### 4. Ejecutar en Desarrollo

```bash
npm run dev
```

## 🔧 Personalización

### Agregar Nuevas Páginas

1. **Crear la página:**

   ```typescript
   // src/pages/MiPaginaPersonalizada.tsx
   export default function MiPaginaPersonalizada() {
       return (
           <div className="p-6">
               <h1>Mi Página</h1>
               {/* Tu contenido aquí */}
           </div>
       );
   }
   ```

2. **Agregar la ruta:**

   ```typescript
   // src/router/routes.tsx
   import MiPaginaPersonalizada from "@pages/MiPaginaPersonalizada";

   // Dentro de children de ProtectedRoute:
   {
       path: "mi-pagina",
       element: <MiPaginaPersonalizada />
   }
   ```

### Crear Servicios API

```typescript
// src/services/miServicio.ts
import Api from "@services/api";
import { MiInterface } from "@interfaces/miInterface";

export async function obtenerDatos(): Promise<MiInterface[]> {
	const api = await Api.getInstance();
	const response = await api.get<void, MiInterface[]>({
		url: "/mi-endpoint",
	});
	return response.data;
}
```

### Crear Interfaces

```typescript
// src/interfaces/miInterface.ts
export interface MiInterface {
	id: number;
	nombre: string;
	// ... más propiedades
}
```

## 🔐 Sistema de Autenticación

### Flujo de Autenticación

1. Usuario ingresa su API Key en `/login`
2. Se valida la API Key con el backend
3. Si es válida, se guarda en localStorage
4. Se redirige al dashboard
5. Todas las llamadas subsecuentes incluyen la API Key en headers

### Headers de las Peticiones

```json
{
	"Content-Type": "application/json",
	"apiKey": "tu-api-key-aqui"
}
```

## 🎨 Diseño y Estilos

### Tema Catppuccin Mocha

La plantilla usa el tema Catppuccin Mocha. Principales clases:

- `bg-mocha-base` - Fondo principal
- `bg-mocha-surface0` - Fondo de tarjetas
- `text-mocha-text` - Texto principal
- `text-mocha-subtext1` - Texto secundario
- `border-mocha-surface1` - Bordes
- `bg-mocha-blue` - Botones primarios
- `bg-mocha-red` - Elementos de error/peligro
- `bg-mocha-green` - Elementos de éxito

### Componentes Reutilizables

Puedes encontrar componentes base en `src/components/` que puedes extender o personalizar.

## 📁 Archivos Importantes

### Configuración

- `src/services/api.ts` - Configuración del cliente API
- `src/contexts/AuthContext.tsx` - Contexto de autenticación
- `src/router/routes.tsx` - Configuración de rutas

### Autenticación

- `src/pages/ApiKeyLoginPage.tsx` - Página de login
- `src/services/auth/validateApiKey.ts` - Validación de API Key
- `src/interfaces/auth/ApiKeyLoginRequest.ts` - Interface para login

### Ejemplo de Uso

- `src/pages/DashboardPage.tsx` - Dashboard con instrucciones

## 🔄 Limpieza para Producción

Antes de tu examen/práctica, elimina:

1. Archivos no necesarios en `src/pages/` (excepto Dashboard y ApiKeyLogin)
2. Servicios específicos del proyecto anterior en `src/services/`
3. Interfaces específicas en `src/interfaces/`
4. Este archivo README_TEMPLATE.md

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Modo desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linter
```

## 🤝 Contribución

Esta es tu plantilla personal. Modifícala según tus necesidades específicas.

---

**¡Buena suerte en tu práctica calificada! 🍀**

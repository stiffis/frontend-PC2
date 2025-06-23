#!/bin/bash

# Script de limpieza para convertir el proyecto en plantilla
# Ejecuta este script antes de usar la plantilla para un nuevo proyecto

echo "🧹 Limpiando proyecto para usar como plantilla..."

# Eliminar páginas específicas del proyecto anterior
echo "Eliminando páginas del proyecto anterior..."
rm -f src/pages/LoginPage.tsx
rm -f src/pages/RegisterPage.tsx
rm -f src/pages/ExpensesPage.tsx
rm -f src/pages/ExpensesSummaryPage.tsx
rm -f src/pages/Page1.tsx

# Eliminar componentes específicos del proyecto anterior
echo "Eliminando componentes específicos..."
rm -f src/components/AddExpenseModal.tsx
rm -f src/components/BarraButtons.tsx
rm -f src/components/LoginForm.tsx
rm -f src/components/Profile.tsx

# Eliminar servicios específicos del proyecto anterior
echo "Eliminando servicios específicos..."
rm -f src/services/auth/login.ts
rm -f src/services/auth/register.ts
rm -f src/services/createExpense.ts
rm -f src/services/deleteExpense.ts
rm -f src/services/getCategories.ts
rm -f src/services/getExpenses.ts
rm -f src/services/getSummary.ts

# Eliminar interfaces específicas del proyecto anterior
echo "Eliminando interfaces específicas..."
rm -f src/interfaces/auth/AuthResponse.ts
rm -f src/interfaces/auth/LoginRequest.ts
rm -f src/interfaces/auth/RegisterRequest.ts
rm -rf src/interfaces/expenses/
rm -rf src/interfaces/pagination/

# Eliminar utilidades específicas
rm -f src/utils/getRoleBasedOnToken.ts

# Limpiar dependencias no utilizadas (opcional)
echo "Para limpiar dependencias no utilizadas, ejecuta:"
echo "npm uninstall jwt-decode"

echo "✅ Limpieza completada!"
echo "📝 Ahora puedes personalizar la plantilla para tu nuevo proyecto."
echo "📖 Lee README_TEMPLATE.md para más instrucciones."


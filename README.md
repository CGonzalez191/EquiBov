# EquiBov — Sistema de Gestión Andrológica Bovina

Aplicación web para el registro clínico y la gestión de certificados andrológicos bovinos. Diseñada para médicos veterinarios especializados en andrología bovina.

## Tecnologías

- HTML5, CSS3, JavaScript (vanilla)
- Supabase (autenticación, base de datos PostgreSQL, almacenamiento)
- SheetJS (exportación a Excel)

## Funcionalidades

- Registro de propietarios, haciendas y toros
- Creación de certificados andrológicos con examen clínico, espermiograma y exámenes complementarios
- Dashboard con indicadores clave
- Exportación de datos a Excel
- Impresión de certificados en formato A4
- Autenticación de usuarios

## Estructura

```
EquiBov/
├── *.html        # Páginas de la aplicación
├── css/          # Estilos
├── img/          # Recursos gráficos
└── js/           # Lógica de frontend
```

## Configuración

1. Servir los archivos con cualquier servidor HTTP (ej. `npx serve .`)
2. Configurar las credenciales de Supabase en `js/config.js`
3. Iniciar sesión con credenciales registradas en Supabase

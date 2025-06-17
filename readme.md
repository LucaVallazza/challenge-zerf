# Linux File System Simulator

Este proyecto simula el funcionamiento básico de un sistema de archivos tipo Linux, implementando comandos como `cd` y `ls`

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

```bash
# 1. Clona el repositorio
git clone https://github.com/LucaVallazza/challenge-zerf.git

# 2. Navega al directorio del proyecto
cd challenge-zerf

# 3. Instala las dependencias
npm install
```

## Ejecución

Para ejecutar el simulador del sistema de archivos:

```bash
# Inicia la aplicación en modo desarrollo
npm run dev
```

## Comandos disponibles

Una vez ejecutada la aplicación, aparecerá un prompt similar al de una terminal Linux. Puedes usar los siguientes comandos:

- `cd <ruta>`: Cambia el directorio actual.
  - Ejemplo: `cd home/user` o `cd ..` para ir al directorio padre.
  
- `ls`: Lista los contenidos del directorio actual.
  - Los directorios se muestran con una barra (/) al final.


## Estructura del proyecto

- `src/main.ts`: Archivo principal que contiene la implementación del sistema de archivos. Idealmente me hubiera gustado distribuir algunas funciones en distintos archivos y módulos, pero no llegué con el tiempo.

## Estructura inicial del sistema de archivos

El sistema comienza con la siguiente estructura de directorios y archivos:

```
/
└── home/
    ├── user/
    │   ├── documents/
    │   ├── photos/
    │   └── notes.txt
    ├── public/
    │   └── readme.txt
    └── guest/
```

## Notas

El proyecto está desarrollado con TypeScript y utiliza el módulo `readline` de Node.js para la interacción por consola.

### Mensaje importante

Decidí encarar la resolución en TypeScript para sumar un poco de dificultad y salirme de mi zona de confort, pero me encontré con más obstaculos de los que esperaba, sobre todo al momento de estructurar el filesystem sin usar punteros.

Estoy muy acostumbrado a resolver este tipo de problemas con Go o C, así que terminé perdiendo muchisimo tiempo buscando la forma más adecuada de encararlo.

Lamentablemente, eso me hizo avanzar mucho menos de lo que me hubiese gustado. Me entusiasmó mucho todo lo que me comentó Sofía sobre la empresa en la entrevista sobre la empresa, así que me da pena no poder entregar algo más completo dentro del plazo que se estableció, entendiendo que esta entrega probablemente me deje fuera del proceso, y también soy 100% consciente de que sería justo que así sea.

De todas formas, voy a terminar el challenge y lo voy a subir completo, aunque sea fuera de tiempo. Si hay alguna flexibilidad con los plazos y consideran mi perfil aún con esta entrega, realmente me sentiría realmente muy agradecido porque se que tengo mucho más para dar.

Saludos,
Luca Vallazza
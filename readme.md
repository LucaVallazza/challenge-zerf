# Linux Mock File System - Entrega tarde

A raíz de lo que comenté, me enviaron un mensaje diciendome que contaba con 1 hora mas para realizar el challenge, y que suba los nuevos avances a esta rama.

Este proyecto simula el funcionamiento básico de un sistema de archivos tipo Linux, implementando comandos como `cd`, `ls`, `touch`, `mkdir` y `pwd` 

## Notas

Decidí encarar la resolución en TypeScript para sumar un poco de dificultad y salirme de mi zona de confort, pero me encontré con más obstaculos de los que esperaba, sobre todo al momento de estructurar el filesystem sin usar punteros.

Muy probablemente la resolución actual sea muy mejorable en terminos de eficiencia, ya que durante el proceso cree variables que termine no usando. 

Bajo mi criterio, en esta instancia de evaluación, la prioridad era entregar un proyecto funcional. Soy plenamente consciente de que hay muchas mejoras posibles como ser: 
- Una mejor organización en archivos y módulos para mayor claridad
- Más comentarios para facilitar la lectura del código

Y hasta incluso se podria hacer un rediseño del manejo de directorios para mejorar su eficiencia y su usabilidad. Bajo la presión del challenge técnico, opté por avanzar con la mejor de las primeras soluciones que se me ocurrieron para asegurarme de llegar a una entrega completa y funcional.

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
  - Ejemplo: `cd home/user` o `cd ..`para ir al directorio padre o incluso `cd ../../` para subir 2 directorios y se puede stackear las veces que uno quiera. .
  
- `ls`: Lista los contenidos del directorio actual.
  - Nota: Los directorios se muestran con una barra (/) al final.
  - En caso de no haber archivos, en vez de no mostrar nada, muestra `<vacío>`

- `touch <fileName>`: Crea un nuevo archivo en el directorio donde se encuentra el usuario
  - Ejemplo: `touch archivo.txt` para crear un archivo con ese nombre.

- `mkdir <dirName>`: Crea un nuevo directorio donde se encuentra el usuario
  - Ejemplo: `cd home/user` o `cd ..` para ir al directorio padre.

- `pwd`: Muestra en pantalla la ruta sobre la que el usuario se encuentra



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


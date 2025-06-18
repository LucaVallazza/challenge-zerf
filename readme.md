# Linux File System Simulator

Este proyecto simula el funcionamiento básico de un sistema de archivos tipo Linux, implementando comandos como `cd` y `ls`

## ⚠ IMPORTANTE
A raíz de un mail que envié, me respondieron dandome 1 hora mas para completar el challenge. Los cambios estan en la rama `entrega-tarde`, dentro de la cual se encuentra el programa con **todas las funciones solicitadas en funcionamiento** (aunque no llegue a testearlas en profundidad). Aca únicamente pude llegar a implementar `cd` y `ls`.

## Nota
Debido a una malinterpretación de mi parte de la consigna, la terminal siempre muestra un `~ <userPrompt>`. Me parecía antinatural y en un principio la implementacion era distinta y mostraba las rutas (como una terminal real), por ejemplo `home/user> <prompt>` pero por algun motivo interpreté mal la imagen de la consigna y asumí que siempre el input debería ser mostrando un `~` y que en caso de querer conocer la ruta se usaria un `pwd` (el cual en esta rama no esta implementado, pero si en la de `entrega-tarde`).

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


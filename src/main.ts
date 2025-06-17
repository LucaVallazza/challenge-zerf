import * as readline from "readline";
var currentPath = "/";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "~",
});

rl.prompt();

// const updatePrompt = () => {
//   const displayPath = currentPath ? `/${currentPath}` : '/';
//   rl.setPrompt(`${displayPath}> `);
//   rl.prompt();
// };

interface Directory {
  type: "dir" | "file";
  contents?: { [key: string]: Directory };
}

var stackDirectories: { [key: string]: Directory }[] = [];

// Creamos una variable para almacenar el directorio actual
var directories: { [key: string]: Directory } = {
  "/": {
    type: "dir",
    contents: {
      home: {
        type: "dir",
        contents: {
          user: {
            type: "dir",
            contents: {
              documents: { type: "dir" },
              photos: { type: "dir" },
              "notes.txt": { type: "file" },
            },
          },
          public: {
            type: "dir",
            contents: {
              "readme.txt": { type: "file" },
            },
          },
          guest: {
            type: "dir",
            contents: {},
          },
        },
      },
    },
  },
};

const buildPathFromStack = (stack: { [key: string]: Directory }[]): string => {
  // Si el stack está vacío, devolvemos la raíz
  if (stack.length === 0) return "/";

  // Extraemos las keys de cada objeto en el stack
  const pathSegments = stack.map((dirObj) => {
    // Cada objeto en stack tiene una única clave
    return Object.keys(dirObj)[0];
  });

  // Unimos los segmentos del path
  return pathSegments.join("/");
};

// Al no haber punteros, esta forma es una forma de simular un sistema de archivos en memoria. Aunque es una forma muy poco eficiente de buscar directorios y archivos
// es la mas rapida que se me ocurre para este ejercicio.
const pathFromcdHandler = (path: string) => {
  const paths: string[] = [];
  buildPathFromStack(stackDirectories)
    .split("/")
    .filter((val) => val != "")
    .forEach((path) => paths.push(path));
  path
    .split("/")
    .filter((val) => val != "")
    .forEach((path) => paths.push(path));

  const parts = [];

  var dir: Directory = directories["/"];

  // Hacemos la busqueda desde 0
  stackDirectories = [];
  for (const path of paths) {
    if (path == "..") {
      const lastDirectory = stackDirectories.pop();
      if (lastDirectory == undefined) {
        console.log("No se puede ir mas alla de la carpeta raiz");
        return;
      }
      parts.pop();
    }
    else if (
      dir.contents &&
      dir.contents[path] &&
      dir.contents[path].type == "dir"
    ) {
      dir = dir.contents[path];

      stackDirectories.push({ [path]: dir });
      parts.push(path);
    } else {
      console.log("No se ha encontrado el directorio");
      return;
    }
  }
  currentPath = parts.join("/")!;

  return;
};

const mkdirHandler = (dirName: string) => {
  const paths: string[] = [];
  buildPathFromStack(stackDirectories)
    .split("/")
    .filter((val) => val != "")
    .forEach((path) => paths.push(path));

  const parts = [];

  var dir = directories["/"];

  // Hacemos la busqueda desde 0
  for (let i = 0; i < paths.length; i++) {
    if (
      dir.contents &&
      dir.contents[paths[i]] &&
      dir.contents[paths[i]].type == "dir"
    ) {
      dir = dir.contents[paths[i]];
    } else {
      console.log("ERROR: No se ha encontrado el directorio");
      return;
    }
  }

  dir.contents = {
    ...dir.contents,
    [dirName]: { type: "dir", contents: {} },
  };

  console.log("Carpeta creada");

  return;
};

const touchHandler = (fileName: string) => {
  const paths: string[] = [];
  buildPathFromStack(stackDirectories)
    .split("/")
    .filter((val) => val != "")
    .forEach((path) => paths.push(path));

  const parts = [];

  var dir = directories["/"];

  // Hacemos la busqueda desde 0
  for (let i = 0; i < paths.length; i++) {
    if (
      dir.contents &&
      dir.contents[paths[i]] &&
      dir.contents[paths[i]].type == "dir"
    ) {
      dir = dir.contents[paths[i]];
    } else {
      console.log("ERROR: No se ha encontrado el directorio");
      return;
    }
  }

  dir.contents = {
    ...dir.contents,
    [fileName]: { type: "file", contents: {} },
  };

  console.log("Archivo creado");

  return;
};

// Función para obtener el último directorio del stack
const getLastDirectory = (): Directory | null => {
  if (stackDirectories.length === 0) {
    return directories["/"];
  }

  const lastDirObj = stackDirectories[stackDirectories.length - 1];

  const key = Object.keys(lastDirObj)[0];

  return lastDirObj[key];
};

// Función para obtener los contenidos del último directorio
const getLastDirectoryContents = ():
  | { [key: string]: Directory }
  | undefined => {
  const lastDir = getLastDirectory();
  if (lastDir) {
    return lastDir.contents;
  }
  return undefined;
};

const handleLs = () => {
  const dirContent = getLastDirectoryContents();
  if (!dirContent || Object.keys(dirContent).length == 0) {
    console.log("<vacío>");
    return;
  }

  const formattedEntries = [];

  // Recorrer cada entrada en el directorio
  for (const [name, entry] of Object.entries(dirContent)) {
    if (entry.type === "dir") {
      formattedEntries.push(`${name}/`);
    } else {
      formattedEntries.push(name);
    }
  }

  console.log(formattedEntries.sort().join("  "));
};

// Es una alternativa muy poco escalable, pero para ahorrar tiempo la voy a usar ya que es una forma sencilla de manejar el prompt
rl.on("line", (line) => {
  const [cmd, ...args] = line.trim().split(" ");

  switch (cmd) {
    case "cd":
      if (args.length === 0 || args.length > 1) {
        console.log("Uso: cd <directorio>");
        break;
      }

      const newPath = pathFromcdHandler(args[0]);
      if (newPath == null) {
        break;
      }
      currentPath = newPath!;

      break;
    case "ls":
      handleLs();
      break;
    case "mkdir":
      if (args.length === 0 || args.length > 1) {
        console.log("Uso: mkdir <nombreNuevaCarpeta>");
        break;
      }
      mkdirHandler(args[0]);
      break;
    case "touch":
      if (args.length === 0 || args.length > 1) {
        console.log("Uso: touch <nombreNuevoArchivo>");
        break;
      }
      touchHandler(args[0]);
      break;
    case "pwd":
      console.log(currentPath);
      break;
    case "exit":
      rl.close();
      return;
    default:
      console.log("Comando no reconocido");
  }
  rl.prompt();
}).on("close", () => {
  console.log("Programa finalizado");
  process.exit(0);
});

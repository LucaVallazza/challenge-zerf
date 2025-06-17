import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ '
});

rl.prompt();

interface Directory {
  type: 'dir' | 'file';
  contents?: { [key: string]: Directory };
}

var currentPath = '/';

// Creamos una variable para almacenar el directorio actual
var directories = {
  '/': {
    type: 'dir',
    contents: {
      'home':{
        type: 'dir',
        contents: {
          'user': {
            type: 'dir',
            contents: {
              'documents': { type: 'dir' },
              'photos': { type: 'dir' },
              'notes.txt': { type: 'file' }
            }
          },
          'public': {
            type: 'dir',
            contents: {
              'readme.txt': { type: 'file' }
            }
          },
          'guest': {
            type: 'dir',
            contents: {}
          }
        }
      }
    }
  }
};


rl.on('line', (line) => {
  const [cmd, ...args] = line.trim().split(' ');
  
  console.log(args)

  switch (cmd) {
    case 'cd':
      // Logica para cd(args[0])
      break;
    case 'ls':
      // Logica para ls()
      break;
    case 'mkdir':
      // Logica para mkdir(args[0])
      break;
    case 'touch':
      // Logica para touch(args[0])
      break;
    case 'pwd':
      // Logica para pwd()
      break;
    case 'exit':
      rl.close();
      return;
    default:
      console.log('Comando no reconocido');
  }
  rl.prompt();
}).on('close', () => {
  console.log('Programa finalizado');
  process.exit(0);
});
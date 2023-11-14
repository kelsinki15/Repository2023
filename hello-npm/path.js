import { basename, dirname } from "path";

let nomeAquivo = basename('./teste.txt');
let filenam = basename('/test/something');

let dir = dirname ('/test/something');
let diretorio = dirname('/test/something/file.txt');

console.log('nome do arquivo -> ' + nomeAquivo)
console.log('filename -> ' + filename)
console.log('dir ->' + dir)
console.log('diretorio -> ' + diretorio)


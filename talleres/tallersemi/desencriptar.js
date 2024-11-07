const encriptado =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";
const nombre = "^?$/?";
const diccionario = {
  "?": "a",
  "[": "e",
  "\\": "i",
  "~": "o",
  "+": "u",
  "()": " ",
  "¿": "y",
  "^": "m",
  $: "r",
  "#": "v",
  "]": "n",
  "%": "b",
  "*": "p",
  "`": "c",
  _: "z",
  "!": "j",
  "¬": "ó",
  "/": "l",
  "-": "h",
  "{": "s",
  "=": "t",
  "}": "q",
  "¡": "d",
  "¬": "ó",
  ";": "f",
};

function desencriptar(mensaje) {
  let desencriptado = "";

  for (let i = 0; i < mensaje.length; i++) {
    const char = mensaje[i];
    desencriptado += diccionario[char] || char;
  }
  return mensaje.replace(
    /\(\)|[?~\[\]+\/^$¿#%*-_!`{=¡;}/}¡¬\\]/g,
    (caracter) => {
      return diccionario[caracter] || caracter;
    }
  );
}
const desencriptado = desencriptar(encriptado);
console.log(desencriptado);

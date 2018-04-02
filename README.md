# Platzom

platzom es un idioma inventado en base a un curso platzi

## Descripción

-si termina en ar se eliminan esos caracteres
-si es mayor a 10 se corta y se pone un guion al medio
-verifica un palindromo , si lo es, intercala entre mayúsculas y minusculas todas las letras de la palabra

##instalación 

```
npm install platzi38
```

## Uso

```
import platzom from 'platzi38'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Licencia

[MIT](https://opensource.org/licenses/MIT)
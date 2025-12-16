export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

/*
Cycle inicia = 0 então retorna 1
Cycle é 1? Então retorna 2
.../
Se for 8 > volta para 1

*/

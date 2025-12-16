// FizzBuzz -> Algorítimo - Se o número é múltiplo de 5 = Fizz ou Buzz multiplo de 3, FizzBuzz múltiplo de 3 e 5 = FizBuzz =/ Retorna o número

import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime'; // % módulo = resto da divisão
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}

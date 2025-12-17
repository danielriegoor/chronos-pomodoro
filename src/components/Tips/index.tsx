import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  //Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min.</span>,
    shortBreakTime: (
      <span>Descanse por {state.config.shortBreakTime} min.</span>
    ),
    longBreakTime: <span> Pausa longa. </span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} min.</span>,
    shortBreakTime: (
      <span>A próxima pausa é de {state.config.shortBreakTime} min.</span>
    ),
    longBreakTime: <span>Próximo ciclo é pausa longa de 15 min.</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}

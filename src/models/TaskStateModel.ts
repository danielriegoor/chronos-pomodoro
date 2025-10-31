import type { TaskModel } from './TaskModel';

// useState = Estado -> Componente -> Filhos (Componentes filho podem retornar estado para componentes pai)

export type TaskStateModel = {
  tasks: TaskModel[]; // Histórico, MainForm < Onde precisamos deste estado
  secondsRemaining: number; //Countdown, Histórico, MainForm, Botão ativo ou não (iniciar ou parar a task) <Onde precisamos deste estado
  formattedSecondsRemaining: string; // Countdown, Title < Onde precisamos deste estado
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8 -> Qual task está - as bolinhas amarelas, verdes e azuis
  config: {
    workTime: number; // em minutos
    shortBreakTime: number; // em minutos
    longBreakTime: number; // em minutos
  };
};

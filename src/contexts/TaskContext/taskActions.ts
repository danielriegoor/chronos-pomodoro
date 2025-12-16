// userReducer -> Hook do React que recebe um reducer e um estado inicial
// reducer -> funcção que recebe o estado atual e uma ação, e retorna um novo estado com base na ação (Deve sempre disparar um estado)
// state -> estado atual gerenciado pelo useReducer
// action -> a ação disparada para modificar o estado. geralmente é um objeto com type e (opcionalmente) payload
// type -> tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload -> dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionWithPayLoad = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionWithoutPayLoad =
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionModel = TaskActionWithPayLoad | TaskActionWithoutPayLoad;

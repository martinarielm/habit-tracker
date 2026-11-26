export interface Habit {
  id: string;
  name: string;
}

export interface HabitWithCompleted extends Habit {
  completed: boolean;
}

export interface HabitsResponse {
  date: string;
  habits: HabitWithCompleted[];
}

export interface Completion {
  habitId: string;
  date: string;
}

export interface SetHabitCompletion extends Completion {
  completed: boolean;
}

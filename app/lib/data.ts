import { Completion, HabitsResponse, Habit } from "@/app/types";

const habits: Habit[] = [
  { id: "piano", name: "Play the piano" },
  { id: "read", name: "Read for 20 minutes" },
  { id: "learn", name: "Learn Node.js" },
];

const completions: Completion[] = [
  { habitId: "piano", date: "2026-11-26" },
  { habitId: "read", date: "2026-11-25" },
];

export async function getHabits(date: string): Promise<HabitsResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    date,
    habits: habits.map((habit) => ({
      ...habit,
      completed: completions.some(
        (h) => h.habitId === habit.id && h.date === date,
      ),
    })),
  };
}

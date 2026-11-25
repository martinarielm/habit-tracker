import { getHabits } from "../lib/habits";

export default async function HabitList() {
  const habits = await getHabits();

  return (
    <ul>
      {habits.map((habit) => (
        <li key={habit.id}>
          <input type="checkbox" id={habit.id} />
          <label htmlFor={habit.id}>{habit.name}</label>
        </li>
      ))}
    </ul>
  );
}

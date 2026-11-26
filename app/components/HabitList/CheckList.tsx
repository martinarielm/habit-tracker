"use client";

import { Habit, HabitWithCompleted } from "@/app/types";
import { useState } from "react";

export default function CheckList({
  habits,
}: {
  habits: HabitWithCompleted[];
}) {
  const [items, setItems] = useState(habits);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItems = items.map((habit) =>
      habit.id === event.target.id
        ? { ...habit, completed: !habit.completed }
        : habit,
    );
    setItems(updatedItems);
  };

  return (
    <>
      <ul>
        {items.map((habit) => (
          <li key={habit.id}>
            <input
              type="checkbox"
              id={habit.id}
              checked={habit.completed}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={habit.id}>{habit.name}</label>
          </li>
        ))}
      </ul>

      <section>
        {items.filter((h) => h.completed).length} de {items.length} habitos
        completados
      </section>
    </>
  );
}

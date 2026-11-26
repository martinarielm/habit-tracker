"use client";

import { Habit, HabitWithCompleted } from "@/app/types";
import { useState } from "react";

export default function CheckList({
  habits,
}: {
  habits: HabitWithCompleted[];
}) {
  const [items, setItems] = useState(habits);

  const handleCheckboxChange = (habitId: Habit["id"]) => {
    const updatedItems = items.map((habit) =>
      habit.id === habitId ? { ...habit, completed: !habit.completed } : habit,
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
              onChange={() => handleCheckboxChange(habit.id)}
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

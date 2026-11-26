"use client";

import { ChangeEvent, useState } from "react";
import { HabitsResponse } from "@/app/types";
import { setHabitCompletion } from "@/app/lib/actions";

export default function CheckList({ habits, date }: HabitsResponse) {
  const [items, setItems] = useState(habits);

  const handleCheckboxChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    setItems((prevItems) =>
      prevItems.map((habit) =>
        habit.id === id ? { ...habit, completed: checked } : habit,
      ),
    );

    await setHabitCompletion({ completed: checked, date, habitId: id });
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

      <p>
        {items.filter((h) => h.completed).length} de {items.length} habitos
        completados
      </p>
    </>
  );
}

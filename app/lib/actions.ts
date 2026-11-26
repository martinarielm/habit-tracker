"use server";

import { SetHabitCompletion } from "../types";

export async function setHabitCompletion({
  habitId,
  completed,
  date,
}: SetHabitCompletion) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log({ habitId, date, completed });

  return { habitId, date, completed };
}

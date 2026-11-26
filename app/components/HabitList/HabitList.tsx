import { getHabits } from "@/app/lib/data";
import CheckList from "./CheckList";

export default async function HabitList() {
  const response = await getHabits("2026-11-26");
  console.log("👨‍🎤 -> HabitList -> habits:", response.habits);

  return <CheckList habits={response.habits} />;
}

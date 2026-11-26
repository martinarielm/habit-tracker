import { Suspense } from "react";
import HabitList from "./components/HabitList/HabitList";
import TodayDate from "./components/TodayDate";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Habit Tracker</h1>

        <p>
          <TodayDate />
        </p>
      </header>

      <section>
        <h2>List of Habits</h2>

        <Suspense fallback={<p>Loading habits...</p>}>
          <HabitList />
        </Suspense>
      </section>
    </main>
  );
}

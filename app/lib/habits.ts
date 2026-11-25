const habits = [
  { id: crypto.randomUUID(), name: "Leer 20 minutos" },
  { id: crypto.randomUUID(), name: "Play the piano" },
  { id: crypto.randomUUID(), name: "Learn Node.js" },
];

export async function getHabits() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return habits;
}

export async function calculateNumberSlowly() {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 4000) + 1)
  );
  return calculateNumber();
}

export function calculateNumber() {
  return Math.floor(Math.random() * 100);
}

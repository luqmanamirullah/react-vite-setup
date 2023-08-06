/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function getTodoById({ id }: { id: number }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    if (error.message as string) {
      throw new Error(error.message);
    }

    throw new Error('Something went wrong');
  }
}

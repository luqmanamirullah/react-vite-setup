interface Props {
  name: string;
}
export default function sayHello({ name }: Props) {
  return alert(`Hello ${name}`);
}

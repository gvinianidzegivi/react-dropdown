import { Dropdown } from './stories';

export const App = () => {
  const data = [
    { id: 1, label: 'Apple', value: 'apple' },
    { id: 2, label: 'Google', value: 'google' },
    { id: 3, label: 'Microsoft', value: 'microsoft' },
  ];
  return (
    <>
      <Dropdown options={data} withSearch multiple />
    </>
  );
};

import React from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 0,
    },
  });
  renderCount++;

  console.log('errors', errors);

  return (
    <div className="App">
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register('firstName', {
            required: { value: true, message: 'This is required' },
          })}
          name="firstName"
          placeholder="First Name"
        />
        <input
          {...register('lastName', {
            maxLength: { value: 5, message: 'Max length is 5' },
          })}
          name="lastName"
          placeholder="Last Name"
        />
        <input type="number" {...register('age', { valueAsNumber: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}

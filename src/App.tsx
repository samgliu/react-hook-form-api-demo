import Headers from './Header';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

let renderCount = 0;

function App() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: 'bill',
      lastName: 'L',
      age: 0,
    },
  });
  renderCount++;
  //console.log(watch(['firstName', 'lastName', 'age']));
  useEffect(() => {
    const subscription = watch((data) => {
      console.log('data', data);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);
  return (
    <div className="App">
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register('firstName')} placeholder="First Name" />
        <input {...register('lastName')} placeholder="Last Name" />
        <input {...register('age')} placeholder="Age" type="number" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;

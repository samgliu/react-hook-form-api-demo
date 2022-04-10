import Headers from './Header';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
let renderCount = 0;

function App() {
  const {
    register,
    handleSubmit,
    formState,
    formState: {
      errors,
      isDirty,
      dirtyFields,
      touchedFields,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
      isValid,
    },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  renderCount++;

  console.log('errors', errors);
  console.log('isDirty', isDirty);
  console.log('dirtyFields', dirtyFields);
  console.log('touchedFields', touchedFields);
  console.log('isSubmitSuccessful', isSubmitSuccessful);

  useEffect(() => {
    console.log('useEffect formstate', formState.errors);
  }, [formState]);

  return (
    <div className="App">
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true })} />
        <input {...register('lastName', { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { useForm, useFormState, useWatch } from 'react-hook-form';

import Headers from './Header';

let renderCount = 0;

const Controller = ({ control, register, name, rules, render }: any) => {
  const value = useWatch({
    control,
    name,
  });
  const { errors } = useFormState({
    control,
    name,
  });
  const props = register(name, rules);

  console.log(errors);

  return render({
    value,
    onChange: (e: any) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

const Input = (props: any) => {
  const [value, setValue] = React.useState(props.value || '');

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <input
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
    />
  );
};

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const [submittedVal, setSubmittedVal] = useState();
  const onSubmit = (data: any) => {
    console.log(data);
    setSubmittedVal(data);
  };
  renderCount++;

  console.log('errors', errors);

  React.useEffect(() => {
    setTimeout(() => {
      setValue('lastName', 'test');
    }, 1000);
  }, [setValue]);

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First Name" />

        <Controller
          {...{
            control,
            register,
            name: 'lastName',
            rules: {
              required: true,
            },
            render: (props: any) => <Input {...props} />,
          }}
        />

        <input type="submit" />
      </form>
      {submittedVal && (
        <div>
          Submitted Data:
          <br />
          {JSON.stringify(submittedVal)}
        </div>
      )}
    </div>
  );
}

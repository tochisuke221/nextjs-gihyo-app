import { useForm, Controller, SubmitHandler } from 'react-hook-form'

type MyFormData = {
  isChecked: boolean
}

// 後で消すので一旦App
const Checkbox = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MyFormData>()
  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="isChecked"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <input type="checkbox" onChange={onChange} checked={value} />
        )}
      />
      {errors.isChecked && <label>チェックしてください</label>}
      <button type="submit">Submit</button>
    </form>
  )
}

export default Checkbox

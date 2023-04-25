


const TextInput = ({
  field,
  label,
  required = false,
  placeholder,
  form: { setFieldValue, errors, touched },
}) => {
  console.log();
  return (
    <div className="mb-2">
      {label ? <h2>{label}</h2> : null}
      <input
        type="text"
        name={field.name}
        value={field.value}
        onChange={(e) => setFieldValue(field.name, e.target.value)}
        placeholder={placeholder}
      />
      {errors[field.name] && <div>{errors[field.name]}</div>}
    </div>
  );
};

export default TextInput;

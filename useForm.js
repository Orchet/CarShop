import { useState } from 'react'

const useForm = (dataInicial, onValidate) => {
  const [form, setForm] = useState(dataInicial)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = onValidate(form)

    if (Object.keys(err).length === 0) {
      console.log ('enviando..')
    } else {
      console.log ('barcelona..')
      setErrors(err)
    }
    
  }

  return { form, errors, loading, handleChange, handleSubmit }
}

export default useForm;
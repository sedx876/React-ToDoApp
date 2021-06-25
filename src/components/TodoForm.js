import React, { useState } from 'react'

const TodoForm = (props) => {
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }

  return (
    <div>
      <form className='todo-form'
        onSubmit={handleSubmit}
      >

        <input
          type='text'
          placeholder='Add a Note'
          value={input}
          name='text'
          className='todo-input'
          onChange={handleChange}
        />

        <button className='todo-button'>
          Add Note
        </button>

      </form>
    </div>
  )
}

export default TodoForm

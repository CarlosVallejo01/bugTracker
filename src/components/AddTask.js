import { useState } from 'react'

  
function AddTask({ onAdd }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [urgent, setUrgent] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!title) {
          alert('Please add a task')
          return
        }
    
        onAdd({ title, description, author, urgent })
    
        setTitle('')
        setAuthor('')
        setDescription('')
        setUrgent(1)
      }
    
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <lable>Bug</lable>
            <input type='text' placeholder='Add bug'
            value={title} onChange={(e) =>setTitle(e.target.value) }/>
        </div>
        <div className='form-control'>
            <lable>Description</lable>
            <input type='text' placeholder='Add Description'
            value={description} onChange={(e) =>setDescription(e.target.value) }/>
        </div>
        <div className='form-control'>
            <lable>Author</lable>
            <input type='text' placeholder='Author name'
            value={author} onChange={(e) =>setAuthor(e.target.value) }/>
        </div>
        <div className='form-control form-control-check'>
            <lable>Set as urgent</lable>
            <input type='checkbox'
            checked={urgent}
            value={urgent} onChange={(e) =>setUrgent(e.currentTarget.checked) }/>
        </div>
        <input type='submit' value='Report Bug'
        className="btn btn-block"/>
    </form>
  )
}

export default AddTask
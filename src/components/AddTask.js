import { useState } from 'react'

  
function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!text) {
          alert('Please add a task')
          return
        }
    
        onAdd({ text, description, author, reminder })
    
        setText('')
        setAuthor('')
        setDescription('')
        setReminder(false)
      }
    
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <lable>Bug</lable>
            <input type='text' placeholder='Add bug'
            value={text} onChange={(e) =>setText(e.target.value) }/>
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
            checked={reminder}
            value={reminder} onChange={(e) =>setReminder(e.currentTarget.checked) }/>
        </div>
        <input type='submit' value='Report Bug'
        className="btn btn-block"/>
    </form>
  )
}

export default AddTask
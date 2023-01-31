import { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    const handleKeyDown = (e) => {
        if(e.code === 'Space') {
            e.preventDefault()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
            <button type='submit'>submit</button>
        </form>
    )
}

export default Form 
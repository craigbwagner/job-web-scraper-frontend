import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import './App.css'

function App() {

  
    const [inputValue, setInputValue] = useState('')
    const [cardContent, setCardContent] = useState('Card content will appear here')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      setCardContent(inputValue)
      setInputValue('')
    }
  return (
    <div className="max-w-md mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-xl font-bold text-center">Header, Input, and Card Example</h1>
      </header>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some text..."
          className="flex-grow"
        />
        <Button type="submit">Submit</Button>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{cardContent}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

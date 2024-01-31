import { useState, useEffect } from 'react'

function App() {
  const hirigana = [
    { romanji: "a", hiragana: "あ" },
    { romanji: "i", hiragana: "い" },
    { romanji: "u", hiragana: "う" },
    { romanji: "e", hiragana: "え" },
    { romanji: "o", hiragana: "お" },
    { romanji: "ka", hiragana: "か" },
    { romanji: "ki", hiragana: "き" },
    { romanji: "ku", hiragana: "く" },
    { romanji: "ke", hiragana: "け" },
    { romanji: "ko", hiragana: "こ" },
    { romanji: "sa", hiragana: "さ" },
    { romanji: "shi", hiragana: "し" },
    { romanji: "su", hiragana: "す" },
    { romanji: "se", hiragana: "せ" },
    { romanji: "so", hiragana: "そ" },
    { romanji: "ta", hiragana: "た" },
    { romanji: "chi", hiragana: "ち" },
    { romanji: "tsu", hiragana: "つ" },
    { romanji: "te", hiragana: "て" },
    { romanji: "to", hiragana: "と" },
    { romanji: "na", hiragana: "な" },
    { romanji: "ni", hiragana: "に" },
    { romanji: "nu", hiragana: "ぬ" },
    { romanji: "ne", hiragana: "ね" },
    { romanji: "no", hiragana: "の" },
    { romanji: "ha", hiragana: "は" },
    { romanji: "hi", hiragana: "ひ" },
    { romanji: "fu", hiragana: "ふ" },
    { romanji: "he", hiragana: "へ" },
    { romanji: "ho", hiragana: "ほ" },
    { romanji: "ma", hiragana: "ま" },
    { romanji: "mi", hiragana: "み" },
    { romanji: "mu", hiragana: "む" },
    { romanji: "me", hiragana: "め" },
    { romanji: "mo", hiragana: "も" },
    { romanji: "ya", hiragana: "や" },
    { romanji: "yu", hiragana: "ゆ" },
    { romanji: "yo", hiragana: "よ" },
    { romanji: "ra", hiragana: "ら" },
    { romanji: "ri", hiragana: "り" },
    { romanji: "ru", hiragana: "る" },
    { romanji: "re", hiragana: "れ" },
    { romanji: "ro", hiragana: "ろ" },
    { romanji: "wa", hiragana: "わ" },
    { romanji: "wo", hiragana: "を" },
    { romanji: "n", hiragana: "ん" }
  ]

  const [inut, setInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [ streak, setStreak ] = useState(0)
  const [ maxStreak, setMaxStreak ] = useState(0)

  const [ error, setError ] = useState(false)

  const setRandomHirigana =() => {
    const randomIndex = Math.floor(Math.random() * hirigana.length)
    setCurrent(randomIndex)
  }

  const handleChange = evt => {
    setInput(evt.targe.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (input.toLowerCase() === hirigana[current].romanji) {
      setStreak(streak + 1);
      setMaxStreak(streak, maxStreak);
      setError(false)

      localStorage.setItem('maxStreak', Math.max(streak, maxStreak))
      localStorage.setItem('streak', streak + 1)

    } else {
      setError('Wrong! The correct answer for ' + hirigana[current].hiragana + ' is ' + hirigana[current].romanji)
      setStreak(0)

      localStorage.setItem('streak', 0)
    }

    setInput('')
    setRandomHirigana

  }

  useEffect(() => {
    setRandomHirigana()
    setStreak(localStorage.getItem('streak') || 0)
    setMaxStreak(localStorage.getItem('maxStreak') || 0)
  }, [])

  return (
    <div className="App">

    </div>
  )
}

export default App

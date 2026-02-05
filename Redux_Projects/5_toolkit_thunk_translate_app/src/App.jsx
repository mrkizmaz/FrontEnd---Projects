import React, { useEffect } from 'react'
import LanguageSelect from './components/LanguageSelect'
import TextContainer from './components/TextContainer'
import Button from './components/Button'
import { useDispatch } from 'react-redux'
import { getLanguages } from './redux/actions'

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className='bg-zinc-800 text-white min-h-screen grid place-items-center'>
      <div className='w-[80vw] max-w-275 flex flex-col justify-center'>
        <h1 className='text-center font-semibold my-7 text-4xl'>Ceviri +</h1>

        <LanguageSelect />
        <TextContainer />
        <Button />
      </div>

    </div>
  )
}

export default App
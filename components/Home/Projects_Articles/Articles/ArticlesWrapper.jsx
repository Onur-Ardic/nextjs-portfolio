'use client'
import { useState, useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import AddArticleForm from './AddArticleForm'
import AddButton from '@/components/Uİ/AddButton'

const ArticlesWrapper = () => {
  const [formVisibility, setFormVisibility] = useState(false)
  const [animationParent] = useAutoAnimate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    setUser(storedUser)
  }, [])

  return (
    <div className="articles-wrapper">
      <div className="articles-content">
        <h4 className="text-center text-2xl mt-3">Articles</h4>
        {user && (
          <AddButton
            text={`${formVisibility ? 'Close' : 'Open'} Add Article Form`}
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
        )}
      </div>
      <div ref={animationParent}>{formVisibility && <AddArticleForm />}</div>
    </div>
  )
}

export default ArticlesWrapper

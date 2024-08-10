'use client'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'

const AddButton = ({ text, setFormVisibility, formVisibility }) => {
  const formVisibilityChangeHandler = () => {
    setFormVisibility(!formVisibility)
  }
  return (
    <Button
      component="label"
      role="button"
      variant="outlined"
      tabIndex={-1}
      startIcon={formVisibility ? <CloseIcon /> : <AddIcon />}
      type="submit"
      onClick={formVisibilityChangeHandler}
    >
      {text}
    </Button>
  )
}

export default AddButton

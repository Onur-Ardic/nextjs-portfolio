import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const AddButton = ({ text }) => {
  return (
    <Button
      component="label"
      role="button"
      variant="outlined"
      tabIndex={-1}
      startIcon={<AddIcon />}
      type="submit"
    >
      {text}
    </Button>
  )
}

export default AddButton

import { Button } from "@mui/material"


const MuiButton = ({ link, text, variant }) => {
    return (
        <Button href={link} variant={variant}>{text}</Button>
    )
}

export default MuiButton
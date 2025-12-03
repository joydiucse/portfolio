import {Button} from "@mui/material";


export const PrimaryButton = ({children}) => {
  return (
      <Button
          variant="contained"
          className={"fcc gap-2 "}
          sx={{
              borderRadius: "5px",
              textTransform: "none"
          }}
      >
          {children}
      </Button>
  )
}
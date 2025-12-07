import {Button} from "@mui/material";


export const PrimaryButton = ({children, ...props}) => {
  return (
      <Button
          variant="contained"
          className={"fcc gap-2 "}
          sx={{
              borderRadius: "5px",
              textTransform: "none"
          }}
          {...props}
      >
          {children}
      </Button>
  )
}
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "whitesmoke",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
};

export default function Loader() {
  return (
    <div>
      <Box sx={style}>
        <CircularProgress sx={{ top: "50%", left: "50%", color: "#ffd54b" }} />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Loading elements....
        </Typography>
      </Box>
    </div>
  );
}

import { Divider, Stack, Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <Stack
      spacing={3}
      divider={<Divider orientation="horizontal" variant="middle" flexItem />}
    >
      <Stack
        className="center"
        direction="row"
        spacing={12}
        alignContent="center"
        alignItems="center"
      >
        <p>
          Links
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
        </p>
        <p>
          Links
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
        </p>
        <p>
          Links
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
        </p>
        <p>
          Links
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
          <li>Text1</li>
        </p>
      </Stack>
      <Stack
        direction="row"
        className="center"
        spacing={3}
        sx={{ width: "100%", position: "absolute", bottom: 0, height: "10%" }}
      >
        <p>Copyright © Your Website - {new Date().getFullYear()}</p>
      </Stack>
    </Stack>
  );
};

export default Footer;

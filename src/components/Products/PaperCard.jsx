import { CardContent, CardMedia, Rating, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import accounting from "accounting";
import { useSelector } from "react-redux";
import CartActions from "../CartActions";

export default function PaperCard() {
  const prod = useSelector((state) => state.cart.currentProduct);
  const { image, price, name, quantity, rating, cat, description } = prod;

  return (
    <>
      <Stack
        direction="row"
        gap="6px"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack className="fade" sx={{ width: 400, height: 160 }}>
          <CardMedia
            sx={{
              height: 370,
              objectFit: "contain",
              marginTop: "5px",
            }}
            component="img"
            image={image}
            alt={name}
          />
        </Stack>

        <Box
          sx={{
            displayDirection: "row",
            marginTop: "5%",
            display: "flex",
            "& > :not(style)": {
              m: 1,
            },
          }}
        >
          <Stack className="fade" sx={{ width: 500 }}>
            <Typography variant="h4">Category: {cat.toUpperCase()}</Typography>

            <CardContent>
              <Stack spacing={7} direction="row">
                <Typography variant="body1" color="black">
                  Name:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {name}
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary">
                In Stock {quantity}
              </Typography>
              <Stack spacing={2} direction="row">
                <Typography variant="body1" color="black">
                  Description:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {description}
                </Typography>
              </Stack>
              <Stack spacing={7} direction="row">
                <Typography variant="body1" color="black">
                  Price:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {accounting.formatMoney(price)}
                </Typography>
              </Stack>
              <Stack spacing={5} direction="row">
                <Typography variant="body1" color="black">
                  Rating:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <Rating name="read-only" value={parseInt(rating)} readOnly />
                </Typography>
              </Stack>
            </CardContent>
            <Stack direction="row">
              <CartActions prod={prod} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

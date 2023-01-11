import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import accounting from "accounting";
import { useSelector } from "react-redux";

export default function PaperCard() {
  const currentProduct = useSelector((state) => state.cart.currentProduct);
  const { image, price, name, quantity, rating, cat, description } =
    currentProduct;

  return (
    <>
      <Typography
        align="center"
        gutterBottom
        variant="h4"
        sx={{ marginTop: "6px" }}
      >
        {cat.toUpperCase()}
      </Typography>
      <Stack
        direction="row"
        gap="6px"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
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
          <Card className="fade" sx={{ width: 300, height: 370 }}>
            <CardMedia
              sx={{
                objectFit: "contain",
                height: "350px",
                marginTop: "5px",
              }}
              component="img"
              image={image}
              alt={name}
            />
          </Card>
        </Box>

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
          <Card className="fade" sx={{ width: 900, height: 370 }}>
            <CardHeader
              title={name.toUpperCase()}
              subheader={`In stock ${quantity}`}
              sx={{ backgroundColor: "#EFEF98" }}
            />
            <CardContent>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ height: 200 }}
              >
                {description}
              </Typography>
              <Typography variant="h6" color="textSecundary">
                {accounting.formatMoney(price)}
              </Typography>
              <Rating name="read-only" value={parseInt(rating)} readOnly />
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </>
  );
}

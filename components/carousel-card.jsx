import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CarouselCard({ imgURL }) {
  return (
    <Card variant="outlined" sx={{ bgcolor: "black" }}>
      <CardContent>
        <img src={imgURL} className="cardImg" />
      </CardContent>
    </Card>
  );
}

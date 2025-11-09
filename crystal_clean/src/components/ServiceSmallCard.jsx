import { Typography, Paper } from "@mui/material";
import Link from "next/link";

export default function ServiceCard({ title, price, link }) {
  return (
    <Link href={link} passHref>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: "#ffffff",
          transition: "transform 0.2s",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 6,
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {price}
        </Typography>
      </Paper>
    </Link>
  );
}
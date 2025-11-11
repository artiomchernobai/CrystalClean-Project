import { Typography, Paper } from "@mui/material";
import Link from "next/link";

export default function ServiceCard({ title, description, price, link }) {

  return (
    <Link href={link} passHref>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          height: '100px',
          minWidth: '250px',
          padding: '15px',
          marginBottom: '20px',
          borderRadius: 2,
          backgroundColor: "#ffffff",
          transition: "transform 0.2s",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 2,
          },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#32598c" }}>
          {title}
        </Typography>

        <Typography variant="body1" sx={{ color: "black", fontSize: '18px'  }}>
          {price}
        </Typography>
      </Paper>
    </Link>
  );
}
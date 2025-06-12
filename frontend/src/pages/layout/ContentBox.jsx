import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export default function ContentBox({ children, title, collapsible = false }) {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        p: 0, // Sin padding para que la barra azul sea flush
        width: "auto",
        minWidth: 0,
        mt: 0,
        mb: 2,
        minHeight: "50px",
        ml: { xs: "5px", sm: "10px" }, // pequeña separación izquierda
        mr: "1%",                      // 1% separación derecha
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: "#0084ff",
          color: "#fff",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          p: 1,
          fontWeight: 600,
          fontSize: { xs: 16, sm: 20, md: 22 }, // Responsivo
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: collapsible ? "pointer" : "default",
        }}
        onClick={collapsible ? () => setOpen((prev) => !prev) : undefined}
      >
        <span style={{ flex: 1, minWidth: 0 }}>{title}</span>
        {collapsible && (
          <IconButton
            size="small"
            sx={{ color: "#fff", ml: 1 }}
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
      </Box>
      <Collapse in={collapsible ? open : true} timeout="auto">
        <Box sx={{ p: { xs: 2, sm: 4 } }}>{children}</Box>
      </Collapse>
    </Box>
  );
}
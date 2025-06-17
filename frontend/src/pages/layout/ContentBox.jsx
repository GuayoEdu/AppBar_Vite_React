import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ContentBox({ children, title, collapsible = false, action, sx = {} }) {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: 1,
        p: 0,
        width: "100%",
        minWidth: 0,
        mt: 0,
        mb: 2,
        minHeight: "50px",
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        ...sx,
      }}
    >
      <Box
        sx={{
          bgcolor: "#0084ff",
          color: "#fff",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          p: 1,
          fontWeight: 600,
          fontSize: { xs: 16, sm: 20, md: 22 },
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
        <span style={{ flex: 1, minWidth: 0, marginLeft: 10 }}>{title}</span>
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

      <Collapse in={collapsible ? open : true} timeout="auto" unmountOnExit>
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 1 },
            overflowY: "auto",
            maxHeight: { xs: "60vh", sm: "65vh", md: "70vh" },
          }}
        >
          {children}
        </Box>
      </Collapse>

      {action && (
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            py: 1,
            px: 2,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderTop: "1px solid #e0e0e0",
            minHeight: 48,
          }}
        >
          {action}
        </Box>
      )}
    </Box>
  );
}

import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ContentBox from "../layout/ContentBox";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

// Ejemplo de opciones
const options = [
  { label: "140003", value: 140003 },
  { label: "140001", value: 140001 },
  { label: "140002", value: 140002 },
  { label: "140004", value: 140004 },
  { label: "140005", value: 140005 },
  { label: "140006", value: 140006 },
  { label: "140007", value: 140007 },
  { label: "140008", value: 140008 },
  { label: "140009", value: 140009 },
  { label: "140010", value: 140010 },
  { label: "140011", value: 140011 },
  { label: "140012", value: 140012 },
  { label: "140013", value: 140013 },
  { label: "140014", value: 140014 },
  { label: "140015", value: 140015 },
  { label: "140016", value: 140016 },
  { label: "140017", value: 140017 },
  { label: "140018", value: 140018 },
  // ...más códigos
];

export default function StockActual() {
  const [codigoProducto, setCodigoProducto] = useState([]);
  const [nombreProducto, setNombreProducto] = useState([]);
  const [categoriaAsociada, setCategoriaAsociada] = useState([]);
  const [unidadMedida, setUnidadMedida] = useState([]);

  return (
    <div>
      <ContentBox title="Filtros de Busqueda" collapsible>
        <Box sx={{ position: "relative", minHeight: 140, pb: 2 }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "35%", lg: "35%" },
                minWidth: 220,
              }}
            >
              <Box sx={{ fontWeight: 700, mb: 1 }}>Código Producto</Box>
              <Autocomplete
                sx={{ width: "100%" }}
                multiple
                options={options}
                getOptionLabel={(option) => option.label}
                value={codigoProducto}
                onChange={(_, value) => setCodigoProducto(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Codigo Producto"
                    placeholder="Codigo"
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "35%", lg: "35%" },
                minWidth: 220,
              }}
            >
              <Box
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  ml: { xs: 0, sm: 15 },
                }}
              >
                Nombre Producto
              </Box>
              <Autocomplete
                sx={{ width: "100%", ml: { xs: 0, sm: 15 } }}
                multiple
                options={options}
                getOptionLabel={(option) => option.label}
                value={nombreProducto}
                onChange={(_, value) => setNombreProducto(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Nombre Producto"
                    placeholder="Nombre"
                  />
                )}
              />
            </Box>
          </Box>
          {/* Segunda box de filtros */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "35%", lg: "35%" },
                minWidth: 220,
              }}
            >
              <Box sx={{ fontWeight: 700, mb: 1 }}>Categoría Asociada</Box>
              <Autocomplete
                sx={{ width: "100%" }}
                multiple
                options={options}
                getOptionLabel={(option) => option.label}
                value={categoriaAsociada}
                onChange={(_, value) => setCategoriaAsociada(value)}
                
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Categoria Producto"
                    placeholder="Categoria"
                  />
                )}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "45%", md: "35%", lg: "35%" },
                minWidth: 220,
              }}
            >
              <Box
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  ml: { xs: 0, sm: 15 },
                }}
              >
                Unidad Medida
              </Box>
              <Autocomplete
                sx={{ width: "100%", ml: { xs: 0, sm: 15 } }}
                multiple
                options={options}
                getOptionLabel={(option) => option.label}
                value={unidadMedida}
                onChange={(_, value) => setUnidadMedida(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Unidad Medida"
                    placeholder="Unidad de Medida"
                  />
                )}
              />
            </Box>
          </Box>
          <Button
            sx={{
              bgcolor: "rgb(37, 118, 240)",
              color: "white",
              "&:hover": {
                bgcolor: "rgb(25, 94, 192)",
              },
              textTransform: "none",
              fontWeight: 500,
              position: { xs: "static", sm: "absolute" },
              right: { sm: 16 },
              bottom: { sm: 0 },
              mt: { xs: 2, sm: 0 },
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={() => {
              
              setCodigoProducto([]);
              setNombreProducto([]);
              setCategoriaAsociada([]);
              setUnidadMedida([]);
            }}
          >
            Limpiar Filtros
          </Button>
        </Box>
      </ContentBox>

      <ContentBox title="Listado del Registro de los Productos">
        <Box sx={{ p: 2 }}>
          <p>Resultados de stock actual se mostrarán aquí.</p>
        </Box>
      </ContentBox>
    </div>
  );
}
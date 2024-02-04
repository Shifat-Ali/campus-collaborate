import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: ['"Segoe UI"', "sans-serif"].join(","),
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "&.MuiTabs-indicator": {
            width: 0,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: "800",
          "&:hover": {
            borderBottom: "2px solid black",
          },
          "&.Mui-selected": {
            backgroundColor: "#1976d2",
            color: "white",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "87%",
          padding: "10px",

          "& .MuiInputBase-root": {
            borderRadius: "10px",
          },
          "& .MuiInputLabel-root": {},
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        "& .MuiCardMedia-img": {
          "&:hover": {
            opacity: "0.4",
            cursor: "pointer",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        ".intext": {
          backgroundColor: "red",
          cursor: "pointer",
          // display: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#0084bd",
            padding: 10,
            borderRadius: "20px",
            color: "white",
            ".MuiListItemIcon-root": {
              color: "white",
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.boxcon": {
            padding: 0,
          },
        },
      },
    },
  },
});

export default Theme;

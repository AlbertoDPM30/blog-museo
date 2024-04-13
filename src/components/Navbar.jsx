import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Menu, MenuItem, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "/src/assets/ADPM_logo.svg";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Grid container justifyContent="space-between">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Grid container wrap="nowrap" gap={2} alignItems="center">
            <img width={50} src={logo} alt="logotipo" />
            <Typography
              variant="h4"
              color="green"
              fontWeight={800}
              fontFamily="sans-serif"
            >
              Local Museum & Art
            </Typography>
          </Grid>
        </Link>

        <div>
          <Button
            id="btnMenu"
            color="success"
            aria-controls={open ? "basicMenu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon sx={{ fontSize: "3rem" }} />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "btnMenu",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography variant="body1" color="initial">
                  Inicio
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <Typography variant="body1" color="initial">
                  Quienes somos
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <Typography variant="body1" color="initial">
                  Contacto
                </Typography>
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </Grid>
    </nav>
  );
};

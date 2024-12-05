import React from "react";
import s from "./PikemonList.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { setSelectedPikemons } from "../../stores/selectedPokemonSlice";
import { useNavigate } from "react-router-dom";

const PikemonsCard = ({ pikemons, theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenModal = (pikemon) => {
    dispatch(setSelectedPikemons(pikemon));
  }

  return (
    <Card sx={{ maxWidth: 270 }} className={theme === "darkTheme" ? s.darkTheme2 : s.lightTheme2}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={pikemons.sprite}
      />
      <CardContent className={theme === "darkTheme" ? s.darkTheme2 : s.lightTheme2}>
        <Typography gutterBottom variant="h5" component="div">
          {pikemons.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'inherit' }}>
          Types: {pikemons.types.join(", ")}
        </Typography>
      </CardContent>
      <CardActions className={theme === "darkTheme" ? s.darkTheme2 : s.lightTheme2}>
        <Button size="small" onClick={() => handleOpenModal(pikemons)}>Modal</Button>
        <Button size="small" onClick={() => navigate(`/pikemon/${pikemons.id}`)}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PikemonsCard;

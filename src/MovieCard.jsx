import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog } from '@mui/material';
import React from 'react';
import {useState} from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type, Plot } }) => {
const [isShow, setisShow] = useState(false)

const handleCloseModal = () => {
  setisShow(false);
}

  return (
    <>
      <div className="movie" key={imdbID}  onClick={() => setisShow(true)}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
      
      <Dialog open={isShow} onClose={handleCloseModal} aria-labelledby="dialog-title" aria-describedby='dialog-description'>
        <DialogTitle id="dialog-title">
          Information
        </DialogTitle>
        <DialogContent id="dialog-description">
          <DialogContentText>
            <p>{Title}</p>
            <p>{Year}</p>
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            <p>{Plot}</p>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MovieCard;
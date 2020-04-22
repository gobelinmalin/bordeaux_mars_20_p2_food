import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from "./RecipeModal.module.css";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 3px 10px black",
    padding: theme.spacing(2, 4, 3),
    width: '900px',
    height: '600px',
    padding: '0px',
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [recipe, setRecipe] = React.useState(
    {}
  )

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(props)
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${props.dataRecipe}/information`;
    axios
      .get(
        url,
      {
        headers: {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
        }
      }
    )
    .then(response => response.data)
    .then(data => setRecipe(data))
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Read more
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

            <div className={styles.ContainerModalFlex}>
    
              <div 
              className={styles.divImg}
              style={{ backgroundImage:`url(${recipe.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width:"600px",
              height: "600px"
            }} />
              
              <div>
                <h1 className={styles.title} id="transition-modal-title">{recipe.title}</h1>
                <p>Dish types</p>
                <p>Cooking minutes</p>
                <p>Preparation minutes</p>
                <p>Ingredients list : </p>
                <ul>
                  
                  {/* { Object.entries(recipe).map(element => element.map(moreElem => console.log(moreElem))) } */}

                  { console.log(Object.entries(recipe)
                    .map(element => element
                      .map(moreElem => moreElem)
                    )
                  

                  )}


                       
                </ul>
                
                <p>informations (html à parser)</p>
                <p>Diets</p>
              </div>
            </div>

            {/* <button onClick={handleClose}>FERMER LA MODAL</button> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
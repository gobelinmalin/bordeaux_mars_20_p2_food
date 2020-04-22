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
    marginTop: '80px',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 3px 10px black",
    padding: theme.spacing(2, 4, 3),
    width: '900px',
    height: '700px',
    padding: '0px',
    overflow: 'scroll',
  },
}));

export default function TransitionsModal(props) {
  const { dataRecipe} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [recipe, setRecipe] = React.useState(
    []
  )

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(props)
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${dataRecipe}`
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
  }, [dataRecipe])



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
              <img className={styles.closeButton} onClick={handleClose} src="../../../../Images/Icone/icon-close-white@2x.png" alt ="close modal"/>
              <div 
                className={styles.divImg}
                style={{ backgroundImage:`url(${recipe.map(element => element.image)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: "300px",
                width: "900px"
                  }}
              />

              <div className={styles.RecipeTitle}>
                <div><h1 className={styles.title} id="transition-modal-title">{recipe.map(element => element.title)}</h1></div>
                <div className={styles.RecipeIcon}>
                  <div><img src="../../../../Images/Icone/icon-cook-time@2x.png"alt="icone-cooking-min"/><small> Cook {recipe.map(element => element.cookingMinutes)} min</small></div>
                  <div><img src="../../../../Images/Icone/icon-people-count@2x.png"alt="icone-cooking-min"/><small> For {recipe.map(element => element.servings)} people</small></div>
                  <div><img src="../../../../Images/Icone/icon-prep-time@2x.png"alt="icone-cooking-min"/><small> Prep {recipe.map(element => element.preparationMinutes)} min</small></div>
                </div>
                {/* <small>Dish types : {recipe.map(element => element.dishTypes.map(dish => <span>{dish},</span>))}</small> */}
              </div>
              
              <div className={styles.RecipeDetail}>

                
                <h2 className={styles.title2}>Ingredients list </h2>
                <ul style={{columns: 3 }}className={styles.orderList}>
                    {recipe.map(element => element.extendedIngredients.map(ingredient => <li>{ingredient.name}</li>))}                      
                </ul>
                <h2 className={styles.title2} >Instructions</h2>
                <ol>
                  {recipe.map(element => element.analyzedInstructions
                      .map(element2 => element2.steps
                      .map(element3 => <li>{element3.step}</li>))
                      )
                    
                  }
                </ol>
                <h2 className={styles.title2} >Diets</h2>
                <ul className={styles.orderList}>
                  {recipe.map(element => element.diets.length > 0 ? recipe.map(element => element.diets.map(diet => <li>{diet}</li>)) : <p>No special diets</p>)}                  
                  {/* {console.log(recipe.map(element => element.diets))} */}
                  {/* {recipe.map(item => console.log(item.diets.length))}       */}
                </ul>

              </div>
            </div>

            {/* <button onClick={handleClose}>FERMER LA MODAL</button> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
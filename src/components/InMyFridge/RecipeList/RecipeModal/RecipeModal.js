import { withStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade';
import styles from "./RecipeModal.module.css";
import axios from 'axios';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#F29B20',
    color:'white',
    fontSize: 12,
    fontFamily:'Rubik',
    fontWeight: 'bold'
  },
  arrow : {
    color: '#F29B20'
  }
}))(Tooltip);

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
    overflowY: 'auto',
    overflowX: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '360px',
      height: '665px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '630px',
      height: '750px',
    },
  },
}));


export default function TransitionsModal(props) {
  const { dataRecipe} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [nutrition, setNutrition] = useState({});
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // console.log(props)
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

  useEffect(() => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${dataRecipe}/nutritionWidget.json`;
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
      .then(data => setNutrition(data))
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
                width: "885px"
                  }}
              />

              <div className={styles.RecipeTitle}>
                <div>
                  <h1 className={styles.title} id="transition-modal-title">{recipe.map(element => element.title)}</h1>
                </div>
                <div className={styles.RecipeIcon}>
                  <div>
                      <img src="../../../../Images/Icone/icon-cook-time@2x.png"alt="icone-cooking-min"/>
                      {recipe.map(element => element.cookingMinutes !== undefined
                      ? <small>Cook {recipe.map(element => element.cookingMinutes)} min</small>
                      : <small>no cooking time</small>
                      )} 
                  </div>
                  <div>
                    <img src="../../../../Images/Icone/icon-people-count@2x.png"alt="icone-cooking-min"/>
                    <small>{recipe.map(element => element.servings)} people</small>
                  </div>
                  <div>
                  <img src="../../../../Images/Icone/icon-prep-time@2x.png"alt="icone-cooking-min"/>
                    {console.log(recipe.map(element => element.preparationMinutes))}
                    {recipe.map(element => element.preparationMinutes !== undefined
                    ? <small> Prep {recipe.map(element => element.preparationMinutes)} min</small>
                    : <small>no prep. time</small>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={styles.RecipeDetail}>
                
                <h2 className={styles.title2}>Ingredients list</h2><hr/>
                <ul className={styles.orderList}>
                    {recipe.map(element => element.extendedIngredients.map(ingredient => <li className={styles.IngredientsLi}>{ingredient.name}</li>))}                      
                </ul>
                <h2 className={styles.title2}>Instructions</h2><hr/>
                    <ol className={styles.InstructionsOl}>
                        {console.log(recipe.map(element => element.preparationMinutes))}
                        {recipe.map(element => element.preparationMinutes !== undefined
                        ? <small> Prep {recipe.map(element => element.preparationMinutes)} min</small>
                        : <small>no prep. time</small>
                        )}
                    </ol>
                  <div><img src="../../../../Images/Icone/icon-cook-time@2x.png"alt="icone-cooking-min"/><small> Cook {recipe.map(element => element.cookingMinutes)} min</small></div>
                  <div><img src="../../../../Images/Icone/icon-people-count@2x.png"alt="icone-cooking-min"/><small> For {recipe.map(element => element.servings)} people</small></div>
                  <div><img src="../../../../Images/Icone/icon-prep-time@2x.png"alt="icone-cooking-min"/><small> Prep {recipe.map(element => element.preparationMinutes)} min</small></div>



                <div className={styles.NutritionContainer}>
                  <div>
                    <img className={styles.NutritionImg} title="calories" src="../../../../Images/Icone/icone-kcal2x.png" alt="calories"/>
                    <small>{nutrition.calories}</small>
                  </div>
                  
                  <div>
                    <img className={styles.NutritionImg} title="fat" src="../../../../Images/Icone/icone-fat2x.png" alt="fat"/>
                    <small>{nutrition.fat}</small>
                  </div> 
                  
                  <div>
                    <img className={styles.NutritionImg} title="carbs" src="../../../../Images/Icone/icone-carbs2x.png" alt="carbs"/>
                    <small>{nutrition.carbs}</small>
                  </div>
                
                  <div >
                    <img className={styles.NutritionImg} title="protein" src="../../../../Images/Icone/icone-prot2x.png" alt="protein"/>
                    <small>{nutrition.protein}</small>
                  </div>
                </div>
                
              </div>
              
              <div className={styles.RecipeDetail}>
                <h2 className={styles.title2}>Ingredients list</h2>
                <div className={styles.ContainerListIngredients}>
                  <ul style={{ columns: 3 }} className={styles.orderList}>
                      {recipe.map(element => element.extendedIngredients.map(ingredient => <li>{ingredient.name}</li>))}                      
                  </ul>
                </div>
                <h2 className={styles.title2} >Instructions</h2>
                  <ol>
                    {recipe.map(element => element.analyzedInstructions.length > 0 
                    ? recipe.map(element => element.analyzedInstructions.map(element2 => element2.steps.map(element3 => <li>{element3.step}</li>)))
                    : <p className={styles.noSpecialInfo}>No special instructions</p>
                    )
                    }
                    {recipe.map(element => element.analyzedInstructions
                        .map(element2 => element2.steps
                        .map(element3 => <li className={styles.InstructionsLi}>{element3.step}</li>))
                        )  
                    }
                  </ol>
                <h2 className={styles.title2} >Diets</h2><hr/>
                  <ul className={styles.orderList}>
                    {recipe.map(element => element.diets.length > 0
                    ? recipe.map(element => element.diets.map(diet => <li>{diet}</li>))
                    : <p className={styles.noSpecialInfo}>No special diets</p>)}
                    {recipe.map(element => element.diets.length > 0 ? recipe.map(element => element.diets.map(diet => <li>{diet}</li>)) : <p>No special diets</p>)}                  
                  </ul>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
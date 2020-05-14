import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styles from "./RecipeModal.module.css";
import axios from 'axios';
import NutritionInfo from './NutritionInfo';

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
    width: '885px',
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
    [theme.breakpoints.up('lg')]: {
      width: '885px',
      height: '700px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '900px',
      height: '900px',
    },
  },
}));


export default function TransitionsModal(props) {
  const { dataRecipe} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const [diet, setDiet ] = useState([]); //nutrition eements with the basico search (In my fridge page)
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
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
      .then(data => {
        const newArray = data.good.concat(data.bad)
        const finalArray = newArray.filter(element => {
          switch(element.title) {
            case 'Protein':
              return element;
              break;
            case 'Fat':
              return element;
              break;
            case 'Carbohydrates':
              return element;
              break;
            case 'Calories':
              return element;
              break;
            default:
              break;
          }
          return null;
        })
        setDiet(finalArray)
        })
      .catch((err) => {
        console.log(err);
      })
  }, [dataRecipe])

  return (
    <div className={styles.BodyModal}>
      <button type="button" onClick={handleOpen}></button>
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
                      {recipe.map((element, index) => element.cookingMinutes !== undefined
                      ? <small key={index}>Cook {recipe.map(element => element.cookingMinutes)} min</small>
                      : <small>no cooking time</small>
                      )} 
                  </div>
                  <div>
                    <img src="../../../../Images/Icone/icon-people-count@2x.png"alt="icone-cooking-min"/>
                    <small>{recipe.map(element => element.servings)} people</small>
                  </div>
                  <div>


                  <img src="../../../../Images/Icone/icon-prep-time@2x.png"alt="icone-cooking-min"/>
                    {recipe.map((element, index) => element.preparationMinutes !== undefined
                    ? <small key={index}> Prep {recipe.map(element => element.preparationMinutes)} min</small>
                    : <small>no prep. time</small>
                    )}
                  </div>

                </div>
              </div>
                <div className={styles.NutritionContainer}>
                 {/* If its a complexe nutrition, set specific categories, if not set the other one */}
                  {
                    props.complexeNutrition
                    ?  props.complexeNutrition.map((element, index) => {
                      return <NutritionInfo
                              key={index}
                              icon={element.title}
                              title={element.title}
                              amount={element.amount}
                              unit={element.unit}
                      />
                    })

                    : diet.map((element, index) => {
                      return <NutritionInfo
                              key={index}
                              icon={element.title}
                              title={element.title}
                              amount={element.amount}
                              unit={element.unit}
                      />
                    })
                  }                   
                
                </div>            
              </div>              
              <div className={styles.RecipeDetail}>
                <h2 className={styles.title2}>Ingredients list</h2><hr/>
                <div className={styles.ContainerListIngredients}>
                  <ul className={styles.orderList}>
                      {recipe.map(element => element.extendedIngredients.map((ingredient, index) => <li key={index}>{ingredient.name}</li>))}                      
                  </ul>
                </div>

                <h2 className={styles.title2} >Instructions</h2><hr/>
                  <ol className={styles.InstructionsOl}>
                    {recipe.map(element => element.analyzedInstructions.length > 0 
                    ? recipe.map(element => element.analyzedInstructions.map(element2 => element2.steps.map((element3, index) => <li key={index} className={styles.InstructionsLi}>{element3.step}</li>)))
                    : <p className={styles.noSpecialInfo}>No special instructions</p>
                    )
                    }
                  </ol>
                <h2 className={styles.title2} >Diets</h2><hr/>
                <div className={styles.ContainerListIngredients}>
                  <ul className={styles.orderList}>
                    {recipe.map(element => element.diets.length > 0
                    ? recipe.map(element => element.diets.map((diet, index) => <li key={index}>{diet}</li>))
                    : <p className={styles.noSpecialInfo}>No special diets</p>)}
                  </ul>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
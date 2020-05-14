import React, { useState } from 'react';
import MiniRecipe from '../InMyFridge/RecipeList/MiniRecipe/MiniRecipe';
import axios from 'axios';
import styles from "./Diet.module.css";
import Loader from "../Assets/CssLoader/Loader";
import LogoTypeMeal from '../Assets/LogoTypeMeal/LogoTypeMeal';
import MainCourse from '../../Images/Icone/plate.png';
import Breakfast from '../../Images/Icone/pancake.png';
import Desert from '../../Images/Icone/cookie.png';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon : {
        marginLeft: '60px'
    },
    icon2 : {
        marginLeft: '80px'
    },
    icon3 : {
        marginLeft: '93px'
    }
})

const Diet = () => {

    const classes = useStyles();

    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#10AC84',
          }
        },
      });
    
    // données des inputs
    const [ dataInput, setDataInput] = useState({
        diet: '',
        intolerances: '',
        cuisine: '',
        excludeIngredients: '',
        maxCalories: 500,
        minProtein: 0,
        maxFat: 100,
        maxSaturatedFat: 100,
        minCarbs: 0,
        maxSugar: 150,
        minVitaminB12: 0,
        minIron: 0,
        minCalcium: 0,
        maxCholesterol: 50,
        minFiber: 0,
        maxSodium: 100,
        minMagnesium: 0,
        minVitaminC: 0,
        type: '',
        recipeResult: [],
        loading: false
    });

    const handleChangeInputs = (e) => {
        setDataInput({
            ...dataInput,
            [e.target.name] : e.target.value
        })
    };

    const handleChangeRadio = (e) => {

        switch(e.target.value) {
            case 'breakfast':
                setDataInput({
                    ...dataInput,
                    type: e.target.value
                })
            break;
            case 'main course': 
                setDataInput({
                    ...dataInput,
                    type: e.target.value
                })
            break;
            case 'dessert':
                setDataInput({
                    ...dataInput,
                    type: e.target.value
                })
            break;
            default:
                break;
        }
    }

    const complexeSearch = () => {
        setDataInput({
            ...dataInput,
            recipeResult: [],
            loading: true
        })
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?ranking=2&diet=${dataInput.diet}&intolerances=${dataInput.intolerances}&cuisine=${dataInput.cuisine}&excludeIngredients=${dataInput.excludeIngredients}&maxCalories=${dataInput.maxCalories}&minProtein=${dataInput.minProtein}&maxFat=${dataInput.maxFat}&maxSaturatedFat=${dataInput.maxSaturatedFat}&minCarbs=${dataInput.minCarbs}&maxSugar=${dataInput.maxSugar}&minIron=${dataInput.minIron}&minCalcium=${dataInput.minCalcium}&maxCholesterol=${dataInput.maxCholesterol}&minFiber=${dataInput.minFiber}&maxSodium=${dataInput.maxSodium}&minMagnesium=${dataInput.minMagnesium}&type=${dataInput.type}&minVitaminB12=${dataInput.minVitaminB12}&minVitaminC=${dataInput.minVitaminC}`
        
        axios.get(url,
            {
                headers: {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                }
            })
        .then(response => response.data)
        .then(data => setDataInput({
            ...dataInput,
            recipeResult: data.results,
            loading: false,
        }
        ))
        .catch(error => console.log(error));
    }

    return(
        <React.Fragment>
            <div className={dataInput.recipeResult.length > 0 ? styles.ScreenFull : styles.DietContainer}>
                <div className={styles.ContainerTitle}>
                    <div className={styles.ContainerTitleImgBackground} />
                    <h1>Diet Extended Search</h1>
                </div>
                <div className={styles.Diets}>
                    <div className={styles.FormDietContainer}>
                        <div className={styles.ContainerSectionForm}>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.diet}
                                        label="Diet"
                                        name='diet'
                                        type="text"
                                        placeholder="ex: vegetarian"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>

                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.intolerances}
                                        label="Intolerances"
                                        name='intolerances'
                                        type="text"
                                        placeholder="ex: gluten"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>

                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.cuisine}
                                        label="Cuisine"
                                        name='cuisine'
                                        type="text"
                                        placeholder="ex: italian"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                        </div>

                        <div className={styles.ContainerSectionForm}>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.excludeIngredients}
                                        label="Exclude ingredients"
                                        name='excludeIngredients'
                                        type="text"
                                        placeholder="ex: mushroom"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>

                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.maxCalories}
                                        label="Max. calories (cal)"
                                        name='maxCalories'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                        min="200"
                                    />
                                </ThemeProvider>
                            </div>

                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minProtein}
                                        label="Min. protein (gr)"
                                        name='minProtein'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                        </div>
                        
                        <div className={styles.ContainerSectionForm}>

                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.maxFat}
                                        label="Fat (gr)"
                                        name='maxFat'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.maxSaturatedFat}
                                        label="Max saturated fat (gr)"
                                        name='maxSaturatedFat'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>

                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minCarbs}
                                        label="Min carbs (gr)"
                                        name='minCarbs'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            
                        </div>

                        <div className={styles.ContainerSectionForm}>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.maxSugar}
                                        label="Max sugar (gr)"
                                        name='maxSugar'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minVitaminB12}
                                        label="Min vitamin B12 (µg)"
                                        name='minVitaminB12'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minIron}
                                        label="Min iron (g)"
                                        name='minIron'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                        </div>


                        <div className={styles.ContainerSectionForm}>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minCalcium}
                                        label="Min calcium (mg)"
                                        name='minCalcium'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.maxCholesterol}
                                        label="Max cholesterol (mg)"
                                        name='maxCholesterol'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minFiber}
                                        label="Min fiber (mg)"
                                        name='minFiber'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                        </div>

                        <div className={styles.ContainerSectionForm}>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.maxSodium}
                                        label="Max sodium (g)"
                                        name='maxSodium'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minMagnesium}
                                        label="Magnesium (g)"
                                        name='minMagnesium'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                            <div className= {styles.FormLabel}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        onChange={handleChangeInputs}
                                        value={dataInput.minVitaminC}
                                        label="Vitamin C (mg)"
                                        name='minVitaminC'
                                        type="number"
                                        variant="outlined"
                                        size="small"
                                        color="primary"
                                    />
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>


                    <div className={[styles.FormLabel, styles.TypeMeal].join(' ')}>
                        <h3>Type of course :</h3>
                        <div className={styles.LabelInRow}>
                            <ThemeProvider theme={theme}>
                                <RadioGroup onChange={handleChangeRadio}>
                                <div className={styles.InputInRow}>
                                    <div style={{marginBottom: '8px'}}><LogoTypeMeal logo={MainCourse} /></div>
                                    <FormControlLabel value="main course" control={<Radio color="primary" className={classes.icon}/>} label="Main course" labelPlacement="start"/>
                                </div>
                                <div className={styles.InputInRow}>
                                    <LogoTypeMeal logo={Breakfast}/>
                                    <FormControlLabel value="breakfast" control={<Radio color="primary" className={classes.icon2}/>} label="Breakfast" labelPlacement="start"/>
                                </div>
                                <div className={styles.InputInRow}>
                                    <LogoTypeMeal logo={Desert}/>
                                    <FormControlLabel value="dessert" control={<Radio color="primary" className={classes.icon3}/>} label="Dessert" labelPlacement="start"/>
                                </div>
                                </RadioGroup>
                            </ThemeProvider>
                        </div>
                </div>
                    
                    <div className={styles.SearchButton}>
                        <button className={styles.buttonCall} onClick={complexeSearch}>Recherche</button>
                    </div>

                </div>

                <div className={styles.ContainerSpinner}>
                    {
                        dataInput.loading
                        ? <Loader />
                        : null
                    }
                </div>
                
                <div className={styles.RecipesContainer}>
                    {dataInput.recipeResult.map((recipe, index) => {
                        return <MiniRecipe
                                        key={index}
                                        image={recipe.image}
                                        title={recipe.title}
                                        id={recipe.id}
                                        nutrition={recipe.nutrition}
                                    />
                    })}
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Diet;
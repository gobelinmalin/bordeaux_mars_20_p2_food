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

    //const [loading, setLoading] = useState(false);

    const handleChangeInputs = (e) => {
        console.log(e.target.value)
        setDataInput({
            ...dataInput,
            [e.target.name] : e.target.value
        })
    };

    const handleChangeRadio = (e) => {
        console.log(e.target.value)

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
                "x-rapidapi-key": "788f9512demsh2ae41414a86ef90p1a01bcjsn23eee9f9e33b"
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
                                {/* <label>Diet</label>
                                <input placeholder='ex: vegetarian' onChange={handleChangeInputs} value={dataInput.diet} type="text" name='diet' /> */}
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
                                {/* <label>Intolerances</label>
                                <input placeholder='ex: gluten' onChange={handleChangeInputs} value={dataInput.intolerances} type="text" name='intolerances' /> */}
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
                                {/* <label>Cuisine</label>
                                <input placeholder='ex: italian' onChange={handleChangeInputs} value={dataInput.cuisine} type="text" name='cuisine' /> */}
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
                                {/* <label>Exclude ingredients</label>
                                <input placeholder='ex: mushroom' onChange={handleChangeInputs} value={dataInput.excludeIngredients} type="text" name='excludeIngredients' /> */}
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
                                {/* <label>Max. calories (cal)</label>
                                <input placeholder='min. 200' onChange={handleChangeInputs} value={dataInput.maxCalories} type="number" min="200" name='maxCalories' /> */}
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
                                {/* <label>Min. protein (gr)</label>
                                <input placeholder="ex: 25" onChange={handleChangeInputs} value={dataInput.minProtein} type="number" name='minProtein' /> */}
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
                                {/* <label>Fat (gr)</label>
                                <input placeholder="ex: 10" onChange={handleChangeInputs} value={dataInput.maxFat} type="number" min="50" name='maxFat' /> */}
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
                                {/* <label>Max saturated fat (gr)</label>
                                <input placeholder="ex: 50" onChange={handleChangeInputs} value={dataInput.maxSaturatedFat} type="number" min="50" name='maxSaturatedFat' /> */}
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
                                {/* <label>Min carbs (gr)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minCarbs} type="number" name='minCarbs' /> */}
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
                                {/* <label>Max sugar (gr)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.maxSugar} type="number" min="15" name='maxSugar' /> */}
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
                                {/* <label>Min vitamin B12 (µg)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minVitaminB12} type="number" name='minVitaminB12' /> */}
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
                                {/* <label>Min iron (g)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minIron} type="number" name='minIron' /> */}
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
                                {/* <label>Min calcium (mg)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minCalcium} type="number" name='minCalcium' /> */}
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
                                {/* <label>Max cholesterol (mg)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.maxCholesterol} type="number" name='maxCholesterol' /> */}
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
                                {/* <label>Min fiber (mg)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minFiber} type="number" name='minFiber' /> */}
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
                                {/* <label>Max sodium (g)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.maxSodium} type="number" name='maxSodium' /> */}
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
                                {/* <label>Magnesium (g)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minMagnesium} type="number" name='minMagnesium' /> */}
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
                                {/* <label>Vitamin C (mg)</label>
                                <input placeholder="ex: 30" onChange={handleChangeInputs} value={dataInput.minVitaminC} type="number" name='minVitaminC' /> */}
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

                            {/* <div className={styles.InputInRow}>
                                <LogoTypeMeal logo={MainCourse}/>
                                <label>main course</label>
                                <input onChange={handleChangeRadio} value="main course" type="radio" name='type' />
                            </div>
                            <div className={styles.InputInRow}>
                                <LogoTypeMeal logo={Breakfast}/>
                                <label>breakfast</label>
                                <input onChange={handleChangeRadio} value='breakfast' type="radio" name='type' />
                            </div>
                            <div className={styles.InputInRow}>
                                <LogoTypeMeal logo={Desert}/>
                                <label>dessert</label>
                                <input onChange={handleChangeRadio} value='dessert' type="radio" name='type' />
                            </div> */}
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
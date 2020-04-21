import Meat from '../Images/Icone/Meat.png';
import Vegetables from '../Images/Icone/Vegetables.png';
import Fish from '../Images/Icone/Fish.png';
import Cereals from '../Images/Icone/Cereals.png';
import Fruits from '../Images/Icone/Fruits.png';
import Dairy from '../Images/Icone/Milk.png';

const ingredients = [
    {
        title: 'Vegetables',
        icon: Vegetables,
        ingredientsName: [
            { name: 'broccoli'},
            { name: 'carrot'},
            { name: 'salad'},
            { name: 'tomato'},
            { name: 'eggplant'},
            { name: 'potato'},
            { name: 'cauliflower'},
            { name: 'cabbage'},
            { name: 'asparagus'},
            { name: 'beetroot'},
            { name: 'artichoke'},
            { name: 'celery'},
            { name: 'cucumber'},
            { name: 'mushroom'},
            { name: 'onion'},
            { name: 'pea'},
            { name: 'pumpkin'},
            { name: 'radish'},
            { name: 'lettuce'},
            { name: 'sweet potato'},
            { name: 'brussel sprouts'},
            { name: 'zucchini'},
            { name: 'leek'},
            { name: 'celery'},
            { name: 'chili'},
            { name: 'garlic'},
            { name: 'basil'},
            { name: 'coriander'},
            { name: 'parsley'},
            { name: 'dill'},
            { name: 'rosemary'},
            { name: 'oregano'},
            { name: 'cinnamon'},
            { name: 'saffron'},
            { name: 'green bean'},
            { name: 'bean'},
            { name: 'chickpea'},
            { name: 'lentil'},

            
        ]
    },
    {
        title: 'Meat',
        icon: Meat,
        ingredientsName: [
            { name: "elk meat"},
            { name: "calf"},
            { name: "sheep"},
            { name: "lamb"},
            { name: "pork"},
            { name: "beef"},
            { name: "rabbit"},
            { name: "turkey"},
            { name: "duck"},
            { name: "goose"},
            { name: "quail"},
            { name: "chicken"},
            { name: "hen"},
            { name: "venison"},
            { name: "boar"},
            { name: "deer"},
            { name: "partridge"},
            { name: "guinea fowl"},
        ]  
    },
    {
        title: "Fish",
        icon: Fish,
        ingredientsName: [
            { name: "tuna"},
            { name: "salmon"},
            { name: "bar"},
            { name: "cod"},
            { name: "mackerel"},
            { name: "sardine"},
            { name: "hake"},
        ]  
        
    },
    {
        title: "Cereals",
        icon: Cereals,
        ingredientsName: [
            { name: 'corn'},
            { name: 'rice'},
            { name: 'rye'},
            { name: 'oat'},
            { name: 'wheat'},
            { name: 'buckwheat'},
            { name: 'barley'},
            { name: 'millet'},
            { name: 'bulgur'},
            { name: 'soft wheat'},
            { name: 'spelt'},
            { name: 'oatmeal'},
            { name: 'kamut'},
            { name: 'oatbran'},
            { name: 'amaranth'},
            { name: 'polenta'},
            { name: 'quinoa'},
            { name: 'brown rice'},
            { name: 'teff'},
        ]
    },
    {
        title: "Fruits",
        icon: Fruits,
        ingredientsName: [
            // { name: 'corn'},
            // { name: 'rice'},
            // { name: 'rye'},
            // { name: 'oat'},
            // { name: 'wheat'},
            // { name: 'buckwheat'},
        ]
    },
    {
        title: "Dairy", // produits laitiers
        icon: Dairy,
        ingredientsName: [
            { name: 'goat cheese'},
            { name: 'goat\'s milk'},
            { name: 'cottage'},
            { name: 'fresh cream'},
            { name: 'brie'},
            { name: 'camembert'},
            { name: 'cheddar'},
            { name: 'edam'},
            { name: 'comté'},
            { name: 'feta cheese'},
            { name: 'mascarpone'},
            { name: 'mozzarella'},
            { name: 'pecorino'},
            { name: 'parmesan'},
            { name: 'ricotta'},
            { name: 'roquefort'},
            { name: 'butter'},
            { name: 'yogurt'},
            { name: 'cream cheese'},
        ]
    },
]

export default ingredients;
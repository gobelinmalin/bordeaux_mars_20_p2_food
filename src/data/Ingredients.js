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
        ]
    },
    {
        title: 'Meat',
        icon: Meat,
        ingredientsName: [
            { name: "calf"},
            { name: "sheep"},
            { name: "turkey"},
            { name: "pork"},
            { name: "duck"},
            { name: "beef"},
            { name: "rabbit"},
            { name: "lamb"},
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
            // { name: 'corn'},
            // { name: 'rice'},
            // { name: 'rye'},
            // { name: 'oat'},
            // { name: 'wheat'},
            // { name: 'buckwheat'},
        ]
    },
]

export default ingredients;
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
            { name : "anchovy"},
            { name : "squid"},
            { name : "caviar"},
            { name : "crab"},
            {name : "shrimp"},
            {name : "bream"},
            {name : "dashi"},
            {name : "frog"},
            {name : "herring"},
            {name : "oysters"},
            {name : "langoustine"},
            {name : "flounder"},
            {name : "monkfish"},
            {name : "mussels"},
            {name : "scallop"},
            {name : "octopus"},
            {name : "trout"},
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
            { name: "apricot"},
            { name: "pineapple"},
            { name: "avocado"},
            { name: "berries"},
            { name: "cranberry"},
            { name: "blackcurrant"},
            { name: "cherry"},
            { name : "chestnut"},
            { name : "lemon"},
            { name : "lime"},
            { name : "lemongrass"},
            {name : "pumpkin"},
            {name : "clementine"},
            {name : "date"},
            {name : "fig"},
            {name : "strawberry"},
            {name : "raspberry"},
            {name : "guava"},
            {name : "currant"},
            {name : "kiwi"},
            {name : "lychee"},
            {name : "mandarin"},
            {name : "mango"},
            {name : "melon"},
            {name : "blackberry"},
            {name : "blueberry"},
            {name : "coconut"},
            {name : "orange"},
            {name : "grapefruit"},
            {name : "papaya"},
            {name : "watermelon"},
            {name : "peach"},
            {name : "pear"},
            {name : "apple"},
            {name : "grape"},
            {name : "yuzu"}
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
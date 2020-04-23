import Meat from '../Images/Icone/Meat.png';
import Vegetables from '../Images/Icone/Vegetables.png';
import Fish from '../Images/Icone/Fish.png';
import Cereals from '../Images/Icone/Cereals.png';

const ingredients = [
    {
        title: 'Vegetables',
        icon: Vegetables,
        ingredientsName: [
            { name: 'broccoli'},
            { name: 'carrot'},
            { name: 'salad'},
            { name: 'tomato'},
            { name: 'aubergine'},
            { name: 'potato'},
        ]
    },
    {
        title: 'Meat',
        icon: Meat,
        ingredientsName: [
            { name: "veau"},
            { name: "mouton"},
            { name: "dinde"},
            { name: "porc"},
            { name: "canard"},
            { name: "boeuf"},
            { name: "lapin"},
            { name: "hérisson"}
        ]  
    },
    {
        title: "Fish",
        icon: Fish,
        ingredientsName: [
            { name: "thon"},
            { name: "saumon"},
            { name: "bar"},
            { name: "morue"},
            { name: "maquereau"},
            { name: "sardine"},
            { name: "baleine"}
        ]  
        
    },
    {
        title: "Cereals",
        icon: Cereals,
        ingredientsName: [
            { name :'maïs'},
            { name: 'épeautre'},
            { name: 'seigle'},
            { name: 'avoine'},
            { name: 'blé'},
        ]
    },
]

export default ingredients;
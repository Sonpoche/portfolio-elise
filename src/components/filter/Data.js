import Bebe from "../../assets/img/imgbebe.png";
import Enfant from "../../assets/img/imgenfant.png";
import Adulte from "../../assets/img/imgadulte.png";
import Vieux from "../../assets/img/imgvieux.png";

export const psychomotData = [
    {
        id: 1,
        image: Bebe,
        category: 'Bébé',
        description: <>
        <br></br>
        <br></br>
        <h3>
            Bébé
        </h3>
            <ul className="ul_data">
            <li> Guidance parentale</li> 
            <li>Retard de développement</li> 
            <li>Prématurité</li> 
            <li>Difficultés d’interactions, etc...</li> 
            </ul>
    </>,
    },

    {
        id: 2,
        image: Enfant,
        category: 'Enfant',
        description: <>
        <br></br>
        <br></br>
    <h3>
        Enfant
    </h3>
        <ul className="ul_data"> 
           <li>Trouble déficitaire de l’attention avec ou sans hyperactivité (TDA/H)</li>
           <li>Trouble du spectre autistique (TSA)</li> 
           <li>Troubles des apprentissages (dyspraxique, dysgraphique..)</li>  
           <li>Trouble moteur (Trouble acquisition des coordinations TAC…) </li> 
           <li>Trouble des conduites alimentaires (TCA)</li> 
           <li>Trouble anxieux</li>  
           <li>Trouble du schéma corporel</li>  
           <li>Trouble perturbateur du contrôle, des émotions et des conduites.</li>  
           <li>Retard de développement psychomoteur</li>  
           <li>Difficulté d’orientation spatio-temporel</li>  
           <li>Difficulté graphique ou de motricité fine</li> 
           <li>Stress post traumatique </li>  
           <li>Maladie génétique</li>  
           <li>Handicap moteur et/ou intellectuel et/ou sensoriel, etc...</li>  
           
        </ul>
    </>,
    },

    {
        id: 4,
        image: Adulte,
        category: 'Adulte',
        description: <>
        <br></br>
        <br></br>
    <h3>
        Adolescent | Adulte
    </h3>
        <ul className="ul_data"> 
            <li>Anxiété</li> 
            <li>AVC, sclérose en plaques, traumatisme crânien, ...</li> 
            <li>Stress post-traumatique</li> 
            <li>Trouble psychiatrique</li> 
            <li>Dépression postpartum et lien avec la grossesse  ... </li> 
            <li>Handicaps moteurs et/ou intellectuels et/ou sensoriels</li> 
            <li>Burn out (travail ou épuisement de l’aidant)</li>
            <li>Diverses pathologies</li>
            <li>L’évolution des troubles de l’enfance qui parasite la vie professionnelle ou personnelle (exemple : un déficit de l’attention peut entrainer des difficultés à l’obtention du permis de conduire), etc ...</li>
        </ul>
    </>,
        
    },

    {
        id: 5,
        image: Vieux,
        category: 'Senior',
        description:
        <>
        <br></br>
        <br></br>
    <h3>
        Personne Agée
    </h3>
        <ul className="ul_data">
            <b> Lors du vieillissement pathologique avec la présence de maladies neurologiques :</b>
            <li>Démence Alzheimer </li>
            <li>Corps de Lewy </li>
            <li>Démence frontale </li>
            <li>Démence cardio-vasculaire </li>
            <li>Parkinson </li> 
            <li>Accident vasculaire cérébral (AVC), ...</li> <br></br>
           <b> Lors du vieillissement naturel de la personne âgée : </b>
            <li>Trouble de la marche, équilibre </li>
            <li>Trouble de la mémoire </li>
            <li>Anxiété </li>
            <li>Des difficultés spatio-temporelles</li> 
            <li>Déficiences visuelles et auditives </li>
            <li>Affections rhumatologiques</li>
            <li>Dépression</li>
            <li>Une perte de l’estime de soi</li> 
            <li>Le syndrome post-chute </li>
            <li>Douleur chronique</li>
            <li>Accompagnement soin palliatif, etc...</li> <br></br>
        </ul></>,
        
    },
    
];

export const psychomotNav = [
    {
        name: 'Bébé',
    },
    {
        name: 'Enfant',
    },
    {
        name: 'Adulte',
    },
    {
        name: 'Senior',
    }
]
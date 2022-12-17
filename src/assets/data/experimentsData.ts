import jsLogo from '../../assets/images/tecnologies/languages/javascript.png'
import tsLogo from '../../assets/images/tecnologies/languages/typescript.png'
import pyLogo from '../../assets/images/tecnologies/languages/python.png'
import goLogo from '../../assets/images/tecnologies/languages/go.png'
import cssLogo from '../../assets/images/tecnologies/languages/css.png'
import htmlLogo from '../../assets/images/tecnologies/languages/html.png'
import nextLogo from '../../assets/images/tecnologies/frontend/next.png'
import solidLogo from '../../assets/images/tecnologies/frontend/solid.png'
import reactLogo from '../../assets/images/tecnologies/frontend/react.png'
import expressLogo from '../../assets/images/tecnologies/backend/express.png'
import flaskLogo from '../../assets/images/tecnologies/backend/flask.png'
import djangoLogo from '../../assets/images/tecnologies/backend/django.png'
import ginLogo from '../../assets/images/tecnologies/backend/gin.png'
import MySQLLogo from '../../assets/images/tecnologies/database/mysql.webp'
import MongoDBLogo from '../../assets/images/tecnologies/database/mongodb.png'
import JestLogo from '../../assets/images/tecnologies/testing/jest.png'
import TailwindLogo from '../../assets/images/tecnologies/styles/tailwind.png'
import BootstrapLogo from '../../assets/images/tecnologies/styles/bootstrap.webp'
import GitLogo from '../../assets/images/tecnologies/tools/git.png'
import DockerLogo from '../../assets/images/tecnologies/tools/docker.png'
import ViteLogo from '../../assets/images/tecnologies/tools/vite.png'
import WebpackLogo from '../../assets/images/tecnologies/tools/webpack.png'
import SassLogo from '../../assets/images/tecnologies/tools/sass.png'

const experimentsData = [
    {
        title:"TPG - MercadoPago",
        description:"Es una web que simula Mercado Libre, donde uno puede efectuar pago digitales mediante la API de Mercado Pago, la cual proporciona una gran seguridad a la hora de efectuar transacciones.",
        technologies: [jsLogo, htmlLogo, cssLogo, expressLogo, GitLogo]
    },{
        title:"Contador de clicks",
        description:"Es un contador de clicks que va sumando y restando el numero del recuadro. El objetivo era aprender los nuevos hooks de React, siendo estos el useEffect y el useState.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo]
    },{
        title:"Simulador de freeCodeCamp",
        description:"Es una simulacion del home de la web de freeCodeCamp. En este se muestran experiencias de sus graduados, explicando lo que les parecio la experiencia y donde estan trabajando actualmente.",
        technologies: [reactLogo, jsLogo, cssLogo, htmlLogo, GitLogo, WebpackLogo]
    },{
        title:"Mercado Liebre",
        description:"Es una simulacion de la web de Mercado Libre. Se puede ver una lista de productos que se adaptan al tamaño de la pantalla del usuario y un formulario para agregar, editar y eliminar productos. Usada de practica para aprender el correcto manejo de flex-box, animaciones y demas reglas de CSS.",
        technologies: [jsLogo, cssLogo, htmlLogo, expressLogo, GitLogo]
    }
]

export default experimentsData
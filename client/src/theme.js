import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors"

export const theme = createTheme({
    palette:{
        primary: {
            main: pink[300] // Utiliser une nuance de rose clair prédéfinie (par exemple, pink[300])
        }, 
        secondary: {
            main: "#f48fb1" // Vous pouvez également définir la couleur secondaire si vous le souhaitez
        },
        lilas: {
            main: "#C8A2C8" // Définir une couleur lilas personnalisée
        }
    }
})
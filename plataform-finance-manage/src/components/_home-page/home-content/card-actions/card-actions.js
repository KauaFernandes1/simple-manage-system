import * as cardStyles from './card-styles'
import {SpeedActionCard} from './circle-section'

export const CardActions = () => {
    return (
       <cardStyles.Container>
        <p style={{paddingLeft: '30px', color: '#676767', display: 'flex', alignItems: 'center'}}>Acesso rapido</p>
        <SpeedActionCard/>
       </cardStyles.Container> 
    )
}
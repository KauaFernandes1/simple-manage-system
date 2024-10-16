import * as cardStyles from './card-styles'
import Icon from '../../../_atomic-design/atom/icons.js'
// import { Link } from 'react-router-dom';




export const SpeedActionCard = () => {
    return (
        <cardStyles.CircleSection>

            {/* CIRCLE DEPOSIT */}
            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                <Icon name="Money" size={23} color="white" />
                </cardStyles.Circle>
                <p>Transferir</p>
            </cardStyles.IndividualCircle>

            {/* CIRCLE TRANSFER */}
            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                <Icon name="Info" size={23} color="white" />                    
                </cardStyles.Circle>
                <p>Extratos</p>
            </cardStyles.IndividualCircle>

            {/* CIRCLE  */}
            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                <Icon name="Receipt" size={23} color="white" />                    
                </cardStyles.Circle>
                <p>Contas</p>
            </cardStyles.IndividualCircle>

            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                <Icon name="Barcode" size={23} color="white" />                    
                </cardStyles.Circle>
                <p>Ajuda</p>
            </cardStyles.IndividualCircle>


        </cardStyles.CircleSection>
    )
}
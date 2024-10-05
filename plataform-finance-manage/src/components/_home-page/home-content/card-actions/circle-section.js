import * as cardStyles from './card-styles'
import { Money, Info, Receipt, Barcode } from "phosphor-react";
// import { Link } from 'react-router-dom';




export const SpeedActionCard = () => {
    return (
        <cardStyles.CircleSection>

            {/* CIRCLE DEPOSIT */}
            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                    <Money size={23} />
                </cardStyles.Circle>
                <p>Transferir</p>
            </cardStyles.IndividualCircle>

            {/* CIRCLE TRANSFER */}
            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                    <Receipt size={23} />
                    
                </cardStyles.Circle>
                <p>Extratos</p>
            </cardStyles.IndividualCircle>

            {/* CIRCLE  */}
            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                    <Barcode size={23} />
                </cardStyles.Circle>
                <p>Contas</p>
            </cardStyles.IndividualCircle>

            <cardStyles.IndividualCircle>
                <cardStyles.Circle>
                <Info size={23} />
                </cardStyles.Circle>
                <p>Ajuda</p>
            </cardStyles.IndividualCircle>


        </cardStyles.CircleSection>
    )
}
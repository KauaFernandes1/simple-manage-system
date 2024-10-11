import styled from 'styled-components'
import { colors } from '../../../_atomic-design/atom/colors/colors'


// export const Container = styled.div`
// width: 92px;
// height: 100%;
// border-radius: 8px;
// box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);

// `
export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`
  

export const TargetLabel = styled.div`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #555;
`
  
export const TargetAmount = styled.span`
    color: #7b61ff;
  `
  
export const ProgressBar = styled.div`
    height: 100%; /* Altura total da barra */
    width: 90px; /* Largura da barra */
    background-color: #e0e0e0;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
`
  
export const Progress  = styled.div`
    width: 100%;
    background-color: #007AFF;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transition: height 0.3s ease-in-out;
`
  
export const ProgressText = styled.span`
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
`
  
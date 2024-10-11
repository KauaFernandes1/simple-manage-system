// VerticalProgressBar.js
import React from 'react';
import * as Styles from './dashboard-styles.js'


const VerticalProgressBar = ({ target, progress }) => {
  return (
    <Styles.ProgressContainer>
      <Styles.TargetLabel>
      </Styles.TargetLabel>
      <Styles.ProgressBar>
        {/* Barra de progresso vertical */}
        <Styles.Progress
          
          style={{ height: `${progress}%` }}
        >
          <Styles.ProgressText>{progress}%</Styles.ProgressText>
        </Styles.Progress>
      </Styles.ProgressBar>
    </Styles.ProgressContainer>
  );
};

export default VerticalProgressBar;

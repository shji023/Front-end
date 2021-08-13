import React from 'react';
import { BlackButton, ButtonWrapper, ColorButton } from './style';

interface IProps {
  countProgressBar: number;
  selectedInterest: string[];
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ChallengeWriteButton({ countProgressBar, handleSubmit, selectedInterest }: IProps): React.ReactElement {
  return (
    <>
      {countProgressBar === 3 && selectedInterest.length > 0 ? (
        <ButtonWrapper>
          <ColorButton onClick={handleSubmit}>글 올리기</ColorButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <BlackButton>글 올리기</BlackButton>
        </ButtonWrapper>
      )}
    </>
  );
}

export default ChallengeWriteButton;

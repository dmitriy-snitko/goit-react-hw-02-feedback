import { Button, BtnContainer } from "./FeedbackOptions.styles";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const optionsKeys = Object.keys(options)
  return (
    <BtnContainer>
      {optionsKeys.map(key =>
        <Button
          key={key}
          onClick={onLeaveFeedback}
          data-feedback={key}
        >
          {key}
        </Button>
      )}
    </BtnContainer>
  )
}

export default FeedbackOptions;
import {
  Stepper,
  StepperItem,
  StepperStatusIcon,
  StepperTitle,
} from '@/components/ui/stepper';

export const StepperExample = () => (
  <Stepper activeStep={0}>
    <StepperItem>
      <StepperStatusIcon status="success" />
      <StepperTitle>Create Project</StepperTitle>
    </StepperItem>
    <StepperItem>
      <StepperStatusIcon status="loading" />
      <StepperTitle>Select Tooling</StepperTitle>
    </StepperItem>
  </Stepper>
);

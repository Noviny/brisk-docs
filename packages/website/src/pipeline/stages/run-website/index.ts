import createStage from '../make-pipline-stage';

interface StageInput {}

interface StageOutput {}

export default createStage(
  'run-website',
  async (input: StageInput): Promise<StageOutput> => {
    return input;
  },
);

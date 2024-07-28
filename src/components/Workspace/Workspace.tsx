import React from "react";
import Split from "react-split";
import Playground from "./Playground/Playground";
import ProblemDescription from "./ProblemDescription/ProblemDescription";

interface Problem {
  id: string;
  title: string;
  problemStatement: string;
  examples: any[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: string;
  starterFunctionName: string;
}

interface WorkspaceProps {
  problem: Problem;
}

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground problem={problem} />
    </Split>
  );
};

export default Workspace;
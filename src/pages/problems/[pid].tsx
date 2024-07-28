import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";

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

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  const problem: Problem = {
    id: "",
    title: "",
    problemStatement: "",
    examples: [],
    constraints: "",
    order: 0,
    starterCode: "",
    handlerFunction: "",
    starterFunctionName: ""
  };

  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={problem} />
    </div>
  );
};

export default ProblemPage;
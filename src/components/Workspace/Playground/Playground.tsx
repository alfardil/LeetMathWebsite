import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import Split from "react-split";
import PreferenceNav from "./PreferenceNav/PreferenceNav";

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

interface PlaygroundProps {
  problem: Problem;
}

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative">
      <PreferenceNav />

      <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
        <div className="w-full overflow-auto">
          <CodeMirror 
            value={problem.starterCode}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className="w-full px-5 overflow-auto">
          {/* hints heading */}
          <div className="flex- h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5 text-white">
                Hints:
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="py-5 text-white">
            Coming Soon!
          </div>
        </div>
      </Split>
    </div>
  );
};

export default Playground;
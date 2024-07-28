import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import React from "react";

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
	return (
		<div>
			<Topbar problemPage/>
			<Workspace problem={{
				id: "",
				title: "",
				problemStatement: "",
				examples: [],
				constraints: "",
				order: 0,
				starterCode: "",
				handlerFunction: "",
				starterFunctionName: ""
			}} />
		</div>
	);
};
export default ProblemPage;

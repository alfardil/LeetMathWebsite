import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

type ProblemDescriptionProps = {};

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
	return <div className="bg-bannerColor"> 
	<div className="flex items-center justify-between bg-bannerColor h-11 w-full text-white"> 
		<div className={"bg-bannerColor rounded-t-[5px] px-5 py-[10x] text-cs cursor pointer"}>
		Description
		</div>
	</div>
	
	<div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
		<div className="px-5">
		{/* {problem heading} */}
		<div className="w-full">
			<div className="flex space-x-4">
				<div className="flex-1 mr-2 text-lg text-white font-medium"> 1. Solving Quadratic Equations</div>
			</div>
		<div className="flex items-center mt-3">
			<div className="{`text-dark-green-s bg-dark-green-s inline block rounded-[21px] px-2.5 py-1 text-xs font-medium capitalize`}">
				Easy
			</div>
		<div className="rounded p-[3px] ml-4 text-lg transition-colors duration-2oo text-green-s text-dark-green-s">
			<BsCheck2Circle/>
		</div>
		<div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 roudned p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
			<AiFillLike />
			<span className="text-xs">1</span>
		</div>
		<div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 roudned p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
			<AiFillDislike />
			<span className="text-xs">1</span>
		</div>
		<div className="cursor-pointer hover:bg-dark-ful-3 rounded p-[3px] ml-4 text-xl transition-colors duration-200 text-green text-dark-gray-6">
			<TiStarOutline/>
		</div>
		</div>
	{/* put paragraphs here */}
		<div className="text-white text-sm">
			<p className="mt-3">
			Given the quadratic equation ax<sup>2</sup> + bx + c = 0, find the values of x when a = 1, b = -3, and c = 2.
			</p>
		</div>
		</div>
		</div>
	</div>



	</div>
};
export default ProblemDescription; 
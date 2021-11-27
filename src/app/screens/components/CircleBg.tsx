import React from "react";
import {Stack, Text} from "@chakra-ui/react";
interface ICircleBgProps {
  fill?: string;
}
const CircleBg = (props: ICircleBgProps) => {
  props.fill ? null : (props = {...props, fill: "#3E4062"});

  return (
    <svg height="1018" viewBox="0 0 1014 1018" width="1014" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd" transform="matrix(1 0 0 -1 0 1018)">
        <rect fill={props.fill} height="590" rx="294" width="588" x="213" y="214" />
        <rect height="1017" opacity=".5" rx="506.5" stroke="#878D92" width="1013" x=".5" y=".5" />
        <rect height="675" rx="336.5" stroke="#878D92" width="673" x="170.5" y="171.5" />
      </g>
    </svg>
  );
};

export default CircleBg;

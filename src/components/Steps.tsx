import React from "react";

export const Steps: React.FC<{step:number, stepNames: string[]}> = ({step, stepNames}) => {
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
      }

  return (
    <ul className="steps steps-vertical lg:steps-horizontal">
      <li className="step step-primary mr-4">{stepNames[0]}</li>
      <li className={classNames(step >=2 ? 'step-primary' : '', 'step')}>{stepNames[1]}</li>
      <li className={classNames(step >=3 ? 'step-primary' : '', 'step')}>{stepNames[2]}</li>
    </ul>
  );
}

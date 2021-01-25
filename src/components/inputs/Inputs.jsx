import React, { useState } from "react";
import s from "./Inputs.module.scss";
import Input from "../input";

const SmallInput = props => <Input className={s.smallInput} {...props} />;

const Inputs = ({  label, className, value = [''], onChange}) => {
  const valuesArray=value;

  const onChangeInputs=(valArr)=>{
      onChange(valArr);
  }
  return (
    <div className={s.inputsWrapper}>
      <span className={s.label}>{label}</span>
      <div className={s.inputs}>
        {valuesArray &&
          valuesArray.map((value, index) => (
            <SmallInput
              onChange={el => {
                const newValue = el.target.value;
                let newArray = [...valuesArray];
                newArray[index] = newValue;
                onChangeInputs(newArray);
              }}
              value={value}
            >
              {index !== 0 && index === valuesArray.length - 1 && (
                <span
                  className={s.remove}
                  onClick={() => {
                    let newArr = [...valuesArray];
                    newArr.splice(index, 1);
                    onChangeInputs([...newArr]);
                  }}
                >
                  X
                </span>
              )}

              {index === valuesArray.length - 1 && (
                <div className={s.plusWrapper}
                  onClick={() => {
                    onChangeInputs( [...valuesArray, ""]);
                  }}
                >
                  <span className={s.add}>+</span>
                  <span>Добавить еще</span>
                </div>
              )}
            </SmallInput>
          ))}
      </div>
    </div>
  );
};

export default Inputs;

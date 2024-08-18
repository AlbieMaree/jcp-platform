import DefaultLayout from "@/layouts/default";
import { Progress } from "@nextui-org/react";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
export default function TasksPage() {
  const [value, setValue] = useState(0.0);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const validateNumber = (num: number) => {
    if (isNaN(num)) {
      setErrorMessage("Input must be a number");
      return false;
    }
    if (num <= 0) {
      setErrorMessage("Value must be bigger than 0");
      return false;
    }
    if (num >= 40) {
      setErrorMessage("Value must be less than 40");
      return false;
    }
    setErrorMessage(""); 
    return true;
  };
  

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      const num = parseFloat(inputElement.value);
      if (!validateNumber(num)) {
        setIsInvalid(true);
        return;
      }
      setIsInvalid(false);
      setValue(value + num);
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
      setIsInvalid(false);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <p className="text-4xl mb-11">Tasks</p>

          <p className="text-4xl mb-3">Log Working hours here</p>
          <Progress
            aria-label="Downloading..."
            size="md"
            maxValue={40}
            formatOptions={{style: "decimal"}}
            value={value}
            color="success"
            showValueLabel={true}
            className="max-w-md"
          />
          <br></br>
          <div className="py-11 resize-none">
          <Input
            isRequired
            label="Hours worked"
            defaultValue="1"
            onKeyDown={handleKeyPress}
            isInvalid={isInvalid}
            errorMessage={errorMessage}
            className="max-w-xs"
          />
          </div>
          <h2>This is the tasks page.</h2>
        </div>
      </section>
    </DefaultLayout>
  );
}

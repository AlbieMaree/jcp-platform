import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/default";
import { urgencies } from "../../public/data";
import { supportType } from "../../public/data";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {Button} from "@nextui-org/react";
export default function SupportTypePage() {
  const router = useRouter();
  const { type } = router.query;

  const supportTypeKeys = supportType.map((item) => item.key);

  const handleType = useCallback(() => {
    if (typeof type === "string" && !supportTypeKeys.includes(type)) {
      router.push(`../support`);
    }
  }, [type, supportTypeKeys, router]);

  useEffect(() => {
    handleType();
  }, [handleType]);

  const [selectedUrgency, setSelectedUrgency] = useState("");

  const getColour = (urgency: string) => {
    switch (urgency) {
      case "notUrgent":
        return "success";
      case "low":
        return "primary";
      case "normal":
        return "warning";
      case "critical":
        return "danger";
      default:
        return "default";
    }
  };

  const marginBottom = "mb-8";

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className={`items-center justify-center text-4xl ${marginBottom}`}>
          <Link href="/support">Support Home</Link> &gt; <span>{type}</span>
        </div>
        <div className={`inline-block max-w-lg text-center justify-center ${marginBottom}`}>
          <h2 className={marginBottom}>Selected Support Type: {type}</h2>
          <p>This page shows details about the selected support type.</p>
        </div>
        <div className={`inline-block max-w-lg text-center justify-center w-96 gap-y-10`}>
          {type === "funding" && (
            <>
              <h2 className={marginBottom}>Additional Information for Budget Support</h2>
              <p className={marginBottom}>
                This section contains extra details for the Budget support type.
              </p>
              <Textarea
                isRequired
                label="Input 1 input is required"
                labelPlacement="outside"
                radius="none"
                placeholder="Ok bro"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
              <Textarea
                label="Input 2"
                labelPlacement="outside"
                radius="none"
                placeholder="Different place holder"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[70px] w-full",
                }}
              />
              <Textarea
                isRequired
                label="Input 3 input is required"
                labelPlacement="outside"
                radius="none"
                placeholder="Same place holder"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[100px] w-full",
                }}
              />
              <Textarea
                label="Input 4"
                labelPlacement="outside"
                radius="none"
                placeholder="Same place holder"
                disableAnimation
                disableAutosize
                classNames={{
                  base: `w-full max-w-4xl ${marginBottom}`,
                  input: "resize-y min-h-[50px] w-full",
                }}
              />
            </>
          )}

          {type === "Technical" && (
            <div className={`inline-block max-w-lg text-center justify-center ${marginBottom}`}>
              <h2 className={marginBottom}>Additional Information for Technical Support</h2>
              <p className={marginBottom}>
                This section contains extra details for the Technical support type.
              </p>
            </div>
          )}

          <Select
            labelPlacement="outside"
            color={getColour(selectedUrgency)}
            label="Support urgency"
            placeholder=""
            selectedKeys={[selectedUrgency]}
            variant="underlined"
            
            onSelectionChange={(selected) =>
              setSelectedUrgency(selected.currentKey ?? "")
            }
            className={`max-w-4xl items-center justify-center ${marginBottom}`}
          >
            {urgencies.map((urgency) => (
              <SelectItem key={urgency.key}>{urgency.label}</SelectItem>
            ))}
          </Select>
          <Button color="danger" radius="none">
            Submit support ticket
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}

import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/default";
import { urgencies } from "../../public/data";
import { supportType } from "../../public/data";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

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

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="items-center justify-center text-4xl">
          <Link href="/support">Support Home</Link> &gt; <span>{type}</span>
        </div>
        <div className="inline-block max-w-lg text-center justify-center">
          <h2>Selected Support Type: {type}</h2>
          <p>This page shows details about the selected support type.</p>
        </div>

        {type === "funding" && (
          <>
            <div className="inline-block max-w-lg text-center justify-center">
              <h2>Additional Information for Budget Support</h2>
              <p>
                This section contains extra details for the Budget support type.
              </p>
            </div>
            <Textarea
              isRequired
              label="Input 1 input is required"
              labelPlacement="outside"
              radius="none"
              placeholder="Ok bro"
              disableAnimation
              disableAutosize
              classNames={{
                base: "max-w-xs",
                input: "resize-y min-h-[100px]",
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
                base: "max-w-xs",
                input: "resize-y min-h-[100px]",
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
                base: "max-w-xs",
                input: "resize-y min-h-[100px]",
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
                base: "max-w-xs",
                input: "resize-y min-h-[100px]",
              }}
            />
          </>
        )}

        {type === "Technical" && (
          <div className="inline-block max-w-lg text-center justify-center">
            <h2>Additional Information for Technical Support</h2>
            <p>
              This section contains extra details for the Technical support
              type.
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
          className="w-64"
        >
          {urgencies.map((urgency) => (
            <SelectItem key={urgency.key}>{urgency.label}</SelectItem>
          ))}
        </Select>
      </section>
    </DefaultLayout>
  );
}

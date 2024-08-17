

// pages/docs.tsx
import DefaultLayout from "@/layouts/default";
import { Select, SelectItem } from "@nextui-org/react";
import { supportType } from "../data"; // Import the support type data
import React, { useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js

export default function DocsPage() {

  const router = useRouter(); // Initialize the useRouter hook

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>Support</h1>
          <br />
          <h2>This is the support page.</h2>
          <br></br>
          <div>
            <Select
              labelPlacement="outside"
              color="default"
              label="Support Type"
              placeholder="Select Support Type"
              radius="none"
              onSelectionChange={(selected) => {
                const selectedType = selected.currentKey ?? "";
                router.push(`support/supportTypePage?type=${selectedType}`); 
              }}
              className="w-64"
            >
              {supportType.map((type) => (
                <SelectItem key={type.key}>{type.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

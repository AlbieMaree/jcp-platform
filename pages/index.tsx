import DefaultLayout from "@/layouts/default";
import { Spinner } from "@nextui-org/react";
export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex gap-4">
            <Spinner label="Loading your brain cells..." color="warning" />
          </div> 
        </div>
      </section>
    </DefaultLayout>
  );
}

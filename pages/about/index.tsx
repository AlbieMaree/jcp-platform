import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1>About</h1>
          <br></br>
          <h2>This is the about page.</h2>
        </div>
      </section>
    </DefaultLayout>
  );
}

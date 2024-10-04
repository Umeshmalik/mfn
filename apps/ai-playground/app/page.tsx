export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          AI Playground
        </h1>
        <p className="mt-3 text-2xl">
          Experiment with AI models in an interactive environment
        </p>
        {/* Add your AI playground components here */}
      </main>
    </div>
  );
}
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to AI Demos
        </h1>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/ai-tools" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">AI Tools &rarr;</h3>
            <p className="mt-4 text-xl">
              Explore our collection of AI-powered tools
            </p>
          </Link>

          <Link href="/ai-playground" className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">AI Playground &rarr;</h3>
            <p className="mt-4 text-xl">
              Experiment with AI models in an interactive environment
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
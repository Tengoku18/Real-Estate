import PropetyCard from "./PropetyCard";
export default function CardGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-3 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Matching Results
          </h2>
        </div>
        <PropetyCard />
      </div>
    </div>
  );
}

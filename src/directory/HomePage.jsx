import { HeroChart } from "../components/HeroChart";

function HomePage({ sbpmWorkerName }) {
  const SBPM_WORKER_NAME = `SBPM worker: ${sbpmWorkerName}`;
  return (
    <>
      <div className="w-[1200px] mx-auto py-10 px-10">
        <div className="fixed top-2 right-2 border-4 p-2 rounded-md">
          {SBPM_WORKER_NAME}
        </div>
        <HeroChart />
      </div>
    </>
  );
}

export default HomePage;

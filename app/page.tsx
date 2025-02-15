import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const params = await searchParams;
  return <LatestIssues />;
}

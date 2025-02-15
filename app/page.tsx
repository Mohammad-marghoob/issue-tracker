import { prisma } from "@/prisma/client";
import Pagination from "./components/Pagination";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueChart from "./IssueChart";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const params = await searchParams;

  const openRes = await prisma.issue.count({
    where: { status: "OPEN" },
  });

  const clsRes = await prisma.issue.count({
    where: { status: "CLOSSED" },
  });

  const progressRes = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <>
      <LatestIssues />
      <IssueSummary open={openRes} closed={clsRes} inProgress={progressRes} />
      <IssueChart open={openRes} closed={clsRes} inProgress={progressRes} />
    </>
  );
}

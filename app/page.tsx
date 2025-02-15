import { prisma } from "@/prisma/client";
import Pagination from "./components/Pagination";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

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
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <IssueSummary
            open={openRes}
            closed={clsRes}
            inProgress={progressRes}
          />
          <IssueChart open={openRes} closed={clsRes} inProgress={progressRes} />
        </Flex>
        <LatestIssues />
      </Grid>
    </>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};

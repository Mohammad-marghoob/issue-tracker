import { prisma } from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetailes from "./IssueDetailes";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id: paramId } = await params;

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(paramId) },
    });

    if (!issue) {
      notFound();
    }

    return (
      <Grid
        columns={{
          initial: "1",
          md: "2",
        }}
        gap="2"
      >
        <Box>
          <IssueDetailes issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issueId={issue.id} />
        </Box>
      </Grid>
    );
  } catch (error) {
    notFound();
  }
};

export default IssueDetailPage;

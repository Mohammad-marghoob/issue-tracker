import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetailes from "./IssueDetailes";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

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
          sm: "5",
        }}
        gap="2"
      >
        <Box className="md:col-span-4">
          <IssueDetailes issue={issue} />
        </Box>
        {session && (
          <Box className="md:mt-12">
            <Flex direction="column" gap="2">
              <AssigneeSelect />
              <EditIssueButton issueId={issue.id} />
              <DeleteIssueButton issueId={issue.id} />
            </Flex>
          </Box>
        )}
      </Grid>
    );
  } catch (error) {
    notFound();
  }
};

export default IssueDetailPage;

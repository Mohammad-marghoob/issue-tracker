import { prisma } from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Markdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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
          <Flex align="center" gap="2" my="2">
            <Heading>{issue.title}</Heading>
            <ThickArrowRightIcon color="red" />
            <Text>{issue.createdAt.toDateString()}</Text>
            <IssueStatusBadge status={issue.status} />
          </Flex>
          <Card className="prose">
            <Text as="div" size="4">
              <Markdown>{issue.description}</Markdown>
            </Text>
          </Card>
        </Box>
        <Box>
          <Button>
            <Pencil2Icon />
            <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>
          </Button>
        </Box>
      </Grid>
    );
  } catch (error) {
    notFound();
  }
};

export default IssueDetailPage;

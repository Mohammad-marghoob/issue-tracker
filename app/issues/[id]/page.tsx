import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Markdown from "react-markdown";

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
      <div>
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
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default IssueDetailPage;

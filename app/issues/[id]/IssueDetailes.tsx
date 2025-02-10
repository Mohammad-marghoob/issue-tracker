import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";

const IssueDetailes = ({ issue }: { issue: Issue }) => {
  return (
    <>
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
    </>
  );
};

export default IssueDetailes;

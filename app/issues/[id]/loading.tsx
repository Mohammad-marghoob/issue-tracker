import { Box, Card, Flex, Skeleton } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <Box>
      <Flex align="center" gap="2" my="2">
        <Skeleton className="my-2 h-10 w-60"></Skeleton>
        <Skeleton className="my-2 h-10 w-40"></Skeleton>
      </Flex>
      <Card className="prose">
        <Skeleton className="my-2 w-full h-10" width="5rem"></Skeleton>
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;

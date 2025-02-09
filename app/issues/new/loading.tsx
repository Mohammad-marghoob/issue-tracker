import { Box, Skeleton } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton className="my-2 w-full h-5"></Skeleton>
      <Skeleton className="my-2 w-full h-20"></Skeleton>
    </Box>
  );
};

export default LoadingNewIssuePage;

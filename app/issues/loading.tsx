import { Skeleton, Table, Text } from "@radix-ui/themes";
import IssueActions from "./IssueActions";

const tableSkeletonRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const LoadingIssuesPage = () => {
  return (
    <>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
      </Table.Root>
      {tableSkeletonRows.map((skeleton) => (
        <Skeleton className="my-2 w-full h-10" key={skeleton}></Skeleton>
      ))}
    </>
  );
};

export default LoadingIssuesPage;

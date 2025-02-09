import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "blue" | "orange" | "green" }
> = {
  OPEN: {
    label: "Open",
    color: "blue",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "orange",
  },
  CLOSSED: {
    label: "Clossed",
    color: "green",
  },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;

import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";

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
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default IssueDetailPage;

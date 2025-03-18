import { getAllLogs } from "@/use-cases/projects";
import { Suspense } from "react";
import { LogsSkeleton } from "./log-skeleton";
import { Logs } from "./logs";


export default async function AllLogs() {
  const logs = await getAllLogs();
  return (
    <Suspense fallback={<LogsSkeleton />}>
      <Logs logs={logs} />
    </Suspense>
  );
}

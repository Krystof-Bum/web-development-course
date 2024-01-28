import Skeleton from "@mui/material/Skeleton";

export const CardSkeleton = () => {
  return (
    <div>
      <Skeleton variant="rounded" width={250} height={170} />
      <br />
      <Skeleton variant="rounded" width={250} height={20} />
      <br />
      <Skeleton variant="rounded" width={250} height={15} />
      <br />
      <Skeleton variant="rounded" width={250} height={15} />
      <br />
      <Skeleton variant="rounded" width={250} height={15} />
    </div>
  );
};

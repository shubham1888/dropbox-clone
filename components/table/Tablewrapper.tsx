import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./columns";

function Tablewrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  return (
    <div>
      <Button variant={"outline"} className="mb-4">Sort by ...</Button>
      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}

export default Tablewrapper;

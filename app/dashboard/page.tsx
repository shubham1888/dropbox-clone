import Dropzone from "@/components/Dropzone";
import Tablewrapper from "@/components/table/Tablewrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { getDocs, collection } from "firebase/firestore";

async function Dashboard() {
  const { userId } = auth();
  const docResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docResults.docs.map((doc:any) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullname: doc.data().fullname,
    downloadUrl: doc.data().downloadUrl,
    type: doc.data().type,
    size: doc.data().size,
  }));
  return (
    <div>
      <Dropzone />
      <section className="container space-y-5">
        <h2 className="font-bold">All files</h2>
        {/* Table wrapper */}
        <div>
          <Tablewrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

import { AddDivisionModal } from "@/components/modules/Admin/Division/AddDivisionModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetDivisionsQuery } from "@/redux/features/division/division.api";
import { Trash2 } from "lucide-react";

export default function AddDivision() {

  const { data } = useGetDivisionsQuery(undefined);

//   const [removeTourType] = useRemoveTourTypeMutation();

//   const handleRemoveTourType = async (tourId: string) =>{
//     const toastId = toast.loading("Removing....")
//     try {
//       const res = await removeTourType(tourId).unwrap();

//       if(res.success){
//         toast.success("Removed",{id: toastId})
//       }
//     } catch (err) {
//         console.error(err);
//     }
//   }

  return (
    <div className="w-full max-w-7xl mx-auto px-5">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Divisions</h1>
        <AddDivisionModal />
      </div>
      <div className="border border-muted rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: {_id: string; name: string }) => (
              <TableRow>
                <TableCell className="font-medium w-full">
                  {item?.name}
                </TableCell>
                <TableCell>
                  {/* <DeleteConfirmation onConfirm={()=>handleRemoveTourType(item._id)}>
                    <Button size="sm">
                      <Trash2 />
                    </Button>
                  </DeleteConfirmation> */}
                    <Button size="sm">
                      <Trash2 />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
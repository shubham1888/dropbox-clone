"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { TrashIcon, PencilIcon } from "lucide-react";
import { useState } from "react";
import { useAppStore } from "@/store/store";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const [
    fileId,
    setFileId,
    setIsDeleteModalOpen,
    setFilename,
    setIsRenameModalOpen,
    filename,
  ] = useAppStore((state) => [
    state.fileId,
    state.setFileId,
    state.setIsDeleteModalOpen,
    state.setIsRenameModalOpen,
    state.setFilename,
    state.filename,
  ]);
  const openDeleteModal = (fileId: string) => {
    setFileId(fileId);
    setIsDeleteModalOpen(true);
  };
  const openRenameModal = (fileId: string, filename: any) => {
    setFileId(fileId);
    setFilename(filename);
    //@ts-ignore
    setIsRenameModalOpen(true);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.id === "timestamp" ? (
                      <div className="flex flex-col">
                        <div className="text-sm">
                          {(cell.getValue() as Date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {(cell.getValue() as Date).toLocaleTimeString()}
                        </div>
                      </div>
                    ) : cell.column.id === "filename" ? (
                      // flexRender(cell.column.columnDef.cell, cell.getContext())
                      <p
                        onClick={() => {
                          console.log("first");
                        }}
                        className="underline flex items-center text-blue-500 hover:cursor-pointer"
                      >
                        {cell.getValue() as string}{" "}
                        <PencilIcon size={15} className="ml-2" />
                      </p>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
                <TableCell key={(row.original as FileType).id}>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      console.log("Hellow");
                    }}
                  >
                    <TrashIcon size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Your bucket is empty.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

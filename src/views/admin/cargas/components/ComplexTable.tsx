import CardMenu from "./CardMenu";
import Card from "components/card";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Endpoint } from "constants/api";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "views/admin/cargas/components/modal";
import { Charge } from "store/types/store/state/admin/charge";

interface ComplexTableProps {
  isAtt: boolean;
  setAtt: Dispatch<SetStateAction<boolean>>;
  endpoint: Endpoint;
  tableData: Array<Charge>;
}

const columnHelper = createColumnHelper<any>();

export default function ComplexTable(props: ComplexTableProps) {
  const columns = [
    columnHelper.accessor("descricao", {
      id: "descricao",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">Nome</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("created_at", {
      id: "created_at",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Data de registro
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("updated_at", {
      id: "updated_at",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          Data de registro
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue()}
        </div>
      ),
    }),
    columnHelper.accessor("actions", {
      id: "actions",
      header: null,
      cell: (info) => <Modal endpoint={props.endpoint} row={info.row} isAtt={props.isAtt} setAtt={props.setAtt} />,
    }),
  ];

  const table = useReactTable({
    data: props.tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white" />
        <CardMenu endpoint={props.endpoint} isAtt={props.isAtt} setAtt={props.setAtt} />
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 15)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

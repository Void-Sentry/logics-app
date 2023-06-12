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
import { Dispatch, SetStateAction, memo } from "react";
import { Modal } from "components/modal";

interface ComplexTableProps {
  isAtt: boolean;
  setAtt: Dispatch<SetStateAction<boolean>>;
  endpoint: Endpoint;
  tableData: Array<any>;
  init?: Record<string, any>;
}

const columnHelper = createColumnHelper<any>();

export const ComplexTable = memo<ComplexTableProps>(({ tableData, init, endpoint, isAtt, setAtt }) => {
  const keys = Object.keys(tableData[0] || init);
  const columns = keys.map((key: string) => (
    columnHelper.accessor(key, {
      id: key,
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">{key}</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()?.descricao || info.getValue()}
        </p>
      ),
    })
  ));

  columns.push(columnHelper.accessor("actions", {
    id: "actions",
    header: null,
    cell: (info) => <Modal endpoint={endpoint} row={info.row} isAtt={isAtt} setAtt={setAtt} />,
  }));

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white" />
        <CardMenu endpoint={endpoint} entries={init} isAtt={isAtt} setAtt={setAtt} />
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
  )
});
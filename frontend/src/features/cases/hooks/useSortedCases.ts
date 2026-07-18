import { useMemo } from "react";
import type { Case } from "../types/case";

export type SortField="id"|"title"|"status"|"priority"|"due_date";
export type SortDirection="asc"|"desc";

export function useSortedCases(
  cases: Case[],
  field: SortField,
  direction: SortDirection
){
  return useMemo(()=>{
    return [...cases].sort((a,b)=>{
      const left=String(a[field]??"");
      const right=String(b[field]??"");

      const result=left.localeCompare(right,undefined,{numeric:true});

      return direction==="asc"?result:-result;
    });
  },[cases,field,direction]);
}

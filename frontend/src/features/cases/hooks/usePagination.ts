import { useMemo } from "react";

export function usePagination<T>(
  items:T[],
  page:number,
  pageSize:number
){
  return useMemo(()=>{
    const totalPages=Math.max(1,Math.ceil(items.length/pageSize));
    const current=Math.min(page,totalPages);

    return{
      totalPages,
      currentPage:current,
      items:items.slice(
        (current-1)*pageSize,
        current*pageSize
      )
    };
  },[items,page,pageSize]);
}

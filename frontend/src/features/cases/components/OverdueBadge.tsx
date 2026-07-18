interface Props{
  dueDate?:string|null;
  status:string;
}

export default function OverdueBadge({
  dueDate,
  status,
}:Props){

  if(!dueDate) return null;

  if(status==="COMPLETED" || status==="CLOSED") return null;

  const overdue=new Date(dueDate)<new Date();

  if(!overdue) return null;

  return(
    <span className="ml-2 inline-flex rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">
      Overdue
    </span>
  );
}

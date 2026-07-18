export interface CaseActivity{
  id:number;
  action:string;
  user:string;
  timestamp:string;
}

interface Props{
  activities:CaseActivity[];
}

export default function CaseActivityTimeline({
  activities,
}:Props){

  return(
    <div className="space-y-4">

      {activities.length===0 && (
        <p className="text-sm text-gray-500">
          No activity available.
        </p>
      )}

      {activities.map(activity=>(
        <div
          key={activity.id}
          className="border-l-2 pl-4"
        >
          <div className="font-medium">
            {activity.action}
          </div>

          <div className="text-sm text-gray-500">
            {activity.user}
          </div>

          <div className="text-xs text-gray-400">
            {activity.timestamp}
          </div>
        </div>
      ))}

    </div>
  );
}

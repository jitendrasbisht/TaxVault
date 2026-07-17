type Props={
    completed:number;
    total:number;
    percentage?:number;
}

export default function TaxProfileProgress({
    completed,
    total,
    percentage: providedPercentage,
}:Props){

    const percentage = providedPercentage ?? Math.round((completed/total)*100);

    return(

        <div className="rounded-xl border bg-white p-5">

            <div className="flex justify-between">

                <h3 className="font-semibold">
                    Profile Completion
                </h3>

                <span className="font-bold">
                    {percentage}%
                </span>

            </div>

            <div className="mt-4 h-3 rounded bg-gray-200">

                <div
                    className="h-3 rounded bg-blue-600"
                    style={{width:`${percentage}%`}}
                />

            </div>

        </div>

    );

}

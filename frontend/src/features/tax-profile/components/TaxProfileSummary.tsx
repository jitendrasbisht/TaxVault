type Props={
    total:number;
    selected:number;
    percentage?:number;
}

export default function TaxProfileSummary({
    total,
    selected,
    percentage,
}:Props){

    return(

        <div className="rounded-lg border p-4 bg-muted">

            <div className="text-sm">
                Tax Profile Completion
            </div>

            <div className="text-3xl font-bold">
                {selected} / {total}
            </div>

            {typeof percentage === "number" && (
                <div className="mt-2 text-sm text-slate-600">
                    {percentage}% complete
                </div>
            )}

        </div>

    )

}

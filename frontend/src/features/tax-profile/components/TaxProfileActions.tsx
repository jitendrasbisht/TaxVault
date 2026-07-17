type Props = {
    onSave?: () => void | Promise<void>;
    saving?: boolean;
    disabled?: boolean;
};

export default function TaxProfileActions({ onSave, saving = false, disabled = false }: Props) {

    return(

        <div className="flex justify-end gap-3">

            <button className="px-4 py-2 rounded bg-gray-200">
                Cancel
            </button>

            <button
                className="px-4 py-2 rounded bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-70"
                onClick={() => void onSave?.()}
                disabled={disabled || saving}
            >
                {saving ? "Saving..." : "Save Tax Profile"}
            </button>

        </div>

    )

}

export const SourceChainTypeBadge: React.FC<{ type: "dag" | "evm" }> = ({ type }) => {
    return <span className={`ml-2 px-2 py-1 text-white rounded bg-${type === "dag" ? "orange" : "green"}`}> {type}</span>
}
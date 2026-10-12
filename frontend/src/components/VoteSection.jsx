import "./VoteSection.css";

function VoteSection({
  account,
  hasVoted,
  candidates = [],
  selectedId,
  onSelectCandidate,
  onVote,
  onConnectWallet,
}) {
  const isConnected = Boolean(account);
  // 计算投票的文本与状态
  let buttonText = "确认投票";
  let isDisabled = false;

  if (!isConnected) {
    buttonText = "请先连接";
    isDisabled = true;
  } else if (hasVoted) {
    buttonText = "已投票";
    isDisabled = true;
  } else if (selectedId === "") {
    buttonText = "请选择候选人";
    isDisabled = true;
  }

  return (
    <div className="vote-section">
      <div className="section-label">我要投票</div>
      {/* 候选人下拉框 */}
      <select
        className="candidate-select"
        value={selectedId}
        disabled={!isConnected || hasVoted}
        onChange={(e) => onSelectCandidate(e.target.value)}
      >
        <option value="">选择候选人...</option>
        {candidates.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      {/* 投票操作按钮 */}
      <button
        className={`vote-btn ${isDisabled ? "disabled" : "active"}`}
        disabled={isDisabled}
        onClick={onVote}
      >
        {buttonText}
      </button>
      {/* 连接钱包按钮 */}
      <button className="connect-wallet-btn" onClick={onConnectWallet}>
        {isConnected ? "已开启" : "开启MetaMask"}
      </button>
    </div>
  );
}

export default VoteSection;
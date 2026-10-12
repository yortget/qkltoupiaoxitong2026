import "./CandidateVotes.css";

function CandidateVotes({ loading, candidates = [] }) {
  return (
    <div className="votes-section">
      <div className="section-label">当前投票</div>

      {/* 加载中动画与提示 */}
      {loading ? (
        <div className="loading-box">
          <div className="spinner"></div>
          <div className="loading-text">加载数据中...</div>
        </div>
      ) : (
        /* 候选人票数列表 */
        <div className="candidate-list">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-item">
              <span className="candidate-name">{candidate.name}</span>
              <span className="candidate-count">{candidate.voteCount} 票</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CandidateVotes;
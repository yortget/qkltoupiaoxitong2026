import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import CandidateVotes from "./components/CandidateVotes.jsx";
import VoteSection from "./components/VoteSection.jsx";

function App() {
  // const account = useState(null);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const [candidates, setCandidates] = useState([
    { id: 1, name: "Alice", voteCount: 12 },
    { id: 2, name: "Bob", voteCount: 8 },
    { id: 3, name: "Charlie", voteCount: 5 },
  ]);

  // 模拟连接钱包逻辑
  const handleConnectWallet = () => {
    if (account !== null) {
      setAccount(null);
      setSelectedId("");
    } else {
      setAccount("0x123456780abcdef123456789abcdef1234567890");
    }
  };

  const handleVote = () => {
    if (selectedId === "") return;
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === Number(selectedId) ? { ...c, voteCount: c.voteCount + 1 } : c
      )
    );
    setHasVoted(true);
  };

  return (
    <div className="voting-card">
      <Header account={account} />
      <CandidateVotes loading={loading} candidates={candidates} />
      <VoteSection
        account={account}
        hasVoted={hasVoted}
        candidates={candidates}
        selectedId={selectedId}
        onSelectCandidate={setSelectedId}
        onVote={handleVote}
        onConnectWallet={handleConnectWallet}
      />
    </div>
  );
}

export default App;
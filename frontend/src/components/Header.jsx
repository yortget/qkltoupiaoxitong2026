import "./Header.css";

function Header({ account }) {
  const isConnected = Boolean(account);

  return (
    <div className="header">
      <div className="status-badge">
        <span className={`status-dot ${isConnected ? "connected" : ""}`}></span>
        <span>
          {isConnected
            ? `${account.slice(0, 6)}...${account.slice(-4)}`
            : "未连接"}
        </span>
      </div>

      <div className="title-area">
        <h1 className="main-title">区块链投票</h1>
        <p className="sub-title">去中心化、透明、不可篡改</p>
      </div>
    </div>
  );
}

export default Header;
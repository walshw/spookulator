import { ghosts } from './constants/constants'

const renderGhosts = () => {
  return ghosts.map(ghost => {
    return <div>
      <div><b>{ghost.name}</b></div>
      <div>{ghost.evidence[0]}</div>
      <div>{ghost.evidence[1]}</div>
      <div>{ghost.evidence[2]}</div>
      <hr/>
    </div>
  })
}

function App() {
  return (
    <div>
      {renderGhosts()}
    </div>
  );
}

export default App;

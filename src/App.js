
const VIDEOS = [
  {
    id: 1,
    title: 'How to learn React',
    url: 'https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s',
    cover: 'https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxxEfavbxbAns6HTvgSrFA1b0Rrw'
  },
  {
    id: 2,
    title: 'How to learn CSS',
    url: 'https://www.youtube.com/watch?v=1PnVor36_40',
    cover: 'https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4tJ7kbGq-1Vv0pz8nIkiwF5xyQg'
  },
];

const App = () => {
  return (
      <>
      {VIDEOS.map(video => (
          <div key={video.id}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img src={video.cover} alt={video.title} />
            <h3>{video.title}</h3>
            </a>
          </div>
        ))}
      </>
  )
}


export default App;

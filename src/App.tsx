import TopBar from "./TopBar"

interface AppProps {
  content?: JSX.Element;
}

let Err = <>no content</>

function App({ content  = Err}: AppProps) :JSX.Element {


  return (
    <body className="bg-teal-300 min-h-screen ">


      <TopBar />
      
      {content}
      
    </body>
  )
}

export default App

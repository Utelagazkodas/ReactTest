import TopBar from "./TopBar"
//import { Languages } from './languages';

interface AppContent {
  
  content?: React.ReactNode;
}

let Err = <>no content</>

function App({ content  = Err}: AppContent) :JSX.Element {


  return (
    <body >


      <TopBar />
      
      {/*<Languages/>*/}

      {content}
      
    </body>
  )
}

export default App

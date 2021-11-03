import IntersectState from './context/intersect/IntersectState'
import HiddenScrollbarBlur from './menus/NotScrollable'
import HiddenScrollbar from './menus/Scrollable'

function App() {
  const data = require('./Data.json')

  return (
    <IntersectState>
      <div className='App'>
        <body className='overflow-hidden' style={{backgroundColor: '#4a1d96'}}>
          <div className='h-screen w-full overflow-auto pb-64 antialiased bg-gray-200'>
            <div className='flex flex-wrap'>
              <HiddenScrollbar data={data} />
              <HiddenScrollbarBlur data={data} />
            </div>
          </div>
        </body>
      </div>
    </IntersectState>
  )
}

export default App

// <div className='users-overlay'>
// </div>

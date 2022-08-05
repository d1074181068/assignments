const { createRoot } = ReactDOM
const { useState } = React
const arr = [...Array(4).keys()]
// const randomArr = [
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ]
const root = createRoot(document.querySelector('.root'))

const App = () => {
  const [addClass, setAddClass] = useState('content action_content')
  const displayContent = () => {
    if (addClass === 'content action_content') {
      setAddClass('content action_content active')
    } else {
      setAddClass('content action_content')
    }
  }

  return (
    <div className='wrap'>
      <Header />
      <Banner />
      <main className='container'>
        <h2 className='section_title'>Section Title</h2>
        <Content />
        <button className='action_btn' onClick={displayContent}>
          Call to Action
        </button>
        <DisplayContent changClassName={addClass} />
      </main>
    </div>
  )
}
const Header = () => {
  const [handleList, setHandleList] = useState('nav_bar')
  const diplayNavBar = () => {
    if (handleList === 'nav_bar') {
      setHandleList('nav_bar active')
    } else {
      setHandleList('nav_bar')
    }
  }
  return (
    <header className='header'>
      <h1 className='logo'>
        <a href='#'>Website Title / Logo</a>
      </h1>
      <ul className={handleList}>
        <li>
          <i className='fas fa-times close_bar' onClick={diplayNavBar}></i>
        </li>
        {arr.map((item, index) => {
          return (
            <li key={index + 4}>
              {' '}
              <a href='#'>Item {index + 1}</a>{' '}
            </li>
          )
        })}
      </ul>
      <i className='fas fa-bars humber_list' onClick={diplayNavBar}></i>
    </header>
  )
}

const Banner = () => {
  const [message, setMessage] = useState('Welcome Message')

  const changeText = () => {
    if (message === 'Welcome Message') {
      setMessage('Have a Good Time!')
    } else {
      setMessage('Welcome Message')
    }
  }

  return (
    <div className='banner' onClick={changeText}>
      {message}
    </div>
  )
}

const Content = () => {
  return (
    <ul className='content'>
      {arr.map((item, index) => {
        return (
          <li className={`content${index + 1}`} key={index + 10}>
            Content Box {index + 1}
          </li>
        )
      })}
    </ul>
  )
}

const DisplayContent = (props) => {
  const { changClassName } = props

  return (
    <ul className={changClassName}>
      {arr.map((item, index) => {
        return (
          <li className={`content${index + 1}`} key={index + 2}>
            Content Box {index + 1}
          </li>
        )
      })}
    </ul>
  )
}

// function randomKey() {
//   let key = ''
//   for (let i = 0; i < 6; i++) {
//     const randomText = Math.floor(Math.random() * randomArr.length)
//     key += randomArr[randomText]
//   }

//   return key
// }

root.render(<App />)

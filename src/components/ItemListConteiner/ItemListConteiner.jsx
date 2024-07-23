import './App.css'
import { Button } from './components/Button'
import { ItemCount } from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


export function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="hola"/>
      <ItemCount />
    </>
  )
}

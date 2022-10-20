import { Navigation, NavigationLink } from '../AppMenu/AppMenu.styled';


export const AppMenu = () => {
  return (
    <header>
    <Navigation>
      <NavigationLink to='/'>Home</NavigationLink>
      <NavigationLink to='/movies'>Movies</NavigationLink>
    </Navigation>
  </header>
  )
}
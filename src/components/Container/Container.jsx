import {ContainerWrap} from './Container.styled'

function Container({ children }) {
  return <ContainerWrap>{children}</ContainerWrap>;
}

export default Container;
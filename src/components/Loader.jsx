import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return <div>
  <FallingLines
  color="#ae62e1"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
  </div>
}
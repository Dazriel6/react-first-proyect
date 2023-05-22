

export const Input = () => {
  return <input onChange={ManejoEvento} />
  
}

const ManejoEvento = (content) => {
  alert(content.target.value);
}